import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestrauntCard = (props) => {
  const resData = props.resData;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg hover:border hover:border-gray-300 hover:shadow-2xl"
      style={styleCard}
    >
      <img
        className="res-logo border rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold pt-2 pb-2 text-2xl text-[#c5093d]">{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>
        {sla?.slaString || ""} ({sla?.lastMileTravelString || ""})
      </h4>
    </div>
  );
};

export default RestrauntCard;
