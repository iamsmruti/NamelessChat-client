import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Memos from './pages/Memos';
import Create from './pages/Create';
import Layout from './comps/Layout'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary: blue, 
        secondary: purple
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' exact element={<Memos />} />
            <Route path='/create' exact element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
