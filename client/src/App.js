import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Chat from './components/Chat';
import Join from './components/Join';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Route path='/' component={Join} exact />
          <Route path='/chat' component={Chat} exact />
        </Router>
      </main>
    </>
  );
};

export default App;
