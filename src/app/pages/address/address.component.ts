import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  constructor(
    public dialog: MatDialog
  ) {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { name: 'test', type: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
