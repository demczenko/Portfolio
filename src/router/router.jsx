import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Home, Portfolio } from "../pages";
import { ThemeProvider } from "../components/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    ),
    errorElement: <p>Error occured</p>,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export const AppRouting = () => {
  return <RouterProvider router={router} />;
};
