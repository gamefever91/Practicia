import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './pages/address/address.component';
import { CardPreviewComponent } from './pages/card-preview/card-preview.component';
import { DocumentComponent } from './pages/document/document.component';
import { MainDocumentComponent } from './pages/main-document/main-document.component';
import { PincodeComponent } from './pages/pincode/pincode.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ScanComponent } from './pages/scan/scan.component';

const routes: Routes = [
  { path: '', component: ScanComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'main-document', component: MainDocumentComponent },
  { path: 'card-preview', component: CardPreviewComponent },
  { path: 'address', component: AddressComponent },
  { path: 'pincode', component: PincodeComponent },
  { path: 'qr-code', component: QrCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
