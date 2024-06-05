import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly commonService: CommonService,
    private readonly cartService: CartService
  ) {}

  cartItemNumber!: number;

  ngOnInit(): void {
    this.cartService.cartNumber.subscribe(number => {
      this.cartItemNumber = number;
    });
  }
}
