import React from "react";
import "./order-card.css";

const OrderCard = (props) => {

    
    function handleClickMore(){
        props.setCount([...props.count, [props.tb[0].split(',')[0], parseInt(props.tb[0].split(',')[1])]])
    }


    function handleClickLess(){
        const findIndex = props.count.findIndex(elem => elem[0] == props.tb[0].split(',')[0])
        props.setCount(props.count.filter(elem => props.count.indexOf(elem) != findIndex))
    }

    return(
        <li className="listItem">
            <h5>{props.tb[0].split(',')[0]}</h5>
            <div>
                <button onClick={handleClickLess}>-</button>
                <span>{props.tb[1]}</span>
                <button onClick={handleClickMore}>+</button>
            </div>
        </li>
    )
}

export default OrderCard;