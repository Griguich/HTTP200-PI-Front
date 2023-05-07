import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderViewDto } from '../../Modules/order-view-dto';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  payOrder(orderId: number) {
    throw new Error('Method not implemented.');
  }
  createOrder(createOrderDto: { userId: string; orderItems: never[]; }) {
    throw new Error('Method not implemented.');
  }
  private readonly apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }
  getOrderById(id: number): Observable<OrderViewDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<OrderViewDto>(url);
  }

  getAllOrders(): Observable<OrderViewDto[]> {
    const url = `${this.apiUrl}/users/Allorders`;
    return this.http.get<OrderViewDto[]>(url);
  }
  deleteOrderById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
