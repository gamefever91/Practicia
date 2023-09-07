import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareButtonsComponent } from 'src/app/components/share-buttons/share-buttons.component';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
})
export class CardPreviewComponent {
  src = '';
  document: any;
  isParam: boolean = false;
  filename: string = '';

  constructor(private _bottomSheet: MatBottomSheet) {}

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
}
