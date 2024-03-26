import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChartReport from './Screen/ChartReport';
import AnalysisTable from './Screen/AnalysisTable';
import MapView from './Screen/MapView';
import LightDetail from './Screen/LightDetail';
import Setting from './Screen/Setting';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChartReport />} />
        <Route path="/den-dien-ha-noi" element={<AnalysisTable />} />
        <Route path="/vi-tri" element={<MapView />} />
        <Route path='/chi-tiet-den-dien/:id' element={<LightDetail/>}/>
        <Route path='/cai-dat' element={<Setting/>}/>
        <Route path='*'>404 Not Found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
