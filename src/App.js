import { useState, useEffect } from 'react';
import Functionality from './Functionality';

function App() {
  useEffect(() => {
    //console.log("Hello Please check if process environmental variables are working : "+APP_ID)
  })

  return (
    <div className="App">
      <h1>Hello muhammad</h1>
      <h2>can you create a cascading dropdowns - look at the city.js file</h2>
      <h2>
        Please create 3 drops downs first one gives country, choose city,
        choose habit
      </h2>
      <h2>
        Once the user chooses country, the second drop down should populate with
        respecive cities
      </h2>
      <h2>
        Once the user chooses a respective city, the corresponding habits should
        populate
      </h2>
      <h2>
        Once the user clicks on the habit the respective habit should show on
        the screen{" "}
      </h2>
      <Functionality />

    </div>
  );
}

export default App;
