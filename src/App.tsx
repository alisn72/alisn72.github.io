import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Loading } from "./components";

const Main = lazy(() => import("./pages/Main"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="*">
              <div>Page Not Found!!!</div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
