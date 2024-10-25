import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

import {Provider} from "react-redux";
import {store} from "./redux/store";

import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
