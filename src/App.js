import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
