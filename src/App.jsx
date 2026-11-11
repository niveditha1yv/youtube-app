import "./App.css";
import Body from "../src/components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </>
  );
}

export default App;
