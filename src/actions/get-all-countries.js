import "whatwg-fetch";

export function getAllCountries() {
  return dispatch => {
    dispatch({
      type: "REQUEST_GET_ALL_COUNTRIES",
    });
    fetch("https://restcountries.eu/rest/v2/all", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json;charset=UTF-8"
      })
    }).then(response => response.json())
      .then((respData) => {
        if (respData.length > 0) {
          dispatch({
            type: "RECEIVE_GET_ALL_COUNTRIES",
            countries: respData
          });
        } else {
          dispatch({
            type: "RECEIVE_GET_ALL_COUNTRIES"
          });
        }
      });
  };
}