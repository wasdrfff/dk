import { HashRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { PostPage } from "./pages/post-page";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/posts/:id">
          <PostPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
