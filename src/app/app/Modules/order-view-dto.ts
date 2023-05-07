import { OrderItemViewDto } from './order-item-view-dto';
export interface OrderViewDto {
    id: number;
    createdDate: Date;
    totalPrice: number;
    orderItems: OrderItemViewDto[];
    status: string;
  }

