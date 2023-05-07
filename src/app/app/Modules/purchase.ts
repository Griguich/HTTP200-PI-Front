import { User } from "./user";
import { Order } from "./order";
import { Orderitem } from "./orderitem";
export class Purchase {
  user! : User;
  order!: Order;
  orderItems!: Orderitem[];
}
