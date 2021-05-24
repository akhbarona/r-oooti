import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentPage() {
const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const { cartItems, shipping } = cart;

  const totalHarga = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  
  const satuan = cartItems.reduce((a, c) => a + c.qty, 0);
  const placeOrderHandler = () => {
    // create an order
   dispatch(createOrder({
       orderItems: cartItems, 
       totalPrice: totalHarga, 
       items: satuan, 
       address: shipping
   }))
  }

  return (
      
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form action="https://wa.me/6281258655551" >
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>
            <li>
                <p>
                    Jika sudah yakin dengan pesanan anda maka lakukan pembayaran melalui rekening bank dibawah ini. Jika sudah melakukan pembayaran sertakan bukti kirim melalui tombol dibawah ini
                </p>
            </li>
            <li>
                <b>Bank BRI.</b>
                 Atas Nama : Akhbarona Syanulin<br />
               Nomor Rekening : 137 000 591 8319
            </li>
            <li>
              <button type="submit" className="button primary" onClick={placeOrderHandler}>
                Kirim bukti bayar
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentPage;
