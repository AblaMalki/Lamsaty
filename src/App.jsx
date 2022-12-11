import React from 'react';
import Sidebar from './components/Sidebar';
import Trans from './components/Trans';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div className="h-screen bg-amber-50">
      {/* <Sidebar /> */}
      <Trans />
      <Menu />
      {/* <Test /> */}
    </div>
  );
};

export default App;
