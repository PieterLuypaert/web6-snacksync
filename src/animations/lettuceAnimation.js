import gsap from "gsap";

export const animateLettuceAdd = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for lettuce animation");
    return;
  }

  gsap.to(groupRef.current.position, {
    y: 0.2,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut",
  });
};
