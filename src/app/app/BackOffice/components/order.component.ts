import { Component, OnInit } from '@angular/core';
import { OrderViewDto } from '../../Modules/order-view-dto';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../Service/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrdersComponent implements OnInit {
  orders!: OrderViewDto[];


  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: OrderViewDto[]) => {
        this.orders = orders;
        console.log('Orders:', orders);
      },
      (error) => {
        console.error('Error while loading orders:', error);
      }
    );
  }
  deleteOrder(id: number): void {
    this.orderService.deleteOrderById(id).subscribe(
      () => {
        console.log(`Order with ID ${id} deleted successfully.`);
        this.loadOrders();
      },
      (error) => {
        console.error(`Error while deleting order with ID ${id}:`, error);
      }
    );
  }
}
    

