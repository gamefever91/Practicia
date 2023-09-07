import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

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
