import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
