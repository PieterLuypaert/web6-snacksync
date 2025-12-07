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

  gsap.set(fork.current.position, { y: 15 });
  gsap.set(fork.current.rotation, { x: originalRot.x - Math.PI });

  const timeline = gsap.timeline();

  timeline.to(fork.current.position, {
    y: originalPos.y,
    duration: 0.6,
    ease: "power4.in",
  });

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
};
