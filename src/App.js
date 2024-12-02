import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './components/page-not-found/PageNotFound';
import LayOut from './components/lay-out/LayOut';
import ProductsDetail from './components/productsDetail/ProductsDetail';


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <LayOut />,
      errorElement: <PageNotFound />
    },
    { path: "/ProductsDetail", element: <ProductsDetail/> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;