import React, { Component } from "react";

// I chose a class based syntax to write the following code
class App extends Component {
  constructor(props) {
    super(props);

    // declaring an array that will store the cocktails from the API fetch
    this.state = {
      cocktails: [],
    };
  }
  changehandler = (e) => {
    // reading and setting the letter typed by the user in the <input> tag
    const letter = e.target.value;
    // URL of the cocktail API, made modifiable by adding the search parameter at the end (letter)
    //(API KEY = 1)
    const url =
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=` + letter;
    // fetching and setting the data from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cocktails: data }));
  };

  submithandler = (e) => {
    // cancels the event if it is cancelable
    e.preventDefault();
  };

  // the result of the search is built here :
  result = () => {
    // setting the drinks (arrays) from the cocktails (object) in data
    const data = this.state.cocktails.drinks;
    if (data) {
      // map every cocktail (array) from the data (arrays)
      return data.map((cocktail) => (
        // displaying the thumbnail and the main ingredients with the id of the drink as a key
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
  // here is rendered the static elements of the page and the result of the search
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
                // call changehandler to fetch the data when the input changes
                onChange={this.changehandler}
              />
            </div>
          </form>
        </div>
        {/* rendering the result by calling it : */}
        <div className="result">{this.result()}</div>
        <footer>- Arnaud Durand -</footer>
      </>
    );
  }
}

export default App;
