import { Route, Routes } from 'react-router-dom';
import Authorpage from './Components/blogs/Pages/Authorpage';
import Blogpage from './Components/blogs/Pages/Blogpage';
import Homepage from './Components/Home/Homepage';
import Layout from './Components/Layout/Layout';
import ScrollToTop from './shared/ScrollToTop';

function App() {


  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/blogs/:slug' element={<Blogpage/>} />
        <Route path='/authors/:slug' element={<Authorpage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
