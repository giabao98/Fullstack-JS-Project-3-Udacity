import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemListRoutingModule } from './item-list.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemModule } from '../item/item.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ItemListRoutingModule,
    ReactiveFormsModule,
    ItemModule,
  ],
  exports: [ItemListComponent],
})
export class ItemListModule {}
