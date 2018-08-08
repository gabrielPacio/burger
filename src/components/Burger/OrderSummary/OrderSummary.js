import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            )
        );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Enjoy your burger!</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;