import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import SeaLevelRise from './pages/SeaLevelRise'
import SewerSystems from './pages/SewerSystems'
import Wetlands from './pages/Wetlands'
import SafeWater from './pages/SafeWater'
import BooksAndPublications from './pages/BooksAndPublications'
import Teaching from './pages/Teaching'
import Services from './pages/Services'
import GeologyAndBeer from './pages/GeologyAndBeer'
import Contact from './pages/Contact'

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/research/sea-level-rise" element={<SeaLevelRise />} />
                    <Route path="/research/sewer-systems" element={<SewerSystems />} />
                    <Route path="/research/wetlands" element={<Wetlands />} />
                    <Route path="/research/safe-water" element={<SafeWater />} />
                    <Route path="/books" element={<BooksAndPublications />} />
                    <Route path="/teaching" element={<Teaching />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/geology-and-beer" element={<GeologyAndBeer />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
