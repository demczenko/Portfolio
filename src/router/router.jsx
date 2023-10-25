import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Home, Portfolio } from "../pages";
import { ThemeProvider } from "../components/Theme";

export const children_navigation = [
  {
    path: "/portfolio",
    element: <Portfolio />,
    name: "Portfolio"
  },
  {
    path: "/about",
    element: <About />,
    name: "About"
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    ),
    errorElement: <p>Error occured</p>,
    children: children_navigation,
  },
]);

export const AppRouting = () => {
  return <RouterProvider router={router} />;
};
