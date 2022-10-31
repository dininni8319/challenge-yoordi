export interface ICard {
  id: number,
  name: string,
  price: number
}

export interface IOrder {
  map(arg0: (item: IOrder) => JSX.Element): JSX.Element;
  refNumber: number,
  date: Date,
  card: ICard[],
  _id: number,
}


export function getTotalPrice(obj: ICard[]): number{
   let total = 0
   for (const item of obj) {
      total += item.price
   }

   return total;
}

