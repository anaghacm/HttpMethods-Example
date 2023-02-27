import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { PostMethodComponent } from './homepage/post-method/post-method.component';
import { PutMethodComponent } from './homepage/put-method/put-method.component';
import { PatchMethodComponent } from './homepage/patch-method/patch-method.component';
import { DeleteMethodComponent } from './homepage/delete-method/delete-method.component';
import { AccordionComponent } from './homepage/accordion/accordion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { StatusDisplayInterceptor } from './interceptors/status-display.interceptor';
import { ProgressBarInterceptor } from './interceptors/progress-bar.interceptor';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostMethodComponent,
    PutMethodComponent,
    PatchMethodComponent,
    DeleteMethodComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, useClass:StatusDisplayInterceptor, multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, useClass:ProgressBarInterceptor, multi:true
    },
    ApiService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
