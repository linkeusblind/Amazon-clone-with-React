import { isTaggedTemplateExpression } from '@babel/types';
import React from 'react'
import { useStateValue } from '../StateProvider';
import './Checkout.scss';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://netrockdeals.sirv.com/Amazon-Prime-banner1.jpg" alt="" className="checkout__ad" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkoout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
