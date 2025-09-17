import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersModule,
    ProductsModule
  ],

  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }