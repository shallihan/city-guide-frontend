import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "51795",
      name: "Olga Huendz",
      image:
        "https://images.unsplash.com/photo-1616428362406-4ffd9fcbf023?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
