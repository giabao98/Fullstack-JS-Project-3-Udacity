export interface Item {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
}

export interface Orders {
  fullName: string;
  total: number;
}
