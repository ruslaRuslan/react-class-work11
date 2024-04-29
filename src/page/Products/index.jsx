import axios from "axios";
import { useEffect, useReducer } from "react";
import productReducer from "../../reducers/productReducer";
const url = "https://dummyjson.com/products";

const ProductsPage = () => {
  const [products, dispatch] = useReducer(productReducer, []);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "getproducts", payload: data.products });
    });
  }, []);

  const handleDelete = (id) => {
    dispatch({ type: "deleteproduct", payload: id });
  };
  const handleEdit = (id) => {
    dispatch({ type: "editproduct", payload: id });
  };
  const deleteFirst = () => {
    dispatch({ type: "deletefirst" });
  };

  const deleteIphones = () => {
    dispatch({ type: "deleteiphones" });
  };

  return (
    <div>
      <button onClick={deleteFirst}>delete first product</button>
      <button onClick={deleteIphones}>delete iphones</button>
      {products.map(({ id, title }) => {
        return (
          <div key={id}>
            <h1>
              {title}
              <button onClick={() => handleEdit(id)}>🖊</button>
              <button onClick={() => handleDelete(id)}>❌</button>
            </h1>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsPage;
