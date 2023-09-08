import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ShareButtonsComponent } from 'src/app/components/share-buttons/share-buttons.component';

@Component({
  selector: 'app-main-document',
  templateUrl: './main-document.component.html',
  styleUrls: ['./main-document.component.scss'],
})
export class MainDocumentComponent implements OnInit {
  src: any;
  document: any;
  isParam: boolean = false;
  filename: string = '';
  isLoading: boolean = false;
  pageNumber: number = 0;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private operSer: OperationsService,
    private _bottomSheet: MatBottomSheet
  ) {}

  async ngOnInit() {
    this.isLoading = true;
    const obj = {
      reference:
        'td5Ws7z82LURem4FZEhH1YyLoNVZaCQuz9orZ1ZYJdHo5HcavOYfnsZEL5h+euBY',
    };

    this.operSer.getDocuments(obj).subscribe((res) => {
      if (res) {
        this.document = res;

        //check quary params
        this.route.queryParams.subscribe((params) => {
          if (params['file']) {
            this.isParam = true;
          } else {
            this.isParam = false;
          }
        });

        if (this.isParam) {
          this.document?.common_files_list.filter((item: any) => {
            this.filename = item.common_files_name;
            if (
              item.common_files_name == this.route.snapshot.queryParams['file']
            ) {
              // this.document = item;
              this.src =
                'data:application/pdf;base64,' + item.common_files_content;
            }
          });
        } else {
          this.src =
            'data:application/pdf;base64,' + this.document.document_content;
        }
      }
      this.isLoading = false;
    });

    // this.document = await this.http.get('./assets/data.json').toPromise();
    // console.log(this.document, 'document');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ShareButtonsComponent);
  }

  download() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.src);
    link.setAttribute('download', this.filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  // print() {

  // const iframe = document.createElement('iframe');
  // iframe.setAttribute(
  //   'style',
  //   'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px'
  // );
  // document.body.appendChild(iframe);
  // iframe.src = this.src;

  // // Check if iframe.contentWindow is not null before calling print()
  // if (iframe.contentWindow) {
  //   iframe.contentWindow.print();
  // } else {
  //   console.warn(
  //     'iframe.contentWindow is null or undefined. Unable to print.'
  //   );
  // }
  // }

  print() {
    if (this.src) {
      // Remove the data URI prefix
      const base64Data = this.src.replace(/^data:application\/pdf;base64,/, '');

      // Convert base64 data to a Blob
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      // Create a Blob URL for the PDF
      const pdfBlobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger a click event
      const a = document.createElement('a');
      a.href = pdfBlobUrl;
      a.target = '_blank'; // Open in a new tab or window
      a.click();

      // Clean up the Blob URL after triggering the click event
      setTimeout(() => {
        URL.revokeObjectURL(pdfBlobUrl);
      }, 100);
    } else {
      alert('No PDF data available to print.');
    }
  }

  copyToClipboard() {
    const input = document.createElement('input');
    input.value = this.src;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}
