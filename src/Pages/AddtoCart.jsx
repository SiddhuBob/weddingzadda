import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import "../Css/AddtoCart.css";
import EmptyComp from "../Component/Empty/empty";
import { useCartContext } from '../context/addToCart';
import { FiMinus, FiPlus } from 'react-icons/fi';

const AddtoCart = () => {
  const { cartValue, setCartCount, cartCount, setCartValue } = useCartContext();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    updateSubtotal(cartValue || []);
  }, [cartValue]);

  const removeCartData = (index) => {
    setCartValue((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      addtoLocalStorage(updatedData);
      setCartCount(updatedData.length);
      return updatedData;
    });
  };

  const updateSubtotal = (data) => {
    const subTotalValue = data.reduce((total, item) => {
      return total + item.product_price * item.productQuantity;
    }, 0);
    setSubTotal(subTotalValue);
  };

  const addtoLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const handleIncrement = (index) => {
    setCartValue((prevData) => {
      const updatedData = [...prevData];
      const price = parseFloat(updatedData[index].product_price.replace(/\s/g, "")); // Convert to number
      updatedData[index].productQuantity = parseInt(updatedData[index].productQuantity) + 1;
      updatedData[index].productQuantityPrice = (updatedData[index].productQuantity * price).toString(); // Convert to string
      addtoLocalStorage(updatedData);
      updateSubtotal(updatedData);
      return updatedData;
    });
  };


  const handleDecrement = (index) => {
    setCartValue((prevData) => {
      const updatedData = [...prevData];
      if (updatedData[index].productQuantity > 1) {
        const price = parseFloat(updatedData[index].product_price.replace(/\s/g, ""));
        updatedData[index].productQuantity -= 1;
        updatedData[index].productQuantityPrice = (updatedData[index].productQuantity * price).toString(); // Convert to string
        addtoLocalStorage(updatedData);
        updateSubtotal(updatedData);
      }
      return updatedData;
    });
  };

  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Shopping Cart</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cartValue && cartValue.length > 0 ? (
            <>
              <div className='Product-addedCart-Side-Bar'>
                {
                  cartValue.map((elem, index) => {
                    return (
                      <div key={index} className='Product-addedCart-Side-details'>
                        <div className='Product-addedCart-Image-con'>
                          <div className='Product-addedCart-Image'>
                            <img src={elem.productImage} alt="" />
                          </div>
                        </div>
                        <div className='Product-details-addedCart-price-name'>
                          <h2>{elem.productName}</h2>
                          <h3><span>Size : {elem.productSize}</span></h3>
                          <h3><span>Color : {elem.productColor}</span></h3>
                          <h3><span>Price : </span>{elem.product_price} ₹</h3>
                          <div className='Peoduct-Details-Section-1-Quantity-main-con'>
                            <div className='Product-details-Quantity-counter-material'>
                              <button onClick={() => handleDecrement(index)}>
                                <FiMinus />
                              </button>
                              <h3>{elem.productQuantity}</h3>
                              <button onClick={() => handleIncrement(index)}>
                                <FiPlus />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='Product-details-addedCart-cancel-btn'>
                          <div className='Product-details-addedCart-cancel-btn-con' onClick={() => removeCartData(index)}>
                            <RxCross2 />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='Product-details-Addedcart-total-con'>
                <div className='Product-details-Addedcart-total'>
                  <div className='Product-details-Addedcart-total-title'>
                    <h4>Subtotal:</h4>
                  </div>
                  <div className='Product-details-Addedcart-total-Amount'>
                    <h5>{subTotal} ₹</h5> {/* Display Subtotal */}
                  </div>
                </div>
                <div className='Product-details-Addedcart-btn'>
                  <div className='Product-details-Addedcart-btn-ViewCart'>
                    <Link to="/CheckOutPage">
                      <button data-bs-dismiss="offcanvas" aria-label="Close">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : <EmptyComp message="No data in cart" />}
        </div>
      </div>
    </>
  );
}

export default AddtoCart;
