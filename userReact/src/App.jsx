import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import News from './pages/News';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/Blog" component={Blog} /> */}
          <Route path="/News" component={News} />
          
          <Route component={NotFound} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
