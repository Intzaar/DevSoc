gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("myVideo");

video.addEventListener("loadedmetadata", () => {
  const videoDuration = video.duration;
  const scrollDuration = videoDuration * 100;

  document.body.style.height = `${scrollDuration}vh`;

  gsap.to(video, {
    scrollTrigger: {
      trigger: "#myVideo",
      start: "top top",
      end: `${scrollDuration}vh`,
      scrub: 2,
      pin: true,
      markers: false,
    },
    currentTime: videoDuration,
  });
});
