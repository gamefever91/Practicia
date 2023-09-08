import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { AddressComponent } from './pages/address/address.component';
import { CardPreviewComponent } from './pages/card-preview/card-preview.component';
import { DocumentComponent } from './pages/document/document.component';
import { MainDocumentComponent } from './pages/main-document/main-document.component';
import { PincodeComponent } from './pages/pincode/pincode.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ScanComponent } from './pages/scan/scan.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorousalSliderComponent } from './components/corousal-slider/corousal-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AddressComponent,
    CardPreviewComponent,
    DocumentComponent,
    MainDocumentComponent,
    PincodeComponent,
    QrCodeComponent,
    ScanComponent,
    DialogBoxComponent,
    FooterComponent,
    SafePipe,
    CorousalSliderComponent,
    CardHeaderComponent,
    ShareButtonsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    CarouselModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faTwitter);
  }
}
