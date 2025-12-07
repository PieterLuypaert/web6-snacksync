import gsap from "gsap";

export const animateTomatoStagger = (groupRef, tomatoCount) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for tomato animation");
    return;
  }

  const tomatoes = groupRef.current.tomatoes;
  if (!tomatoes) return;

  tomatoes.forEach((tomatoRef, index) => {
    if (!tomatoRef.current || index >= tomatoCount) return;

    let originalPos = { x: 0, y: 0, z: 0 };

    if (
      tomatoRef.current.userData &&
      tomatoRef.current.userData.originalPosition
    ) {
      const [x, y, z] = tomatoRef.current.userData.originalPosition;
      originalPos = { x, y, z };
    } else {
      originalPos = {
        x: tomatoRef.current.position.x,
        y: tomatoRef.current.position.y,
        z: tomatoRef.current.position.z,
      };
    }

    gsap.killTweensOf(tomatoRef.current.position);
    gsap.killTweensOf(tomatoRef.current.scale);
    gsap.killTweensOf(tomatoRef.current.rotation);

    gsap.set(tomatoRef.current.position, {
      x: originalPos.x,
      y: originalPos.y + 10,
      z: originalPos.z,
    });
    gsap.set(tomatoRef.current.scale, { x: 0, y: 0, z: 0 });
    gsap.set(tomatoRef.current.rotation, { x: 0, y: 0, z: 0 });

    gsap.to(tomatoRef.current.position, {
      x: originalPos.x,
      y: originalPos.y,
      z: originalPos.z,
      duration: 1,
      delay: index * 0.15,
      ease: "bounce.out",
    });

    gsap.to(tomatoRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.5,
      delay: index * 0.15,
      ease: "back.out(1.7)",
    });

    gsap.to(tomatoRef.current.rotation, {
      z: Math.PI * 2,
      duration: 1,
      delay: index * 0.15,
      ease: "power2.out",
    });
  });

 
};
