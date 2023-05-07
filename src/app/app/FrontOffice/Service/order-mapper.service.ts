import { OrderViewDto } from '../../Modules/order-view-dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderMapperService {

  toDto(data: any): OrderViewDto {
    return {
      id: data.id,
      createdDate: data.createdDate,
      totalPrice: data.totalPrice,
      orderItems: data.orderItems,
      status: data.status
    };
  }

  toDtos(data: any[]): OrderViewDto[] {
    return data.map(this.toDto);
  }
}
