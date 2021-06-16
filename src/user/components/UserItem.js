import "./UserItem.css";
const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="users-item__content">
        <div className="users-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="users-item__info">
            <h2>{props.name}</h2>
            <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
