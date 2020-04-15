import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfficeTable from "./OfficeTable/index";
import characters from "./officeCharInfo/char.json";

function App() {
  return (
    <div>
      <OfficeTable
        characters={characters}
      />
    </div>
  );
}

export default App;
