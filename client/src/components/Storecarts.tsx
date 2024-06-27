import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/reducers/ReducerCart";
import { StoreCart } from "../interface";

export default function StoreCarts() {
  const getData: any = useSelector((state: any) => state.carts.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="store-cart-app">
      <div className="cart-list">
        <h2>Cart List</h2>
        {getData.map((cart: StoreCart) => (
          <div key={cart.id} className="cart-item">
            <img src={cart.image} alt={cart.name} />
            <div className="cart-details">
              <h3>{cart.name}</h3>
              <p>{cart.content}</p>
              <p>Stock: {cart.stock}</p>
            </div>
            <div className="cart-actions">
              <input type="number" value={cart.quantity} min={1}></input>
              <p>Price: ${cart.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {getData.map((item: StoreCart) => (
          <div key={item.id} className="shopping-cart-item">
            <img src={item.image} alt={item.name} />
            <div className="shopping-cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <input type="number" value={item.quantity} />
                <span>Quantity: {item.quantity}</span>
                <button className="update-button">Update</button>
              </div>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        ))}
        <div className="subtotal">
          <p>Gía tiền: $</p>
        </div>
        <div className="update-message">Product updated successfully</div>
      </div>
    </div>
  );
}
