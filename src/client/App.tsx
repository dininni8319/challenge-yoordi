import { useEffect, useState } from "react";
import { ICard } from "./components/utilities";
import { AppCss } from "./App.css";
import fetch from "cross-fetch";
import Orders from "./components/Orders";
import { IOrder } from "./components/utilities";

export const App = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    console.log(orders, 'testing the orders');
    
    useEffect(() => {
        const getApi = async () => {
            const result = await fetch("http://localhost:4000/orders/");
            const resJson = await result.json();
            setOrders(resJson);
        };

        getApi();
    }, []);

   
    return (
        <div>

            <Orders orders={orders}/>
        </div>
    );
};
