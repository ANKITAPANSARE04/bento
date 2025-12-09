import { useEffect } from "react";
import gsap from "gsap"; 
import "./App.css";

export default function App() {
  useEffect(() => {
    // Existing intro animation
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });

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
          duration: 1.4
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
          duration: 1.4
        },
        "-=0.8"
      );

    // 🔁 Flip animation on hover
    const cards = gsap.utils.toArray(".grid-item");
    const handlers = [];

    cards.forEach((card) => {
      // Horizontal flip (left-right) => rotationY
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

    // Cleanup
    return () => {
      handlers.forEach(({ card, handleEnter, handleLeave }) => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
 <div className="responsive-grid-container">
  <div className="grid-item item-1"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-2"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-3"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-4"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-5"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-6"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-7"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
  <div className="grid-item item-8"><div className="card-inner"><div className="front"></div><div className="back"></div></div></div>
</div>

  );
}
