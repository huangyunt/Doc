import IRouter from "./router/index";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";
import { useEffect } from "react";
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    // Element: CustomElement;
    // Text: CustomText;
  }
}
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
