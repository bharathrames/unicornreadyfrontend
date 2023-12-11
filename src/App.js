import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Sidebar from "./components/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import Contact from "./pages/contact/Contact";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}>

        </Route>
        <Route path="/posts" element={<Home />}>

        </Route>
        <Route path="/register" element={user ? <Home /> : <Register />}>

        </Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/post/:postid" element={<Single />}>

        </Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}>

        </Route>
        <Route exact path="/about" element={<Sidebar />}>
          
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          
          </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

