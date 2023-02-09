import { Provider } from "react-redux";
import { store } from './services/redux/store';
import Router from "./router/Router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;