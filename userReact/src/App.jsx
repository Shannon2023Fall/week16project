import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/01Navigation';
import Homepage from './pages/1_home';
import Blog from './pages/2_blog';
import News from './pages/3_news';
import Footer from './components/04Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/Blog" component={Blog} />
          <Route path="/News" component={News} />
          
          <Route component={NotFound} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
