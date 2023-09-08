import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareButtonsComponent } from 'src/app/components/share-buttons/share-buttons.component';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {
  document: any;
  src = '';
  filename: string = '';
  qrImage: any;
  qrBase64: any;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private _bottomSheet: MatBottomSheet,
    private operSer: OperationsService
  ) {}

  async ngOnInit() {
    //   this.http.get('https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', { responseType: 'blob' })
    //     .subscribe(res => {
    //       const file = new Blob([res], { type: 'application/pdf' });
    //       const fileURL = URL.createObjectURL(file);
    //       this.src = fileURL;
    //     });
    // }

    // this.document = await this.http.get('./assets/data.json').toPromise();
    // console.log(this.document, 'document');
    this.isLoading = true;
    const obj = {
      reference:
        'td5Ws7z82LURem4FZEhH1YyLoNVZaCQuz9orZ1ZYJdHo5HcavOYfnsZEL5h+euBY',
    };

    this.operSer.getDocuments(obj).subscribe((res) => {
      if (res) {
        this.document = res;
        this.qrBase64 = this.document.qr_image;
        this.qrImage = 'data:image/png;base64,' + this.qrBase64;
      }

      this.isLoading = false;
    });

    // this.document = this.sanitizer.bypassSecurityTrustResourceUrl(this.document.document_content);
    // console.log(this.document, 'document');
    // this.src = this.document.document_content;
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

  openBottomSheet(): void {
    this._bottomSheet.open(ShareButtonsComponent);
  }
}
