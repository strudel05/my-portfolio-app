import SectionHeader from "../components/SectionHeader";
import { skills } from "../data/skills";
import { useGlobalContext } from "../context";

const About = () => {
  const { theme } = useGlobalContext();

  return (
    <section id="about" className="min-h-[60vh]">
      <SectionHeader sectionId="1" sectionTitle="about me" />
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-x-12 md:items-start">
        <div className="col-span-3 leading-relaxed order-2 md:order-1">
          <p className="mb-4 relative">
            Hello! My name is Euy, and I've been creating things that live on
            the internet. I originally started out in a game QA career, and
            realized quickly that I prefer the interactivity and creative energy
            of web development.
          </p>
          <p className="mb-4">
            I've been coding every day consistently for the past year or so,
            learning modern technologies and diving deeper into the fundamentals
            of the web.
          </p>
          <p className="mb-4">
            And here are a few technologies that I've been using in my projects:
          </p>
          <ul className="grid grid-cols-2 whitespace-nowrap gap-x-4 mt-5 ml-1">
            {skills.map((skill, i) => {
              const { title, icon } = skill;
              return (
                <li
                  key={i}
                  className="flex items-center normal-case text-sm my-1 mx-1"
                >
                  {icon}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${
            theme === "dark" ? "" : "theme-light-about"
          } col-span-2 max-w-[200px] md:max-w-[300px] mt-4 mb-16 md:mt-0 mx-auto w-[80%] sm:w-[60%] md:w-full order-1 md:order-2`}
        >
          <div
            className="
            rounded w-full text-center relative bg-skin-accent

            before:w-full
            before:h-full
            before:content-['']
            before:absolute
            before:bg-skin-base
            before:mix-blend-screen
            before:left-0
            before:rounded
            before:block
            before:transition-[mix-blend-mode]
            before:duration-200
            before:ease-in

            after:border-2
            after:border-skin-accent
            after:-z-10
            after:absolute
            after:block
            after:content-['']
            after:w-full
            after:h-full
            after:rounded
            after:top-5
            after:left-5
          
            after:hover:-translate-x-1
            after:hover:-translate-y-1
            after:transition-transform
            after:duration-200
            after:ease-in"
          >
            <div
              className="rounded mix-blend-multiply grayscale relative

              transition-all
              duration-200
              ease-in
              hover:filter-none
              hover:mix-blend-normal
              
            "
            >
              <div className="rounded">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/assets/profile/about-500.webp"
                  />
                  <source srcSet="/assets/profile/about-350.webp" />
                  <img
                    src="/assets/profile/about-500.webp"
                    width="300"
                    height="300"
                    alt="Headshot"
                    className="rounded"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
