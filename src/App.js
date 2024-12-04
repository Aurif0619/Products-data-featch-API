import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './components/page-not-found/PageNotFound';
import LayOut from './components/lay-out/LayOut';
import ProductsDetail from './components/productsDetail/ProductsDetail';
import CardList from './components/card-list/CardList';
import { Provider } from 'react-redux';
import { store } from './components/store/Store'; // Ensure this matches the file's name and location

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <PageNotFound />,
    },
    { path: '/CardList', element: <CardList /> }, 
    { path: "/ProductsDetail", element: <ProductsDetail /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
