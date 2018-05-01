import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrassrootsHomeComponent } from './grassroots-home/grassroots-home.component';
import { GrassrootsProductsComponent } from './grassroots-products/grassroots-products.component';
import { GrassrootsAboutComponent } from './grassroots-about/grassroots-about.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GrassrootsHomeComponent,
    GrassrootsProductsComponent,
    GrassrootsAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
