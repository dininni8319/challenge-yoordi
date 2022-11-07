import { useEffect, useState } from "react";
import { ICard } from "./components/utilities";
import { AppCss, colorVariant, localVarStyle } from "./App.css";
import fetch from "cross-fetch";
import Orders from "./components/Orders";
import { IOrder } from "./components/utilities";
import { light } from "./vars.css";

export const App = () => {
    const [ orders, setOrders ] = useState<IOrder[]>([]);

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
         
           {/* <StyledComponentProps color="secondary"></StyledComponentProps> */}
            <Orders orders={orders} />
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

