import { Button, Avatar} from '@salesforce/design-system-react';

import Tab from './components/Tab/Tab'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Avatar
            imgSrc="https://lightningdesignsystem.com/assets/images/avatar2.jpg"
          ></Avatar>
          <Button className="slds-button slds-button_neutral" variant="brand" label="Salesforce Button"/>
          <Tab/>
        </p>
      </header>
    </div>
  );
}

export default App;
