import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityFormPageRoutingModule } from './city-form-routing.module';

import { CityFormPage } from './city-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CityFormPageRoutingModule
  ],
  declarations: [CityFormPage]
})
export class CityFormPageModule {}
