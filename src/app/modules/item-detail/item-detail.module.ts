import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail.component';
import { ItemLDetailRoutingModule } from './item-detail.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ItemDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ItemLDetailRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ItemDetailComponent],
})
export class ItemDetailModule {}
