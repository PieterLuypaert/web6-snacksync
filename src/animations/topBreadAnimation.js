import gsap from "gsap";

export const animateTopBreadCelebration = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for top bread animation");
    return;
  }

  gsap.to(groupRef.current.position, {
    y: 1.5,
    duration: 0.5,
    ease: "power2.out",
  });

  gsap.to(groupRef.current.rotation, {
    y: Math.PI * 4,
    duration: 1.5,
    ease: "power2.inOut",
  });

  gsap.to(groupRef.current.position, {
    y: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "bounce.out",
  });
};
