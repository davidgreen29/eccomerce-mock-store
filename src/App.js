import Home from './components/Pages/Home';
import Products from'./components/Pages/Products';
import Product from './components/Pages/Product';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';

const LayOut =()=>{
  return(
    <div ClassName="layout">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}





const router = createBrowserRouter([
{
  path:"/",
  element:<LayOut/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/products/:id",
      element:<Products/>
    },
    {
      path:"/product/:id",
      element:<Product/>
    }
  ]
}

])


 



function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
