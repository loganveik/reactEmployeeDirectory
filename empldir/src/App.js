import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfficeTable from "./OfficeTable/index";
import OfficeForm from "./OfficeForm/index";
import characters from "./officeCharInfo/char.json";

class App extends Component {
  state = {
    characters: characters,
    filteredCharacters: characters,
    alphabetCharacters: []
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchFilter = (e) => {
    e.preventDefault();
    const { value } = e.target
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.name.substring(0, value.length).toLowerCase() === value.toLowerCase())
    }))
  };

  backToMainList = (e) => {
    e.preventDefault();
    this.setState(({ filteredCharacters: characters }))
  };

  alphabetical = (e) => {
    e.preventDefault();
    const alphabet = this.state.characters.sort(function (a, b) {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
    this.setState(({ alphabetCharacters: alphabet }))
  };

  salesFilter = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.department === "Sales")
    }))
  }

  accountingFilter = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.department === "Accounting")
    }))
  }
  corporateFilter = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.department === "Corporate")
    }))
  }
  managerFilter = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.department === "Manager")
    }))
  }

  render() {
    return (
      <div>
        <OfficeForm
          value={this.state.charSearch}
          onChange={this.handleInputChange}
          searchFilter={this.searchFilter}
          salesFilter={this.salesFilter}
          accountingFilter={this.accountingFilter}
          managerFilter={this.managerFilter}
          corporateFilter={this.corporateFilter}
          alphabetical={this.alphabetical}
        />
        <OfficeTable
          filteredCharacters={this.state.filteredCharacters}
        />
      </div>
    );
  }
}
export default App;



