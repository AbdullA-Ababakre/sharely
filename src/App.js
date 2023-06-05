import React, { useState } from 'react';
import Header from './component/header/index.jsx';
import Creators from './pages/Creators/index.jsx';
import Stores from './pages/Stores/index.jsx';
import Styles from './app.module.scss';

function App() {
  const [userType, setUserType] = useState('creators');

  const handleClick = (type) => {
    setUserType(type);
  }

  return (
    <div>
      <div className={Styles.header}>
        <div className={ userType === 'creators' ? `${Styles.activeBox} ${Styles.box}` : Styles.box  } onClick={()=>handleClick('creators')}>For Creators</div>
        <div className={ userType === 'stores' ? `${Styles.activeBox} ${Styles.box}` : Styles.box }  onClick={()=>handleClick('stores')}>For Stores</div>
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