import { isTemplateSpan, JsxEmit } from "typescript";
import { ICard, IOrder,OrdersType, getTotalPrice, formatDate } from "../utilities";
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
              return ( 
                  <ul key={`order${item._id}`} className={AppCss.card}>
                     <li className={AppCss.cardSpan}>
                        <span>{item.refNumber}</span><span>{formatDate(item.date)}</span>
                     </li>
                        
                     <li className={AppCss.cardTitle}>
                        <span>Amount ${getTotalPrice(item.card)}</span>
                     </li>
               { orderDetail &&
                 currentId === item._id 
                 && item.card.map((el:ICard) => {
                  return (
                     <>
                     <div className={AppCss.ul}>
                        <li> {el.name}</li>
                        <li>${el.price}</li>
                     </div>
                         {
                           el.options?.map((opt: OrdersType)=> {
                              return ( 
                                 <ul key={opt.id} className={AppCss.options}> 
                                   <li>{opt.name}</li> 
                                   <li>${opt.price}</li> 
                                 </ul>
                              )
                           })
                        }
                     </>
                  )
               })}
               <span onClick={() => {
                  handleDetailOrder(item._id)
                  setCurrentId(item._id)
               }
            
               } className={AppCss.detailSpan}>{
                  orderDetail && currentId === item._id ? "hide detail...": '...Show order details'}
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