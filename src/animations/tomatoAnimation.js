import gsap from "gsap";

export const animateTomatoStagger = (groupRef, tomatoCount) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for tomato animation");
    return;
  }

  const tomatoes = groupRef.current.tomatoes;
  if (!tomatoes) return;

  // Only animate the tomatoes that are currently visible
  tomatoes.forEach((tomatoRef, index) => {
    if (!tomatoRef.current || index >= tomatoCount) return;

    const originalPos = {
      x: tomatoRef.current.position.x,
      y: tomatoRef.current.position.y,
      z: tomatoRef.current.position.z,
    };

    // Kill any existing animations on this tomato
    gsap.killTweensOf(tomatoRef.current.position);
    gsap.killTweensOf(tomatoRef.current.scale);
    gsap.killTweensOf(tomatoRef.current.rotation);

    // Start from high above - only change Y position
    gsap.set(tomatoRef.current.position, {
      x: originalPos.x,
      y: originalPos.y + 10,
      z: originalPos.z,
    });
    gsap.set(tomatoRef.current.scale, { x: 0, y: 0, z: 0 });
    gsap.set(tomatoRef.current.rotation, { x: 0, y: 0, z: 0 });

    // Fall down with stagger delay - keep X and Z constant
    gsap.to(tomatoRef.current.position, {
      x: originalPos.x,
      y: originalPos.y,
      z: originalPos.z,
      duration: 1,
      delay: index * 0.15,
      ease: "bounce.out",
    });

    // Scale up
    gsap.to(tomatoRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.5,
      delay: index * 0.15,
      ease: "back.out(1.7)",
    });

    // Rotation for fun
    gsap.to(tomatoRef.current.rotation, {
      z: Math.PI * 2,
      duration: 1,
      delay: index * 0.15,
      ease: "power2.out",
    });
  });

  // Wiggle the whole sandwich
  gsap.to(groupRef.current.rotation, {
    z: 0.1,
    duration: 0.2,
    yoyo: true,
    repeat: 3,
    ease: "power2.inOut",
  });
};
