import React from 'react';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar score={0} topScore={0} />
    </div>
  );
}

export default App;
