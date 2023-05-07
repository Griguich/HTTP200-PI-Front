export interface CreateorderDto {
    userId: number;
  orderItems: { productId: number, quantity: number }[];

  //userId: number;
  //orderItems: Array<{
    //productId: number;
    //quantity: number;
 // }>;
  //totalPrice: number; // Add totalPrice property
}

