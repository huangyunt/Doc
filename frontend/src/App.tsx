import IRouter from "./router/index";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <IRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
