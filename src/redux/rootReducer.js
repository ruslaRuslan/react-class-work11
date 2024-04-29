// Store immutable obyekt olmalidir
const initialStore = {
    users: [],
  };

const reducer = (store = initialStore, action) => {
    switch (action.type) {
      case "getusers":
        // spreed everytime! stire-ni deyismemekisen, yeni store geri qaytarmalisan
        return {...store, users: action.payload}
        case "delete":
          return {...store, users:  store.users.filter((user) => user.id !== action.payload)};
      default:
        return store;
    }
  };
  export default reducer



