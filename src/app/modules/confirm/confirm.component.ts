import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';
import { NAVIGATES } from 'src/app/utils/constants';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  orders!: Orders;

  constructor(
    private readonly router: Router,
    private readonly commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.orders = this.commonService.getOrders();
  }

  onBack() {
    this.router.navigateByUrl(NAVIGATES.ITEM_LIST);
  }
}
