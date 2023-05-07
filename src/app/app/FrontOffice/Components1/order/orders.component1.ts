import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { OrderService } from '../../Service/order.service';
import { CreateorderDto } from 'src/app/app/Modules/createorder-dto';
import { switchMap } from 'rxjs';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component1.html',
  styleUrls: ['./orders.component1.css'],
  providers: [CurrencyPipe],
})
export class Order1Component {
  getTotal(): string | number {
    return this.totalPrice;
  }
  stripe!: Stripe;
  elements!: StripeElements;
  card!: any;
  selectedProducts: any[] = [];
  totalPrice: number = 0;
  successMessage: string = '';
  productId!: number;
  quantity!: number;
  NotFound = true;
  orderForm: FormGroup | undefined;
  showConfirmationModal: boolean = false;
  withShipping: boolean = false;

  products: any[] = [
    {
      id: 1,
      name: 'product 1',
      price: 75,
      quantity: 0,
      image: 'produit1.png',
      status: 'unliked',
    },
    {
      id: 2,
      name: 'product 2',
      price: 30,
      quantity: 0,
      image: 'produit2.jpg',
      status: 'unliked',
    },
    {
      id: 3,
      name: 'product 3',
      price: 750,
      quantity: 0,
      image: 'produit3.jpg',
      status: 'unliked',
    },
    {
      id: 4,
      name: 'product 4',
      price: 150,
      quantity: 0,
      image: 'produit 4.jpg',
      status: 'unliked',
    },
    {
      id: 5,
      name: 'product 5',
      price: 175,
      quantity: 0,
      image: 'produit 5.jpg',
      status: 'unliked',
    },
    {
      id: 6,
      name: 'product 6',
      price: 18,
      quantity: 0,
      image: 'produit6.webp',
      status: 'unliked',
    },
  ];

  constructor(
    private orderService: OrderService,
    private FormBuilder: FormBuilder,
    private router: Router
  ) {}

  addProduct() {
    const product = this.products.find((p) => p.id === this.productId);
    if (product) {
      const existingProduct = this.selectedProducts.find(
        (p) => p.id === this.productId
      );
      if (existingProduct) {
        existingProduct.quantity += this.quantity;
      } else {
        this.selectedProducts.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: this.quantity,
          image: product.image,
        });
      }
      this.calculateTotalPrice();
    } else {
      this.NotFound = false;
    }
  }

  addQuantity(product: any) {
    product.quantity += 1;
    this.calculateTotalPrice();
  }

  removeProduct(product: any) {
    let index = this.selectedProducts.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      if (this.selectedProducts[index].quantity > 1) {
        this.selectedProducts[index].quantity -= 1;
      } /* else {
        this.selectedProducts.splice(index, 1);
      } */
    }
    this.calculateTotalPrice();
  }
  deleteRow(product: any) {
    let index = this.selectedProducts.findIndex((p) => p.id === product.id);

    this.selectedProducts.splice(index, 1);
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  submitOrder() {
    this.showConfirmationModal = true;
  }

  onAcceptOrder() {
    this.showConfirmationModal = false;
    let orderItems = this.selectedProducts.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    }));
    let createOrderDto = { userId: 1, orderItems: orderItems };
    this.orderService.createOrder(createOrderDto).subscribe((order) => {
      this.orderService.payOrder(order.id).subscribe(async (paymentData) => {
        window.open(paymentData.paymentUrl);
        window.alert('Thank you for your shopping!');
      });
    });
  }
  onDeclineOrder() {
    this.selectedProducts = [];
    this.totalPrice = 0;
    this.showConfirmationModal = false;
  }
}
