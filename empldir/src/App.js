import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfficeTable from "./OfficeTable/index";
import OfficeForm from "./OfficeForm/index";
import characters from "./officeCharInfo/char.json";

class App extends Component {
  state = {
    characters: characters,
    filteredCharacters: characters
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  departmentFilter = (e) => {
    e.preventDefault();
    const { value } = e.target
    this.setState(prevState => ({
      ...prevState,
      filteredCharacters: prevState.characters.filter(char => char.name.substring(0, value.length).toLowerCase() === value.toLowerCase())
    }))
  }

  render() {
    return (
      <div className>
        <OfficeForm
          value={this.state.charSearch}
          onChange={this.handleInputChange}
          departmentFilter={this.departmentFilter}
        />
        <OfficeTable
          filteredCharacters={this.state.filteredCharacters}
        />
      </div>
    );
  }
}
export default App;



