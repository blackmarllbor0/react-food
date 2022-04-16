// bases
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// layout
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <BrowserRouter basename='/react-food'>
        <Header />
        <main className='container content'>
          <Routes>
                  <Route path='/' element={ <HomePage /> } />
                  <Route path='/about' element={ <AboutPage /> } />
                  <Route path='/contact' element={ <ContactPage /> } />
                  <Route path='/category/:name' element={<Category />} />
                  <Route path='/meal/:id' element={<Recipe />} />
                  <Route path='*' element={ <PageNotFound /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;