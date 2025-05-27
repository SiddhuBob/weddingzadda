import React, { createContext, useContext, useEffect, useState } from "react";
import { Avatar, Button, Drawer, InputNumber, List, notification } from "antd";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCartList, setShowCartList] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [totalPrice, setTotalPrice] = useState([]);
  const handleCartList = () => setShowCartList((prev) => !prev);

  // selected priduct details 


  // price state 

  const [amountDetails, setAmountDetials] = useState({
    totalAmount: "",
    subTotal: "",
    texAmount: "",
  });


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);

  // ===================== Added Into Cart ===============
  const handleAddCart = (value) => {
    if (cartValue && cartValue.length >= 0) {
      const index = cartValue.findIndex(
        (filtValue) =>
          filtValue.colorid == selectedColor.color_id &&
          filtValue.productSize == selectedSize.product_size
      );

      if (index >= 0) {
        // If the item exists in the cart, update its quantity
        const previousData = [...cartValue]; // Create a copy of the cartValue array
        previousData[index].productQuantity = parseInt(cartValue[index].productQuantity) + value.Quantity;
        previousData[index].product_price = parseInt(cartValue[index].fixedPrice) * parseInt(cartValue[index].productQuantity);
        previousData[index].taxPrice = parseInt(cartValue[index].product_price * cartValue[index].product_tax) / 100
        setCartValue(previousData); // Update the state with the modified array
        addtoLocatStorage(previousData); // Storing into local storage
        openNotification(previousData[index], `Item Quantity Increase by ${previousData[index].productQuantity}`);
      } else {
        const ProductData = {
          productid: selectedProduct && selectedProduct.product_Id,
          product_type: selectedProduct && selectedProduct.product_type,
          colorid: selectedColor && selectedColor.color_id,
          sizeid: selectedSize && selectedSize.size_id,
          productName: selectedProduct && selectedProduct.product_name,
          productSize: selectedSize && selectedSize.product_size,
          productColor: selectedColor && selectedColor.color_name,
          product_price: selectedColor && selectedColor.product_price,
          productQuantityPrice: selectedColor && selectedColor.product_price,
          productImage: selectedImages && selectedImages[0].images,
          productQuantity: value.Quantity.toString(),
          fixedPrice: selectedColor && selectedColor.product_price,
        }
        console.log("ProductData",ProductData)
        openNotification(ProductData, "Added into cart");
        // If the item is not in the cart, add it
        setCartValue([...cartValue, ProductData]); // Add the new item to the cart
        addtoLocatStorage([...cartValue, ProductData]); // Storing into local storage
        setCartCount(cartValue.length + 1); // Update the cart count
      }
    }
    else {
      const ProductData = {
        productid: selectedProduct && selectedProduct.product_Id,
        product_type: selectedProduct && selectedProduct.product_type,
        colorid: selectedColor && selectedColor.color_id,
        sizeid: selectedSize && selectedSize.size_id,
        productName: selectedProduct && selectedProduct.product_name,
        productSize: selectedSize && selectedSize.product_size,
        productColor: selectedColor && selectedColor.color_name,
        product_price: selectedColor && selectedColor.product_price,
        productQuantityPrice: selectedColor && selectedColor.product_price,
        productImage: selectedImages && selectedImages[0].images,
        productQuantity: value.Quantity.toString(),
        fixedPrice: value.productprice,
      }
      console.log("ProductData",ProductData)
      openNotification(ProductData, "Added into cart");
      // If the item is not in the cart, add it
      setCartValue([...cartValue, ProductData]); // Add the new item to the cart
      addtoLocatStorage([...cartValue, ProductData]); // Storing into local storage
      setCartCount(cartValue.length + 1); // Update the cart count
    }
  };

  //   =================== Open Notiification ================
  const openNotification = (value, message) => {
    const key = `open${Date.now()}`;
    const listDesign = (
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={value.productImage} />}
            title={`${value.productName} ( ${value.productColor} )`}
            description={`Price: ${value.product_price} Qty: ${value.productQuantity} Size: ${value.productSize}`}
          />
        </List.Item>
      </List>
    );
    api.open({
      message: message,
      description: listDesign,
      key,
    });
  };




  const contextValue = {
    handleAddCart,
    cartCount,
    cartValue,
    selectedProduct,
    setSelectedProduct,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    selectedPrice,
    setSelectedPrice,
    selectedImages,
    setSelectedImages,
    setCartValue,
    setCartCount,
  };
  //brnchdetai

  // =================== add to local Storage ==================

  const addtoLocatStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("cart"))
    if (cartdata && cartdata !== null) {
      setCartValue(cartdata)
      setCartCount(cartValue.length)
      if (cartValue && cartValue.length >= 0) {
        setCartValue((prevCartValue) => {
          let total = 0;
          prevCartValue.forEach((product) => {
            total += parseFloat(product.product_price);
          });
          const totalTax = (total * 10) / 100;
          const tax = parseFloat(totalTax.toFixed(2));
          const itemTotal = parseFloat(total.toFixed(2));
          const totalAdd = itemTotal + tax;
          const finalAmount = parseFloat(totalAdd.toFixed(2));

          // Use the callback function to ensure state is updated
          setAmountDetials((prevAmountDetails) => ({
            ...prevAmountDetails,
            texAmount: tax,
            subTotal: itemTotal,
            totalAmount: finalAmount,
          }));
          return prevCartValue;
        });
      }
    }
  }, []);

  return (
    <CartContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;