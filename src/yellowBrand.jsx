import { useEffect } from "react";
import gsap from "gsap";
import "./App.css";

export default function App() {

  
  useEffect(() => {
  const isMobile = window.matchMedia("(max-width: 1000px)").matches;

  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  if (isMobile) {
    // 🔹 Start all cards below the screen a bit
    gsap.set(".grid-item", {
      y: 120,
      opacity: 0
    });

    // 🔹 Animate in the same VISUAL order as your CSS grid:
    // 5 (full width top)
    // 1 & 2 (same row)
    // 7 (full width)
    // 4 & 6 (same row)
    // 8 (full width)
    // 3 (full width bottom)
    tl
      .to(".item-5", {
        y: 0,
        opacity: 1,
        duration: 1 // hero card a bit slower if you want
      })
      .to(
        [".item-1", ".item-2"],
        {
          y: 0,
          opacity: 1,
          stagger: 0.15
        },
        "-=0.4" // overlap slightly with previous
      )
      .to(
        ".item-7",
        {
          y: 0,
          opacity: 1
        },
        "-=0.3"
      )
      .to(
        [".item-4", ".item-6"],
        {
          y: 0,
          opacity: 1,
          stagger: 0.15
        },
        "-=0.3"
      )
      .to(
        ".item-8",
        {
          y: 0,
          opacity: 1
        },
        "-=0.2"
      )
      .to(
        ".item-3",
        {
          y: 0,
          opacity: 1
        },
        "-=0.2"
      );
  } else {
    // 💻 DESKTOP: your original animation (unchanged)
    gsap.set(".item-1, .item-2, .item-3", {
      y: -120,
      opacity: 0
    });

    gsap.set(".item-7, .item-8", {
      y: 120,
      opacity: 0
    });

    gsap.set(".item-4", {
      x: -150,
      opacity: 0
    });

    gsap.set(".item-6", {
      x: 150,
      opacity: 0
    });

    gsap.set(".item-5", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center"
    });

    tl
      .to(
        ".item-5",
        {
          scale: 1,
          opacity: 1,
          duration: 1
        },
        "-=0.8"
      )
      .to(".item-1, .item-2, .item-3", {
        y: 0,
        opacity: 1,
        stagger: 0.15
      })
      .to(
        ".item-7, .item-8",
        {
          y: 0,
          opacity: 1,
          stagger: 0.15
        },
        "-=0.6"
      )
      .to(
        ".item-4",
        {
          x: 0,
          opacity: 1
        },
        "-=0.8"
      )
      .to(
        ".item-6",
        {
          x: 0,
          opacity: 1
        },
        "-=0.7"
      )
      .to(
        ".item-5",
        {
          scale: 1,
          opacity: 1,
          duration: 1
        },
        "-=0.8"
      );
  }

  // 🔁 Flip animation stays same
  const cards = gsap.utils.toArray(".grid-item");
  const handlers = [];

  cards.forEach((card) => {
    const handleEnter = () => {
      gsap.to(card, {
        rotationY: 180,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    handlers.push({ card, handleEnter, handleLeave });
  });

  return () => {
    handlers.forEach(({ card, handleEnter, handleLeave }) => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    });
  };
}, []);



  return (
    <div className="responsive-grid-container">
      <div className="grid-item item-1">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-2">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-3">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-4">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-5">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-6">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-7">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="grid-item item-8">
        <div className="card-inner">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
}
