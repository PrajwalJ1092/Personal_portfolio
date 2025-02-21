import React, { useEffect } from "react";
import "./CompainesHor.css";

const CompaniesHor = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If the user hasn't opted for reduced motion, enable animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);
        const direction = scroller.getAttribute("data-direction");

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });

        if (direction === "right") {
          scrollerInner.style.transform = "translateX(100%)";
        } else {
          scrollerInner.style.transform = "translateX(-100%)";
        }
      });
    }
  }, []);

  return (
    <div className="text-[#48cae4] bg-white chakra-petch-regular   ">
      <div className="scroller relative max-w-full" data-speed="fast">
        <div className="scroller-inner ">
          <h1 className="text-7xl font-extrabold">FRONTEND DEVELOPER *</h1>
        </div>
      </div>

      {/* Second scroller */}
      <div
        className="scroller relative max-w-full "
        data-speed="fast"
        data-direction="right"
      >
        <div className="scroller-inner ">
          <h1 className="text-7xl font-thin ">UI/UX DEVELOPER * </h1>
        </div>
      </div>
    </div>
  );
};

export default CompaniesHor;
