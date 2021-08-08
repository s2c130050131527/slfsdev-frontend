import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { lazy, Suspense } from 'react';

const PaymentGateway = lazy(() => import('./components/PaymentGateway'));
const Main = lazy(() => import('./components/Main'));
const Home = lazy(() => import('./components/Home'));


function App() {
  return (
    <Suspense fallback="...">

      <ChakraProvider>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/main" component={Main}></Route>
              <Route path="/payment" component={PaymentGateway}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </Suspense>


  );
}

export default App;
