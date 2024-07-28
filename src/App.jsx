import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from './Navbar';
import Footer from './Footer';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
