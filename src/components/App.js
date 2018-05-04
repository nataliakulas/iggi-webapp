import React, {Component} from 'react';

import ProfilePage from '../pages/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navigation color={"czarny"}>To jest nawigacja</Navigation>*/}
        <ProfilePage/>
      </div>
    );
  }
}

export default App;
