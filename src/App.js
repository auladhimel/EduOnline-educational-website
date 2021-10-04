import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Instructors from './components/Instructors/Instructors';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Routing  */}
      <BrowserRouter>
        {/* header route  */}
        <Route>
          <Header></Header>
        </Route>
        <Switch>
          {/* route for others pages */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* routing of not found pages  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* routing for footer  */}
        <Route>
          <Footer></Footer>
        </Route>
      </BrowserRouter>
      {/* routing ending */}
    </div>
  );
}

export default App;
