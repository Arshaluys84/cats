import { useState, useEffect } from "react";
import { Categories } from "./components/Categories/Categories";
import { FetchBox } from "./components/FetchBox";
import { AddButton } from "./components/AddButton/AddButton";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { Header } from "./Header/Header";
import "./App.css";

function App() {
  const [catValue, setCatValue] = useState("");
  const limits = useSelector((state) => state.limit);
  const [limit, setLimit] = useState(limits);
  const dispatch = useDispatch();
  const addCategory = (current) => {
    setCatValue(current);
  };
  useEffect(() => {
    setLimit(limits);
  }, [limits]);

  const addMore = () => {
    dispatch({ type: "LOAD" });
  };
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/categories">
          <Categories addCategory={addCategory} />
          <FetchBox catValue={catValue} limit={10} />
        </Route>
        <Route
          path="/" exact
        >
          <FetchBox catValue={catValue} limit={limit} />
          <AddButton addMore={addMore} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
