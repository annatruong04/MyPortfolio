import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {Home, About, Projects, Contact} from './pages';
import BenfordLawResearch from './pages/BenfordLawResearch';

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/benford-law-research" element={<BenfordLawResearch />} />
            </Routes>
            <Footer />
        </Router>
    </main>
  )
}

export default App
