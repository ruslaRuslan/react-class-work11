import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
const url = "https://jsonplaceholder.typicode.com/users/";

const ReduxPage = ({}) => {
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      // dispatcher({ type: "getusers", payload: data });
    });
  }, []);
  return <div>ReduxPage</div>;
};

const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(ReduxPage);
