import gsap from "gsap";

export const animateTomatoStagger = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for tomato animation");
    return;
  }

  const tomatoes = groupRef.current.tomatoes;
  if (!tomatoes) return;

  // Each tomato falls down with a delay
  tomatoes.forEach((tomatoRef, index) => {
    if (!tomatoRef.current) return;

    const originalY = tomatoRef.current.position.y;

    // Start from high above
    gsap.set(tomatoRef.current.position, { y: originalY + 10 });
    gsap.set(tomatoRef.current.scale, { x: 0, y: 0, z: 0 });

    // Fall down with stagger delay
    gsap.to(tomatoRef.current.position, {
      y: originalY,
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
