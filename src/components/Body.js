import RestrauntCard from "./RestrauntCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // state variable
  const [restrauntlist, setRestrauntList] = useState([]);
  const [filterRestraunt, setFilterRestraunt] = useState([]);

  const [filterFlag, setFilterFlag] = useState(false); // Flag to track if filter is applied
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setRestrauntList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestraunt(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(jsonData);
  };

  if (!onlineStatus) {
    return <h1>You are offline buddy~~!!</h1>;
  }

  return !restrauntlist.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            placeholder="Search for a restaurant"
            className="border border-solid border-gray shadow-lg px-4 py-2 m-2"
            value={searchText}
            onChange={(e) => {
              if (!e.target.value) {
                setFilterRestraunt(restrauntlist);
                setSearchText("");
                return;
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-50 m-2 rounded-lg hover:bg-gray-50"
            onClick={() => {
              // Filter restraunt list
              console.log(searchText);

              const searchResult = restrauntlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestraunt(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50 m-2 rounded-lg hover:bg-gray-500 "
            onClick={() => {
              setRestrauntList([]);
              const filteredList = restrauntlist.filter(
                (res) => res.info.avgRating >= 4
              );
              if (filteredList.length) {
                setRestrauntList(filteredList);
                setFilterFlag(true);
              }
              console.log(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>

        {filterFlag && (
          <button
            className="filter-btn"
            onClick={() => {
              setRestrauntList([]);
              fetchData();
              setFilterFlag(false); // Reset filter flag
            }}
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {filterRestraunt.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restraunts/" + restraunt.info.id}>
            <RestrauntCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
