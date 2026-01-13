import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import Posts from "./features/posts/pages/Posts";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Users from "./features/users/pages/Users";
import { postsLoader } from "./features/posts/postsLoader";
import NewPostForm from "./features/posts/pages/NewPostForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" />, loader: postsLoader },
      {
        path: "posts",
        children: [
          { index: true, element: <Posts />, loader: postsLoader },
          { path: "new", element: <NewPostForm /> },
          { path: ":id", element: <Post /> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "posts", element: <Posts /> },
      { path: "users", element: <Users /> },
    ],
  },
]);
