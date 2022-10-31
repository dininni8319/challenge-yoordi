import { JsxEmit } from "typescript";
import { ICard, IOrder, getTotalPrice } from "../utilities";
import { AppCss } from "../../App.css";
const Orders = ({ orders }:{ orders:IOrder[] } ):JSX.Element => {
   return (
      <div>
         {
           orders?.map((item: IOrder) => {
           return <ul key={`order${item._id}`} className={AppCss.card}>
              {item.refNumber}
              </ul>;
        })}
      </div>
   )
}

export default Orders;