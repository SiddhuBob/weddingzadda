import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ScrollToTop from "./Component/TopScroll/ScrollToTop";
import Header from './Component/NavBar/Header';
// import navbar from "./Component/Navbar";
import VendorPage from './Pages/VendorPage';
import VenuesPage from './Pages/VenuesPage';
import DetailsPage from './Pages/DetailsPage';
import Navbar from './Component/Navbar';
import Footer from './Component/FooterCom/Footer';
import AboutPage from './Pages/AboutPage';
import FaqPage from './Pages/FaqPage';
import BlogPage from './Pages/BlogPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<><HomePage /></>} />
          <Route path='/vengor-page' element={<VendorPage />} />
          {/* <Route path='/details' element={<DetailsPage />} /> */}
          <Route path='/about-page' element={<AboutPage />} />
          <Route path='/vengor-page/:category/:subcategory' element={<VenuesPage />} />
          <Route path='/vengor-page/:category/:subcategory/:vendorSlug' element={<DetailsPage />} />
          {/* <Route path='/vengor-page/:subcategory' element={<VenuesPage />} /> */}
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/blog' element={<BlogPage />} />
          {/* <Route path='/vengor-page/:vendorList/:vendorSlug' element={<DetailsPage />} /> */}
          {/* <Route path='/wedding-venues/:venue_id' element={<DetailsPage />} /> */}
          {/* <Route path='/vendors/all/wedding-venues/' element={<DetailsPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
