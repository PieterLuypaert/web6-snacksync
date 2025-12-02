import React, { useEffect, useRef } from "react";
import { Boterham } from "../Boterham/Boterham";
import useFormStore from "../../store/Formstore";
import gsap from "gsap";
import {
  animateBreadAppearance,
  animateLettuceAdd,
  animateTomatoStagger,
  animateCheeseThrow,
  animateTopBreadCelebration,
  animateForkThrow,
} from "../../animations";

const AnimatedSandwich = () => {
  const groupRef = useRef();
  const { values } = useFormStore();
  const {
    hasBread = false,
    hasLettuce = false,
    tomatoCount = 0,
    hasCheese = false,
    hasTopBread = false,
    hasFork = false,
  } = values;

  const showParts = {
    hasBread,
    hasLettuce,
    tomatoCount,
    hasCheese,
    hasTopBread,
    hasFork,
  };

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      gsap.killTweensOf("*");
    };
  }, []);

  useEffect(() => {
    if (!hasBread) return;
    animateBreadAppearance(groupRef);
  }, [hasBread]);

  useEffect(() => {
    if (!hasLettuce || !hasBread) return;
    animateLettuceAdd(groupRef);
  }, [hasLettuce, hasBread]);

  useEffect(() => {
    if (tomatoCount === 0 || !hasBread) return;
    animateTomatoStagger(groupRef, tomatoCount);
  }, [tomatoCount, hasBread]);

  useEffect(() => {
    if (!hasCheese || !hasBread) return;
    animateCheeseThrow(groupRef);
  }, [hasCheese, hasBread]);

  useEffect(() => {
    if (!hasTopBread || !hasBread) return;
    animateTopBreadCelebration(groupRef);
  }, [hasTopBread, hasBread]);

  useEffect(() => {
    if (!hasFork) return;
    animateForkThrow(groupRef);
  }, [hasFork]);

  return <Boterham ref={groupRef} scale={0.5} showParts={showParts} />;
};

export default AnimatedSandwich;
