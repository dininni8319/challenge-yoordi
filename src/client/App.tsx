import { useEffect, useState } from "react";
import { ICard } from "./components/utilities";
import { AppCss, colorVariant, localVarStyle } from "./App.css";
import fetch from "cross-fetch";
import Orders from "./components/Orders";
import { IOrder } from "./components/utilities";
import { type } from "os";
import DoneOrders from './components/DoneOrders/index';

export const App = () => {
    const [ doneOrders, setDoneOrders]= useState<IOrder[]>([])
    const [ orders, setOrders ] = useState<IOrder[]>([]);
    const [ show, setShow ] = useState(false);
  
    
    const handleDoneOrders = (id:number):any => {
        let done = orders.filter(el => el._id === id);
        let newOrders = orders.filter(el => el._id !== id);
        
        setDoneOrders((prev:any) => {
          return [...done, ...prev]
        })
        setOrders(prev => [...newOrders])
    }

    useEffect(() => {
        const getApi = async () => {
            const result = await fetch("http://localhost:4000/orders/");
            const resJson = await result.json();
            setOrders(resJson);
        };

        getApi();
    }, []);

    return (
        <div className={AppCss.background}>
            <button onClick={() => setShow(prev => !prev)}>{show ? 'Done Orders': 'Orders'}</button>
            { 
                show ? <DoneOrders doneOrders={doneOrders} show={show} /> 
                : <Orders orders={orders} handleDoneOrders={handleDoneOrders} show={show}/>
            }  
           {/* <StyledComponentProps color="secondary"></StyledComponentProps> */}
        </div>
    );
};


// if you want you can install an extra library called vanillia-extract/sprinkels
// export interface StyleComponentProps {
//     color: keyof typeof colorVariant;
// }
// function StyledComponentProps ({ color }:StyleComponentProps) {
//     return <div className={colorVariant[color]}>style</div>
// }

