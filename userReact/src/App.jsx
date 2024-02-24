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
          <Route exact path="/" component={Homepage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/news" component={News} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
