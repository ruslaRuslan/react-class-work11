// Store immutable obyekt olmalidir
const initialStore = {
    users: [],
  };

const reducer = (store = initialStore, action) => {
    switch (action.type) {
      case "getusers":
      default:
        return store;
    }
  };
  export default reducer