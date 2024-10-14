import { useState, ChangeEvent  } from "react";

function OnChange() {
  //empty initial string so we can trigger the setter when we type
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  //updates quantity everytime you type in the input
  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseFloat(e.target.value));
  }

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e: ChangeEvent<HTMLSelectElement>) {
    setPayment(e.target.value);
  }
  //for radio buttons, you need to set the shipping for it to be checked
  function handleShippingChange(e: ChangeEvent<HTMLInputElement>) {
    setShipping(e.target.value);
  }
  //you can use arrow function or call a function for onchange
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>

      

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Our quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter your comment"
      ></textarea>
      <p>comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="visa">Visa</option>
        <option value="master card">Master Card</option>
        <option value="gift card">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pickup
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default OnChange;
