const CartItem = ({ item }) => {
  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <p>
        <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default CartItem;
