import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotModalPage } from './forgot-modal';

@NgModule({
  declarations: [
    ForgotModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotModalPage),
  ],
})
export class ForgotModalPageModule {}
