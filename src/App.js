import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './css/index.css';
import Docs from './pages/Docs';
import Layout from './pages/Layout';
import Colors from './pages/Colors';
import Grid from './pages/Grid';
import Breakpoints from './pages/Breakpoints';
import Typography from './pages/Typography';
import Utility from './components/Utility';
import utilities from './utils/utilities';
import Borders from './components/Borders';
import Position from './pages/Position';
import Paragraph from './pages/Paragraph';
import Image from './pages/Image';
import components from './utils/components';
import ComponentItem from './components/ComponentItem';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Layout />}>
          <Route index element={<Docs />} />
          <Route path='colors' element={<Colors />} />
          <Route path='grid' element={<Grid />} />
          <Route path='breakpoints' element={<Breakpoints />} />
          <Route path='typography' element={<Typography />} />
          <Route path='borders' element={<Borders />} />
          {utilities.map((utility, index) => (
            <Route
              key={index}
              path={utility.link}
              element={<Utility {...utility} />}
            />
          ))}
          <Route path='position' element={<Position />} />
          <Route path='paragraph' element={<Paragraph />} />
          <Route path='image' element={<Image />} />
          {components.map((cmp, index) => (
            <Route
              key={index}
              path={cmp.link}
              element={<ComponentItem {...cmp} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
