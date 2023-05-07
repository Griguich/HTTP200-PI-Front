import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateorderDto } from '../../Modules/createorder-dto';
import { OrderViewDto } from '../../Modules/order-view-dto';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';
  taxRate: number = 0.1; // 10% tax
  shippingFee: number = 8; // 8 DTN shipping fee

  constructor(private http: HttpClient) { }

createOrder(createOrderDto: CreateorderDto): Observable<OrderViewDto> {
   return this.http.post<OrderViewDto>(`${this.apiUrl}/create`, createOrderDto);
}

  
  createSession(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${orderId}/payment`, {});
  }
  
  payOrder(orderId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${orderId}/payment`);
 }


}
