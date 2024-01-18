import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';
import About from './components/About';
import Error from './components/Error';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// import Instamart from './components/Instamart';
const Instamart = lazy(() => import("./components/Instamart"));
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:rid",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
                
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter} />);
