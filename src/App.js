import React, { Component } from "react";

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
          <img src={cocktail.strDrinkThumb} alt="cocktails" />
          <br />
          <h2 className="main-title">{cocktail.strDrink}</h2>
          <h4>Main Ingredients:</h4>
          <p className="main-ing">
            {cocktail.strIngredient1},&nbsp;{cocktail.strIngredient2},&nbsp;
            {cocktail.strIngredient3}
          </p>
        </div>
      ));
    }
  };
  render() {
    return (
      <>
        <h1 className="page-title">The Cocktail Search Engine</h1>
        <div className="main-container">
          <form onSubmit={this.submithandler}>
            <div className="search-container">
              <input
                type="search"
                className="search-field"
                placeholder="Search by first letter"
                onChange={this.changehandler}
              />
            </div>
          </form>
        </div>
        <div className="result">{this.result()}</div>
        <footer>- Arnaud Durand -</footer>
      </>
    );
  }
}

export default App;
