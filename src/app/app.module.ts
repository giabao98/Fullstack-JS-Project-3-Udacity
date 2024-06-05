import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemModule } from './modules/item/item.module';
import { ItemListModule } from './modules/item-list/item-list.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { CommonModule } from '@angular/common';
import { ItemDetailModule } from './modules/item-detail/item-detail.module';
import { CartModule } from './modules/cart/cart.module';
import { ConfirmModule } from './modules/confirm/confirm.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ItemListModule,
    ItemModule,
    ItemDetailModule,
    CartModule,
    ConfirmModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
