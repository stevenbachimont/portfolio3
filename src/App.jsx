import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import './App.css';


import Page2 from './pages/page2.jsx';
import Page1 from './pages/page1.jsx';
import Page3 from './pages/page3.jsx';

function App() {
    return (
        <Router>
            <Head />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
