import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import Posts from "./features/posts/pages/Posts";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Users from "./features/users/pages/Users";
import { postLoader, postsLoader } from "./features/posts/postsLoaders";
import NewPostForm from "./features/posts/pages/NewPostForm";
import Post from "./features/posts/pages/Post";
import { createPostAction } from "./features/posts/postsActions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" replace /> },
      {
        path: "posts",
        children: [
          { index: true, element: <Posts />, loader: postsLoader },
          { path: "new", element: <NewPostForm />, action: createPostAction },
          { path: ":id", element: <Post />, loader: postLoader },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "users", element: <Users /> },
    ],
  },
]);
