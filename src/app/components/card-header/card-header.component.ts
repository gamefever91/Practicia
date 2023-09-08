import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  document: any;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private operSer: OperationsService) {}

  async ngOnInit() {
    this.isLoading = true;
    const obj = {
      reference:
        'td5Ws7z82LURem4FZEhH1YyLoNVZaCQuz9orZ1ZYJdHo5HcavOYfnsZEL5h+euBY',
    };

    this.operSer.getDocuments(obj).subscribe((res) => {
      if (res) {
        this.document = res;
      }
      this.isLoading = false;
    });

    // this.document = await this.http.get('./assets/data.json').toPromise();
    // console.log(this.document, 'document');
  }

  openDialer() {
    const phoneNumber = '1234567890'; // Replace with the phone number you want to dial.
    window.location.href = `tel:${phoneNumber}`;
  }
}
