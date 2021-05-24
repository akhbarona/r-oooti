import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder} from '../actions/orderActions';

function DetailPage(props) {


  const dispatch = useDispatch();
  useEffect(() => {
  
      dispatch(detailsOrder(props.match.params.id));
   
    return () => {
    };
  }, [dispatch,props]);



  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Pengiriman ke
          </h3>
            <div>{order.shippingAddress.address}, {order.shippingAddress.city},
          {order.shippingAddress.postalCode}, {order.shippingAddress.country},
          </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                 Keranjang Belanja
          </h3>
                <div>
                  Price
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                            {item.name}
                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>

        </div>

      </div>
    </div>

}

export default DetailPage;