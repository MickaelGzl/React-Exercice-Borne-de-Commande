import React, { useEffect, useState } from "react";
import OrderCard from "../order-card/order-card";
import "./order-list.css";

const Order = (props) => {
    const [state, setState] = useState('Aucun article sélectionné.')

    useEffect( () =>{
        setState(props.count)
    })

    let ttx= 0;
    let ttxEuros;
    if(props.count.length > 0){
        props.count.map(ct =>{
            ttx += ct[1];
        })
        // let ttxToString = ttx.toString();
        // let cents = ttxToString.slice(-2);
        // ttxEuros = ttxToString.slice(0, -2) + '.' + cents + '€';
        ttxEuros = (ttx /100).toFixed(2);
    }

   let tab;
   let cpt;
    if(props.count.length > 0){
        cpt = props.count.reduce((obj, val) => {
            if (val in obj) {
                obj[val]++;
            } else {
                obj[val] = 1;
            }
            return obj;
        }, {});
        tab = Object.entries(cpt)
    }


    return(
        <div>
            <h3>Commande</h3>
            <div className="order">
               <ul>
                {props.count.length > 0 && tab.map(tb => (
                    <OrderCard key={tb[0]} tb={tb} count={props.count} setCount={props.setCount}/>
                ))}
               </ul>
                <div className="border">
                    Total: {ttxEuros != undefined ? ttxEuros : '0€'}
                </div>
            </div>
        </div>
    )
}

export default Order;