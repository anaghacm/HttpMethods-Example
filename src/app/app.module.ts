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
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
