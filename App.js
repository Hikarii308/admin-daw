import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Teams from "./components/datatable/tableteams";
import Applications from "./components/datatable/applications"; 
import Themes from "./components/datatable/themes"; 

function App() {
  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route><Route path="teams" element={<Teams />} />
        

 <Route path="applications" element={<Applications />} />


<Route path="themes" element={<Themes />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
