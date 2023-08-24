import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularMaterialDropdownComponent } from './Component/angular-material-dropdown/angular-material-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    AngularMaterialDropdownComponent
  ],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
