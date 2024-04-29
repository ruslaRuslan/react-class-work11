const productReducer = (products, action) => {
    switch (action.type) {
      case "getproducts":
        return action.payload;
      case "deleteproduct":
        return products.filter((product) => product.id !== action.payload);
      case "editproduct":
        return products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, title: prompt("enter new name") };
          }
          return product;
        });
      case "deletefirst":
        return products.slice(1);
      case "deleteiphones":
        return products.filter(
          (product) => !product.title.toLowerCase().startsWith("iphone")
        );
    }
  };
  export default productReducer;
  