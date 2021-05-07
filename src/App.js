import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import Trips from "./components/Trips";
import TodoList from "./components/ToDoList";
import Accordion from "./components/Accordion";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/Carousel">
            <Carousel />
          </Route>
          <Route path="/Tabs">
            <Tabs />
          </Route>
          <Route path="/Trips">
            <Trips />
          </Route>
          <Route path="/TodoList">
            <TodoList />
          </Route>
          <Route path="/Accordion">
            <Accordion />
          </Route>
          <Route path="/Reviews">
            <Reviews />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
