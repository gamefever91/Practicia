import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  document: any;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    //   this.http.get('https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', { responseType: 'blob' })
    //     .subscribe(res => {
    //       const file = new Blob([res], { type: 'application/pdf' });
    //       const fileURL = URL.createObjectURL(file);
    //       this.src = fileURL;
    //     });
    // }

    this.document = await this.http.get('./assets/data.json').toPromise();
    console.log(this.document, 'document');
  }

  openDialer() {
    const phoneNumber = '1234567890'; // Replace with the phone number you want to dial.
    window.location.href = `tel:${phoneNumber}`;
  }

  


}
