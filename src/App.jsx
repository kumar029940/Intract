import { useState } from "react";
import "./App.css";
import Boxes from "./Components/Boxes";
import Parentbox from "./Components/Parentbox";
import { descriptionList } from "./Data/data1";
import { PosterList } from "./Data/data2";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import TimerCount from "./Components/TimerCount";
import LuckyDrawCard from "./Components/LuckyDraw";
import Footer2 from "./Components/Footer2";

export default function App() {
  const [showMore, setShowMore] = useState(0);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const targetDate = "2024-07-11T10:00:00";

  const handleShowMore = (val) => {
    setShowMore(val === showMore ? 0 : val);
  };

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  const handlePlayClick = (id) => {
    setPlayingVideoId(id);
  };

  return (
    <div>
      <div className="nav-bar">
        <h2>intract.</h2>
        <h3>Compass</h3>
        <h3>Explore</h3>
        <div className="combine">
          <h3>Academy</h3>
          <h4>New</h4>
        </div>
        <h3>NFTs</h3>
        <h3>For Projects</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for ecosystems, trending quests etc,."
        />
        <button className="sign-in">Sign In</button>
      </div>
      <img
        className="image"
        src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
        alt="poster-1"
      />
      <div className="container">
        <div className="elements">Intract</div>
        <h1 className="elements">Academy</h1>
        <p className="elements">
          Intract users have together made more than $100 million in web3.
        </p>
        <p className="elements">Join them and learn how to earn crypto!</p>
        <button className="get-started">Get started</button>
      </div>
      <div className="flex">
        <div className="alignSelfBaseline">
          <Parentbox
            handleShowMore={handleShowMore}
            image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
            text="Basics of Crypto"
            paragraph="The safest and easiest place to start your crypto journey!"
            Xps="1490 XPs"
            val={1}
          />
        
        {showMore === 1 && (
          <div className="container_4">
            {descriptionList.map((item) => (
              <div key={item.id}>
                <Boxes text={item.text} tasks={item.tasks} image={item.image} />
              </div>
            ))}
          </div>
        )}
        </div>
        <div className="alignSelfEnd">
          <Parentbox
            handleShowMore={handleShowMore}
            image="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
            text="Introduction to Airdrops"
            paragraph="Your best bet to make it big in crypto"
            Xps="1040 Xps"
            val={2}
          />
        
        {showMore === 2 && (
          <div className="container_4">
            {descriptionList.map((item) => (
              <div key={item.id}>
                <Boxes text={item.text} tasks={item.tasks} image={item.image} />
              </div>
            ))}
          </div>
        )}
        </div>
        <TimerCount targetDate={targetDate} />
        <LuckyDrawCard />
      </div>
      <div className="avatars-2">
        {PosterList.map((poster) => (
          <div className="poster-wrapper" key={poster.id}>
            {playingVideoId === poster.id && (
              <div className="video-wrapper"></div>
            )}
            {playingVideoId === poster.id ? (
              <iframe
                height="300px"
                width="270px"
                className="video"
                src={poster?.videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : (
              <>
                <img
                  onMouseEnter={() => handleMouseEnter(poster.id)}
                  onMouseLeave={handleMouseLeave}
                  className="avatars-2_image"
                  src={poster.image}
                  alt="poster"
                />
                {hoveredImageId === poster.id} &&
                <PlayCircleOutlineIcon
                  className="play-icon"
                  onClick={() => handlePlayClick(poster.id)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <Section />
      <Footer />
      <Footer2 />
    </div>
  );
}
