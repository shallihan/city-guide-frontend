import { useState, useContext } from "react";
import { AuthenticationContext } from "../../shared/context/authentication-context";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const authentication = useContext(AuthenticationContext);
  const [showMap, setShowMap] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const showDeleteHandler = () => setShowDelete(true);
  const closeDeleteHandler = () => setShowDelete(false);
  const confirmDeleteHandler = () => {
    setShowDelete(false);
    console.log("Deleted");
  };
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDelete}
        onCancel={closeDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Deleting an entry is irreversible. Are you sure you want to delete{" "}
          {props.title}
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {authentication.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {authentication.isLoggedIn && (
              <Button danger onClick={showDeleteHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
