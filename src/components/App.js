import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
      { name: "Brandenburg Gate", country: "Germany" },
      { name: "Reichstag Building", country: "Germany" },
      { name: "Museum Island", country: "Germany" }
      //?
    ];
    this.filterCityList = this.cityList.filter((item) => {
      return item.country === "India";
    });
  }

  render() {
    return (
      <div id="main">
        <ol>
          {this.filterCityList &&
            this.filterCityList.map((item, index) => (
              <li key={`location${index + 1}`}>{item.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
