import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Publications from './pages/Publications'
import SeaLevelRise from './pages/SeaLevelRise'
import SewerOverflows from './pages/SewerOverflows'
import SewerAirVI from './pages/SewerAirVI'
import Wetlands from './pages/Wetlands'
import WorkshopsClasses from './pages/WorkshopsClasses'
import SafeWater from './pages/SafeWater'
import GeologyAndBeer from './pages/GeologyAndBeer'

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/sea-level-rise" element={<SeaLevelRise />} />
                    <Route path="/sewer-overflows" element={<SewerOverflows />} />
                    <Route path="/sewer-air-vi" element={<SewerAirVI />} />
                    <Route path="/wetlands" element={<Wetlands />} />
                    <Route path="/workshops-classes" element={<WorkshopsClasses />} />
                    <Route path="/safe-water" element={<SafeWater />} />
                    <Route path="/geology-and-beer" element={<GeologyAndBeer />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
