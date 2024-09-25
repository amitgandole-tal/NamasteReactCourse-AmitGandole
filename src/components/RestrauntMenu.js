import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const MenuCard = (item) => {
  return <li>{item.info.card.info.name}</li>;
};

const RestrauntMenu = () => {
  const resInfo = useRestrauntMenu();
  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines.join()}</h3>
      <h3>Cost For Two: {costForTwoMessage}</h3>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => {
          return <MenuCard key={item.card.info.id} info={item} />;
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
