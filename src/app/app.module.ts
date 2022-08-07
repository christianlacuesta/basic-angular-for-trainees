import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SampleCrudComponent } from './sample-crud/sample-crud.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule } from '@angular/common/http';
import { SampleFormComponent } from './sample-crud/sample-form/sample-form.component';
import { SampleTableComponent } from './sample-crud/sample-table/sample-table.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SampleCrudComponent,
    SampleFormComponent,
    SampleTableComponent,
    LoginComponent,
    IndexComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
