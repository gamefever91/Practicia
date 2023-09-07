import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='app';
//   src = '';
//   document: any;

//   constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

//   async ngOnInit() {
//   //   this.http.get('https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', { responseType: 'blob' })
//   //     .subscribe(res => {
//   //       const file = new Blob([res], { type: 'application/pdf' });
//   //       const fileURL = URL.createObjectURL(file);
//   //       this.src = fileURL;
//   //     });
//   // }

//   this.document = await this.http.get('./assets/data.json').toPromise();
//   // console.log(this.document.document_content, 'data');
//   // this.src = this.document.document_content;
//   // console.log(this.src, 'src');
// //header file too large error i wan to bas64 to pdf file  and display in pdf viewer
// this.src = 'data:application/pdf;base64,' + this.document.document_content;
// console.log(this.src, 'src');


//   // this.document = this.sanitizer.bypassSecurityTrustResourceUrl(this.document.document_content);
//   // console.log(this.document, 'document');
//   // this.src = this.document.document_content;
//   }
}
