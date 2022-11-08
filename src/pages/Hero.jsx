const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-start min-h-screen justify-center p-0"
    >
      <div>
        <h1 className="fadeup-onload text-skin-accent font-mono font-light [font-size:clamp(0.875rem,5vw,1rem)] mb-7">
          Hi, my name is
        </h1>
        <h2 className="text-skin-base [font-size:clamp(2.5rem,8vw,5rem)]">
          Euy Jang!
        </h2>
        <h3 className="text-skin-muted [font-size:clamp(2.2rem,7.325vw,4.5rem)] max-w-3xl mt-2">
          I build things for
        </h3>
        <h3 className="text-skin-muted [font-size:clamp(2.2rem,7.325vw,4.5rem)] max-w-3xl">
          the web.
        </h3>
        <p className="text-skin-muted text-lg max-w-xl mt-5">
          I'm a frontend developer with a background in game QA and project
          management.
        </p>
        <p className="text-skin-muted text-lg max-w-xl mt-2">
          I'm currently focusing on building beautiful web apps & honing my
          skills for creating exceptional digital experiences.
        </p>
      </div>
    </section>
  );
};
export default Hero;
