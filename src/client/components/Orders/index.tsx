import { isTemplateSpan, JsxEmit } from "typescript";
import { ICard, IOrder, getTotalPrice, formatDate } from "../utilities";
import { AppCss } from "../../App.css";
import { App } from "../../App";
import { useState } from "react";

const Orders = ({ orders}:{ orders:IOrder[]} ):JSX.Element => {
   const [ done, setDate ] = useState(false)
   const [ doneOrders, setDoneOrders]= useState<IOrder[]>([])
   const [ orderDetail, setOrderDetail ] = useState(false);
   const [ currentId, setCurrentId ] = useState(0);

   const handleSetdone = (id:number) => {
      let done = orders.filter(el => el._id !== id)
      setDoneOrders([...done])
      setDate(true);
   }

   const handleDetailOrder = (id: number) => {
      if (currentId === id) {
         setOrderDetail(prev => !prev);
      }
   }
   return (
      <div className={AppCss.container}>
         
         {
            orders?.sort((a:IOrder, b: IOrder) => a.date - b.date)
           .reverse()
           .map((item: IOrder) => {
              return ( <ul key={`order${item._id}`} className={AppCss.card}>
                  <li className={AppCss.cardSpan}>
                     <span>{item.refNumber}</span><span>{formatDate(item.date)}</span>
                  </li>
                     
                  <li className={AppCss.cardTitle}>
                     <span>Total Price: {getTotalPrice(item.card)}</span>
                  </li>
               {orderDetail && currentId === item._id && item.card.map(el => {
                  return (
                     <ul key={el.id} className={AppCss.ul}>
                        <li>Name: {el.name}</li>
                        <li>Price: {el.price}</li>
                     </ul>
                  )
               })}
               <span onClick={() => {
                  handleDetailOrder(item._id)
                  setCurrentId(item._id)
               }
            
               } className={AppCss.cardSpan}>{
                  orderDetail ? "hide detail...": '...Show order Detail'}
               </span>
               <button onClick={() => {
                  handleSetdone(item._id)
               }}>Done</button>
              </ul>

            )
        })}
      </div>
   )
}

export default Orders;