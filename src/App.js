import React, { Component, component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: [],
    };
  }
  changehandler = (e) => {
    const letter = e.target.value;
    const url =
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=` + letter;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cocktails: data }));
  };
  submithandler = (e) => {
    e.preventDefault();
    
  };
  result = () => {
    const data = this.state.cocktails.drinks;
    if (data) {
      return data.map((cocktail) => (
        <div className="main-card" key={cocktail.idDrink}>
          <img
            src={cocktail.strDrinkThumb}
            alt="cocktails"
            height="200"
            width="200"
          />
          <br />
          <h2 className="main-title">{cocktail.strDrink}</h2>
          <p className="main-ing">
            Ingredients:
            {cocktail.strIngredient1},{cocktail.strIngredient2},
            {cocktail.strIngredient3},
          </p>
        </div>
      ));
    }
  };
  render() {
    return (
      <>
        <div className="main-container">
          <form onSubmit={this.submithandler}>
            <div className="search-container">
              <input
                type="search"
                className="search-field"
                onChange={this.changehandler}
              />
              <br />
              <button className="submit-btn">SEARCH COCKTAILS</button>
            </div>
          </form>
        </div>
        {this.result()}
      </>
    );
  }
}

export default App;
