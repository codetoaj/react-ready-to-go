const countriesReducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_GET_ALL_COUNTRIES":
      return Object.assign({}, state, {
        countries_loaded: "pending"
      });
    case "RECEIVE_GET_ALL_COUNTRIES":
      return Object.assign({}, state, {
        countries_loaded: "success",
        countries: action.countries
      });
    case "RECEIVE_GET_ALL_COUNTRIES":
      return Object.assign({}, state, {
        countries_loaded: "failed"
      });       
    default:
      return state;
  }
};

export default countriesReducer;