import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const PLACES = [
  {
    id: "54846",
    title: "SQIRL CAFE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi illo nobis cum odio eaque!",
    imageURL:
      "https://aws1.discourse-cdn.com/business5/uploads/berkeleyfoodie/original/3X/6/2/6212fa3bcb8cd509e2587033535651d50b49adfb.jpeg",
    address: "720 N Virgil Ave, Los Angeles, CA 90029, United States",
    location: {
      lat: 34.0844664,
      lng: -118.2866903,
    },
    creator: "user1",
  },
  {
    id: "59854",
    title: "Circus Bakery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?",
    imageURL:
      "https://willtravelforsnacks.files.wordpress.com/2020/01/circus_bakery_entrance.jpg?w=800",
    address: "63 Rue Galande, 75005 Paris, France",
    location: {
      lat: 48.8517544,
      lng: 2.3467823,
    },
    creator: "user2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const updateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  const identifiedPlace = PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find a place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={updateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
