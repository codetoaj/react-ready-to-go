import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../actions/get-all-countries';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllCountries());
  }

  render() {
    console.log("countries", this.props.countries);
    let countries = this.props.countries.map((country, i) => {
      return <h5 key={i}>{country.name}</h5>
    });
    return (
      <div className="app-home">
        <h3>Home</h3>
        <h4>Countries Names</h4>
        {countries}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatch
  });
}

function mapStateToProps (state) {
  console.log("state", state);
  return {
    countries: state.countriesReducer.countries || [],
    countries_loaded: state.countriesReducer.countries_loaded || ""
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);