import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';



function ProductPage(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(detailsProduct(props.match.params.id));
    return () => {

    }
  },[dispatch,props])

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };
  return (
      <div>
        {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="produk"></img>
          </div>
          <div className="product-detail">
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              Deskripsi:
              <li className="details-description">
                {product.description}
              </li>
            </ul>
          </div>
          <div className="details-action">
           <ul>
              <li>
                Harga: <b>Rp {product.price}</b>
              </li>
              <li>
              Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
              </li>
              <li>
               Jumlah: <select value={qty} onChange={(e)=> {setQty(e.target.value)}}>
                {
                 [...Array(product.countInStock).keys()].map((x)=>(
                  <option key={x+1} value={x+1}>{x+1}</option>))
                }
               </select>
              </li>
              <li>
              {product.countInStock > 0 && (
                <button onClick={handleAddToCart} className="button primary">Tambah ke keranjang</button>)}
              </li>
           </ul>
          </div>
          </div>
        </div>)
      }
      </div>
    )
}


export default ProductPage