import { createBrowserRouter } from "react-router-dom";
import { CreatePet } from "./pages/app/create-pet/create.pet";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Home } from "./pages/app/home";
import { UpdatePet } from "./pages/app/update-pet/update.pet";
import { SignIn } from "./pages/auth/sign-in/sign.in";
import { SignUp } from "./pages/auth/sign-up/sign.up";
import { NotFound } from "./pages/not-found/not.found";

export const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-pet",
    element: <CreatePet />,
  },
  {
    path: "/update-pet/:id",
    element: <UpdatePet />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
