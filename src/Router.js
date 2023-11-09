import { HashRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
const Router = () =>{
  return (
        <HashRouter>

          <Header/>

          <Routes>
            <Route path={routes.home} element={""}/>
            <Route path={routes.detail} element={""}/>
            <Route path={routes.search} element={""}/>
            <Route path="/*" element={""}/>

          </Routes>

          <Footer/>
          
        </HashRouter>
    )
}
export default Router;