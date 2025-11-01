// src/components/DashboardGrid.tsx

import React, { useState } from "react";
import logo from "./assets/logo.png";
import nimlogo from "./assets/nim.png";
import banner1img from "./assets/b2.jpg";
import ratingimg from "./assets/rating.jpg";
import play from "./assets/play.svg";
import {
  Star,
  Home,
  ActiveHome,
  Search,
  ActiveSearch,
  Like,
  ActiveLike,
  User,
  ActiveUser,
  ActivePlay,
} from "./assets/svg-colection";
import PassportCarousel from "./cast";

const DashboardGrid = () => {
  const [active, setActive] = useState("home"); // Default active item

  const menuItems = [
    {
      id: "home",
      icon: <Home color={"#000"} />,
      activeIcon: <ActiveHome color={"#FA0200"} />,
    },
    {
      id: "search",
      icon: <Search color={"#000"} />,
      activeIcon: <ActiveSearch color={"#FA0200"} />,
    },
    {
      id: "like",
      icon: <Like color={"#000"} />,
      activeIcon: <ActiveLike color={"#FA0200"} />,
    },
    {
      id: "user",
      icon: <User color={"#000"} />,
      activeIcon: <ActiveUser color={"#FA0200"} />,
    },
  ];
  const images = [
    {
      image:
        "https://resizing.flixster.com/yX4Me3GcJiq5IbBLGn4GpbqfAcw=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/466719_v9_bb.jpg",
      name: "Craig",
      surname: "Gillespie",
    },
    {
      image:
        "https://resizing.flixster.com/tZCGqFwYwVrT9p8JBBu6JXEOSRE=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/501536_v9_bb.jpg",
      name: "Emma",
      surname: "Stone",
    },
    {
      image:
        "https://resizing.flixster.com/CoxYfWCU_VdzW1H4bjdBZcmALAc=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/19595_v9_be.jpg",
      name: "Emma",
      surname: "Thompson",
    },
    {
      image:
        "https://resizing.flixster.com/-DX1iRf6zbKLlMEjF20cy0-Tv84=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/515847_v9_bb.jpg",
      name: "Joel",
      surname: "Fry",
    },
  ];

  const playvideo = () => {
    const iframe = document.getElementById("videoFrame");
    iframe.style.display = "block"; // Show the iframe when the play button is clicked
  };
  return (
    // Outer container: Apply padding and a minimum height
    <>
      <div className="grid-container-bg"></div>
      <div className="grid-container">
        {/* container1 */}
        <div className="banner1 about-rating">
          <div
            className=" rounded-2xl p-3 about-rating-inner" 
          >
            <div className="icon px-5 pt-3">
              <img src={logo} className="logo" alt="logo" />
              &emsp;BOOK
            </div>
            <div className="px-5">
              <div> From Estella to Icon </div>
              <a
                href="https://www.youtube.com/embed/gmRKv7n2If8"
                target="_blank"
                className="watch-now"
              >
                Watch now
              </a>
            </div>
            <h1 className="movie-title ">CRUELLA</h1>
            <div>
              <div className="banner1img">
                <iframe
                  id="videoFrame" // Add an ID to the iframe to target it easily
                  src="https://www.youtube.com/embed/gmRKv7n2If8?controls=0" // Added autoplay=1
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                className="hidden" // Hide the iframe initially
                ></iframe>
                <img
                  src={play}
                  className="play"
                  onClick={playvideo}
                  alt="Play Button"
                />

                <div className="playcurve1">
                  <div id="play-curved-corner-topleft"></div>
                </div>
                <div className="playcurve2">
                  <div id="play-curved-corner-bottomleft"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl p-3 banner2img">
            <a
              href="https://www.youtube.com/embed/gmRKv7n2If8?autoplay=1&controls=0"
              target="_blank"
              className=""
            >
              <ActivePlay color={"white"} />
              WATCH TRAILER
            </a>
          </div>
        </div>

        {/* container2 */}
        <div className="rounded-2xl hero-container">
          <div className="absolute right-8 top-5 heart">
            {" "}
            <ActiveLike color={"#FA0200"} />{" "}
          </div>
          <div className="menu-container">
            <div className="menu">
              <span className="flex">
                {menuItems.map((item) => (
                  <span
                    key={item.id}
                    className={` m-3 cursor-pointer transition-all duration-200 text-red-500 ${
                      active === item.id
                        ? "text-blue-600 scale-110 "
                        : "text-gray-500"
                    }`}
                    onClick={() => setActive(item.id)}
                  >
                    {/* Render active or normal icon */}
                    {active === item.id ? item.activeIcon : item.icon}
                  </span>
                ))}
              </span>
            </div>
            <div className="menucurve1 ">
              <div id="menu-curved-corner-topright"></div>
            </div>
            <div className="menucurve2">
              <div id="menu-curved-corner-bottomleft"></div>
            </div>
          </div>

          <a
            className="hero-button"
            href="https://www.youtube.com/embed/gmRKv7n2If8?autoplay=1&controls=0"
            target="_blank"
          >
            <span className="flex align-center">
              <ActivePlay color={"white"} /> Watch Now
            </span>{" "}
            &nbsp; 2h 14min &nbsp;
          </a>
        </div>

        {/* container3 */}
        <div className="rounded-2xl about-rating container3">
          <div className="rating-container ">
            <div className="flex">
              <Star color={"red"} />
              <Star color={"red"} />
              <Star color={"red"} />
              <Star color={"red"} />
              <Star color={"red"} />
            </div>
          </div>
          <div
            className=" rounded-2xl p-3 about-rating-inner"  
          >
            <div className="p-5">
              <h1 className="text-2xl">STORY LINE</h1>
              <p className="text-sm line-clamp-3 ">
                A young girl named Estella (Tipper Siefert-Cleveland) was born
                with her hair half-black and half-white. She has always had a
                creative passion and a rather feisty personality. Her mother
                Catherine (Emily Beecham) notices and nicknames her “Cruella”.
              </p>
              <a
                className="text-sm text-red-500"
                href="https://themoviespoiler.com/movies/cruella/"
                target="_blank"
              >
                Read more
              </a>
            </div>
            <div className="py-5">
              <h1 className="text-2xl p-5">STAR CAST</h1>
              <PassportCarousel images={images} speed={50} height={50} />
            </div>
            <div className="p-5 text-xs text-center text-gray-500">
              © 1990-2025 by IMDb.com, Inc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardGrid;
