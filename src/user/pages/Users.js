import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 45855,
      name: "Yuna Olga",
      image:
        "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
