import gsap from "gsap";

export const animateBreadAppearance = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for bread animation");
    return;
  }

  // Small delay to ensure ref is properly attached
  gsap.delayedCall(0.1, () => {
    if (!groupRef.current) return;

    gsap.fromTo(
      groupRef.current.position,
      { y: -10 },
      {
        y: 0,
        duration: 1.5,
        ease: "bounce.out",
        onComplete: () => {
          if (!groupRef.current) return;
          // Celebratory spin
          gsap.to(groupRef.current.rotation, {
            y: Math.PI * 2,
            duration: 1,
            ease: "power2.out",
          });
        },
      }
    );
  });
};
