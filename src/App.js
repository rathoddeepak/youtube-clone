import React from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";

const logo = require("./assets/ytlogo.png");
const settingIcon = require("./assets/settings.png");
const bellIcon = require("./assets/bell.png");
const playIcon = require("./assets/play.png");
const homeIcon = require("./assets/home.png");
const subscriptionIcon = require("./assets/subscription.png");
const hotIcon = require("./assets/hot.png");

const tabs = [
  {
    id: 1,
    title: "All",// 0 
  },
  {
    id: 2,
    title: "Home",
    icon: homeIcon, // 1
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: subscriptionIcon, // 2
  },
  {
    id: 4,
    title: "Trending",
    icon: hotIcon,
  },
];
const URL =
  "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
  const [videos, setVideos] = React.useState([]);

  const getVideos = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((list) => {
        setVideos(list);
      });
  };

  React.useEffect(() => {
    getVideos();
  }, []);

  const renderContent = () => {
    switch (currentTabIndex) {
      case 2:
      case 1:
        return (
          <div className="videoListCover">
            {videos.map((video) => {
              return <VideoCard key={video.id} data={video} />;
            })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div className="iconBox">
          <img alt="asd" className="icon" src={settingIcon} />
        </div>
        <div className="iconBox">
          <img alt="asd" className="icon" src={bellIcon} />
        </div>
      </div>

      <div className="content">
        <img alt="logo" className="ytLogo" src={logo} />
        <div className="rowBtw searchBarCover">
          <input className="searchBarText" placeholder="Search" />
          <img alt="play" className="searchIcon" src={playIcon} />
        </div>

        <div className="rowBtw chipRowCover">
          {tabs.map((data, index) => {
            const isSelected = currentTabIndex === index;            
            const backgroundColor = isSelected ? "#ff0000" : "#f0f0f0";
            const textColor = isSelected ? "#ffffff" : "#9a9a9a";
            const fontWeight = isSelected ? "700" : "500";
            const filter = isSelected ? "brightness(200%)" : "";
            return (
              <div
                onClick={() => {
                  setCurrentTabIndex(index)
                }}
                className="chip"
                style={{ backgroundColor }}
              >
                {data.icon !== undefined ? (
                  <img
                    alt={data.title}
                    src={data.icon}
                    style={{ filter }}
                    className="chipIcon"
                  />
                ) : null}
                <div
                  className="chipText"
                  style={{ fontWeight, color: textColor }}
                >
                  {data.title}
                </div>
              </div>
            );
          })}
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default App;