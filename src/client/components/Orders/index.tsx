import { isTemplateSpan, JsxEmit } from "typescript";
import { ICard, IOrder, getTotalPrice, formatDate } from "../utilities";
import { AppCss } from "../../App.css";
import { App } from "../../App";
import { useState } from "react";

const Orders = ({ orders, setOrders }:{ orders:IOrder[] ,setOrders: () => IOrder[]} ):JSX.Element => {
   const [ done, setDate ] = useState(false)
   const [ doneOrders, setDoneOrders]= useState<IOrder[]>()

   const handleSetdone = (id:number) => {
      let done = orders.filter(el => el._id !== id)
      // setDoneOrders(done.concat.doneOrders)
      setDate(true);
   }
   return (
      <div className={AppCss.container}>
         
         {
           orders?.sort((a:IOrder, b: IOrder) => a.date - b.date)
           .reverse()
           .map((item: IOrder) => {
            return <ul key={`order${item._id}`} className={AppCss.card}>
              <li>
                <span>{item.refNumber}</span>
              </li>
                 <span>{formatDate(item.date)}</span>
                 <li>
                <span>Total Price: {getTotalPrice(item.card)}</span>
              </li>
               {item.card.map(el => {
                  return (
                     <ul key={el.id} className={AppCss.ul}>
                        <li>Name: {el.name}</li>
                        <li>Price{el.price}</li>
                        <li></li>
                     </ul>
                  )
               })}
              <button onClick={() => handleSetdone(item._id)}></button>
              </ul>
        })}
      </div>
   )
}

export default Orders;