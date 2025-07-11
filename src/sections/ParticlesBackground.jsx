// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true },
//         particles: {
//           number: {
//             value: 50,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.5,
//             width: 1,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//           modes: {
//             repulse: {
//               distance: 100,
//               duration: 0.4,
//             },
//           },
//         },
//         background: {
//           color: "#0d0d0d",
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
