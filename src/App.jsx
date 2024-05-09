import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { action as testingData } from "./pages/Test";
import Result from "./pages/Result";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/stroke_clinic/",
          element: <Home />,
        },

        {
          path: "/stroke_clinic/about",
          element: <About />,
        },
        {
          path: "/stroke_clinic/test",
          element: <Test />,
          action: testingData,
        },
        {
          path: "/stroke_clinic/result",
          element: <Result />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
