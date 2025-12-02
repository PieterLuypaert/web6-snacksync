import gsap from "gsap";

export const animateForkThrow = (groupRef) => {
  if (!groupRef || !groupRef.current) {
    console.warn("groupRef not ready for fork animation");
    return;
  }

  const fork = groupRef.current.fork;
  if (!fork || !fork.current) return;

  const originalPos = {
    x: fork.current.position.x,
    y: fork.current.position.y,
    z: fork.current.position.z,
  };

  const originalRot = {
    x: fork.current.rotation.x,
    y: fork.current.rotation.y,
    z: fork.current.rotation.z,
  };

  // Start high up and rotated
  gsap.set(fork.current.position, { y: 15 });
  gsap.set(fork.current.rotation, { x: originalRot.x - Math.PI });

  const timeline = gsap.timeline();

  // Throw down
  timeline.to(fork.current.position, {
    y: originalPos.y,
    duration: 0.6,
    ease: "power4.in",
  });

  // Rotate to stab
  timeline.to(
    fork.current.rotation,
    {
      x: originalRot.x,
      y: originalRot.y,
      z: originalRot.z,
      duration: 0.6,
      ease: "power2.in",
    },
    0
  );

  // Impact shake
  timeline.to(groupRef.current.position, {
    y: -0.2,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
  });
};
