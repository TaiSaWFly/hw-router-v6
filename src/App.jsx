import { Navigate, useRoutes, Link, useParams, Outlet } from "react-router-dom";

function App() {
  const elements = useRoutes(routes);
  return (
    <>
      <div>
        <h1>hw-router-v6</h1>
        <Link to="/users">UsersListPage</Link>
      </div>
      <div>{elements}</div>
    </>
  );
}

const MainPage = () => {
  return <h1> MainPage</h1>;
};

const UsersLayout = () => {
  return (
    <>
      <h1>UsersLayout</h1>
      <Link to="/">MainPage</Link>

      <div>
        <Outlet />
      </div>
    </>
  );
};

const UsersListPage = () => {
  return (
    <>
      <h4>UsersListPage</h4>
      <ul>
        <li>
          <Link to="0/profile">User 0</Link>
        </li>
        <li>
          <Link to="1/profile">User 1</Link>
        </li>
        <li>
          <Link to="2/profile">User 2</Link>
        </li>
        <li>
          <Link to="3/profile">User 3</Link>
        </li>
        <li>
          <Link to="4/profile">User 4</Link>
        </li>
      </ul>
    </>
  );
};

const UserPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h4>UserPage</h4>
      <ul>
        <li>
          <Link to="/users">UsersListPage</Link>
        </li>
        <li>
          <Link to={`../${userId}/edit`}>Edit this User</Link>
        </li>
      </ul>
      <span>userId:{userId}</span>
    </>
  );
};

const UserEdit = () => {
  const { userId } = useParams();

  return (
    <>
      <h4>UserEdit</h4>
      <ul>
        <li>
          <Link to={`../${userId}/profile`}>User Page</Link>
        </li>
        <li>
          <Link to={`../${Number(userId) + 1}/profile`}>Another User Page</Link>
        </li>
        <li>
          <Link to={`/users`}>UsersListPage</Link>
        </li>
      </ul>
      <span>userId:{userId}</span>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "users",
    element: <UsersLayout />,
    children: [
      {
        path: "",
        element: <UsersListPage />,
      },

      {
        path: ":userId/profile",
        element: <UserPage />,
      },
      {
        path: ":userId/edit",
        element: <UserEdit />,
      },
      {
        path: "*",
        element: <Navigate to="/users" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default App;
