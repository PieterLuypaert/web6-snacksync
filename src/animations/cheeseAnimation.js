import gsap from "gsap";

export const animateCheeseThrow = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for cheese animation");
    return;
  }

  const cheeses = groupRef.current.cheeses;
  if (!cheeses) return;

  // Each cheese slice gets thrown from the side
  cheeses.forEach((cheeseRef, index) => {
    if (!cheeseRef.current) return;

    const originalPos = {
      x: cheeseRef.current.position.x,
      y: cheeseRef.current.position.y,
      z: cheeseRef.current.position.z,
    };

    const originalRot = {
      x: cheeseRef.current.rotation.x,
      y: cheeseRef.current.rotation.y,
      z: cheeseRef.current.rotation.z,
    };

    const startX = index === 0 ? -8 : 8;

    gsap.set(cheeseRef.current.position, {
      x: startX,
      y: originalPos.y + 5,
      z: originalPos.z,
    });
    gsap.set(cheeseRef.current.scale, { x: 0, y: 0, z: 0 });

    const timeline = gsap.timeline({ delay: index * 0.2 });

    timeline.to(cheeseRef.current.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 0.3,
      ease: "back.out(2)",
    });

    timeline.to(
      cheeseRef.current.position,
      {
        x: originalPos.x,
        y: originalPos.y,
        z: originalPos.z,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    timeline.fromTo(
      cheeseRef.current.rotation,
      {
        z: originalRot.z + (index === 0 ? -Math.PI * 2 : Math.PI * 2),
      },
      {
        z: originalRot.z,
        duration: 0.8,
        ease: "power2.out",
      },
      0
    );

    timeline.to(
      cheeseRef.current.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
      },
      0.5
    );
  });

  gsap.to(groupRef.current.scale, {
    x: 0.52,
    y: 0.52,
    z: 0.52,
    duration: 0.15,
    yoyo: true,
    repeat: 3,
    ease: "power2.inOut",
  });
};
