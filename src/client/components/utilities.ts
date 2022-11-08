export type OrdersType = {
  id: number,
  name: string,
  price: number,
}

export interface ICard {
  id: number,
  name: string,
  price: number,
  options: OrdersType[]
}

export interface IOrder {
  map(arg0: (item: IOrder) => JSX.Element): JSX.Element;
  refNumber: number,
  date: number,
  card: ICard[],
  _id: number,
}

export function getTotalPrice(obj: ICard[]): string{
   let total = 0
   for (const item of obj) {
      total += item.price;
      for (const option of item.options) {
        total += option.price;
      }
   }
   return total.toFixed(2);
}

export function formatDate(date: number): string{
  if (!date) return "The date was not found!";
  let time = new Date(date);
  let timeNow = new Date().getDay();

  let day = time.getDay() + 1;
  let month = time.getMonth() + 1;
  let year = time.getFullYear()

  return ` ${day < 10 ? "0" + day: day}.${month < 10 ? "0" + month : month
  }.${year}`;
}

