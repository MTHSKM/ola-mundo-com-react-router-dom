import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<PaginaPadrao></PaginaPadrao>}>
        <Route index element={<Inicio></Inicio>}></Route>
        <Route path="sobremim" element={<SobreMim></SobreMim>}></Route>
        </Route>

        <Route path='posts/:id/*' element={<Post></Post>}></Route>
        <Route path="*" element={<NaoEncontrada></NaoEncontrada>}></Route>
      </Routes>

      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
