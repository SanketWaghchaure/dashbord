import Dashbord from "./pages/Dashbord/Dashbord";
import "@fontsource/ubuntu";
import { createBrowserRouter, RouterProvider } from "react-router";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
