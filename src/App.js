import React, { useState } from 'react';
import Header from './component/header/index.jsx';
import Creators from './pages/Creators/index.jsx';
import Stores from './pages/Stores/index.jsx';
import Styles from './app.module.scss';

function App() {
  const [userType, setUserType] = useState('creators');

  return (
    <div>
      <div className={Styles.header}>
        <div>For Creators</div>
        <div>For Stores</div>
      </div>
      {
        userType === 'creators' && <Creators></Creators>
      }
      {
        userType === 'stores' && <Stores></Stores>
      }
    </div>
  );
}

export default App;