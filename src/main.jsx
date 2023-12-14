import App from "./components/App";
import "./index.css"
import  ReactDOM from "react-dom/client";
import "../node_modules/flowbite/dist/flowbite"

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);


root.render(<App />)
