import './App.scss'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from './views/HomeView/HomeView';
import Providers from './components/Providers/Providers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginView from './views/LoginView/LoginView';
import ExploreView from './views/ExploreView/ExploreView';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute Component={HomeView} />
    ),
  },
  {
    path: "explore",
    element: (
      <PrivateRoute Component={ExploreView} />
    ),
  },
  {
    path: "lessons",
    element: (
      <PrivateRoute Component={HomeView} />
    ),
  },
  {
    path: "login",
    element: (
      <LoginView />
    ),
  },
]);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>

);