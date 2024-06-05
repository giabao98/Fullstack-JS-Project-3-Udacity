import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './modules/item-list/item-list.component';
import { NAVIGATES } from './utils/constants';
import { ItemDetailComponent } from './modules/item-detail/item-detail.component';
import { CartComponent } from './modules/cart/cart.component';
import { ConfirmComponent } from './modules/confirm/confirm.component';

const routes: Routes = [
  {
    path: NAVIGATES.ITEM_LIST,
    component: ItemListComponent,
  },
  {
    path: NAVIGATES.ITEM_DETAIL,
    component: ItemDetailComponent,
  },
  {
    path: NAVIGATES.CART,
    component: CartComponent,
  },
  {
    path: NAVIGATES.CONFIRM,
    component: ConfirmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
