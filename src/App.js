import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./utils/RootLayout";
import HomePage, { loader as getProductsLoader } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import SignUp, { action as SignUpAction } from "./pages/SignUp";
import SignIn, { action as SignInAction } from "./pages/SignIn";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        id: "root",
        loader: getProductsLoader,
        children: [
            {
                index: true,
                element: <HomePage />,
                id: "home-page",
            },
            {
                path: "shop",
                element: <ShopPage />,
                id: "shop-page",
            },
            {
                path: "detail/:productId",
                element: <DetailPage />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
            },
        ],
    },
    {
        path: "sign-up",
        element: <SignUp />,
        action: SignUpAction,
    },
    {
        path: "sign-in",
        element: <SignIn />,
        action: SignInAction,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
