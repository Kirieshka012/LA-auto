import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageNovosti from "./pages/novosti/novosti"
import PageoNas from './pages/oNas/oNas';
import PageRolls from './pages/spisok/premium/RR';
import PageFerrari from './pages/spisok/novinka/fera';
import PageLamborghini from './pages/spisok/premium/Lambo';
import PageChevrolet from './pages/spisok/premium/corvet';
import PageCadillac from './pages/spisok/novinka/cadilac';
import PageMercedes from './pages/spisok/novinka/mersedes';
import PageFord from './pages/spisok/novinka/ford';
import PagePorsche from './pages/spisok/premium/porshe';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageMenuM />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/novosti'} element={<PageNovosti />} />
            <Route path={'/corvet'} element={<PageChevrolet />} />
            <Route path={'/RR'} element={<PageRolls />} />
            <Route path={'/Lambo'} element={<PageLamborghini />} />
            <Route path={'/porshe'} element={<PagePorsche />} />
            <Route path={'/fera'} element={<PageFerrari />} />
            <Route path={'/cadilac'} element={<PageCadillac />} />
            <Route path={'/mersedes'} element={<PageMercedes />} />
            <Route path={'/ford'} element={<PageFord />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
