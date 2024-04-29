import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
const url = "https://jsonplaceholder.typicode.com/users";

const ReduxPage = ({dispatch, users}) => {
  console.log(props);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "getusers", payload: data });
    });
  }, []);

  
    const onEdit = (id) => dispatch({ type: "edit", payload: id });
    const onDelete = (id) => dispatch({ type: "delete", payload: id });
    const onAddUser = () => {
      const user = prompt("ad daxil edin");
      dispatch({ type: "adduser", payload: user });
    };
    const onDeleteFirst = () => dispatch({ type: "deleteFirst" });
    const onDeleteLast = () => dispatch({ type: "deleteLast" });
  
    return (
      <div>
        <button onClick={onDeleteFirst}>delete first</button>
        <button onClick={onDeleteLast}>delete Last</button>
        <button onClick={onAddUser}>user elave et</button>
        {users.map(({ id, username }) => {
          return (
            <div key={id}>
              <p>
                {username}
                <button
                  onClick={() => {
                    onEdit(id);
                  }}
                >
                  ✏
                </button>
                <button
                  onClick={() => {
                    onDelete(id);
                  }}
                >
                  ❌
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  };


const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(ReduxPage);
