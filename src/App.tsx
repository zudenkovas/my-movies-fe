import React from 'react';

import LogoIcon from './components/Icons/LogoIcon';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LogoIcon />
        <p>DevMentor My Movies</p>
      </header>
    </div>
  );
}

export default App;
