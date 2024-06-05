import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [ItemComponent],
})
export class ItemModule {}
