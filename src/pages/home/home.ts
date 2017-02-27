import { Component,ChangeDetectorRef } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var QRScanner: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
scanInProgress = false;
  constructor(public navCtrl: NavController,public changeDetect: ChangeDetectorRef) {
    
  }


  scanQrCode() {

    this.scanInProgress = true;
    this.changeDetect.detectChanges();
    try {
      QRScanner.scan((err, text) => {
        if (err) {
          if (err.name === 'SCAN_CANCELED') {
            console.error('The scan was canceled before a QR code was found.');
            return;
          }
          if (err.name === 'CAMERA_ACCESS_RESTRICTED') {
            console.error('The scan was canceled before a QR code was found.');
            return;
          }
          if (err.name === 'CAMERA_ACCESS_DENIED') {
            console.error('The scan was canceled before a QR code was found.');
            return;
          }
          if (err.name === 'UNEXPECTED_ERROR') {
            console.error('The scan was canceled before a QR code was found.');
            return;
          }

         
        } else {
          // The scan completed, display the contents of the QR code:
        
        }
      });
      
        QRScanner.show((res)=>{
          console.log(res);
        });

    }
    catch (err) {
      console.info(err)
    }

  }

}
