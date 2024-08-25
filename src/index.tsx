import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Remove, SortableTree } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/sotre";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root") as HTMLElement
);

export { Remove, SortableTree };
