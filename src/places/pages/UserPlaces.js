import { useParams } from "react-router";

import PlaceList from "../components/PlaceList";
export const PLACES = [
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
const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
