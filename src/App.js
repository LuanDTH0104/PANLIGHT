import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChartReport from './Screen/ChartReport';
import AnalysisTable from './Screen/AnalysisTable';
import MapView from './Screen/MapView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChartReport />} />
        <Route path="/den-dien-ha-noi" element={<AnalysisTable />} />
        <Route path="/vi-tri" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
