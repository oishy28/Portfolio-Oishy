import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { Interactivity, Links, Move, Particles as ParticlesSettings } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await engine.addParticleUpdater(ParticlesSettings);
    await engine.addParticleUpdater(Move);
    await engine.addParticleUpdater(Links);
    await engine.addInteractivityPlugin(Interactivity);
  }, []);

  // The rest remains the same...
};
