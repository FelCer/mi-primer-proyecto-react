import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/index';

import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: String(process.env.Client_Id_PayPal),
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    react: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(`Funcion de payment success.`);
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handlePaymentCancel = (data) => {
    console.log(`Funcion de compra cancelada`);
    console.log(data);
  };

  const handlePaymentError = (error) => {
    console.log(`Funcion de error al realizar compra.`);
    console.log(error);
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        {cart.length > 0 ? <h3>Resumen del pedido:</h3> : <h3>Sin pedidos!</h3>}
        {cart.map((item) => (
          <div key={item.cartId} className="Payment-item">
            <div className="Patment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log('Start Payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => handlePaymentError(error)}
              onPaymentCancel={(data) => handlePaymentCancel(data)}
            />
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
        </div>
      )}
    </div>
  );
};

export default Payment;
