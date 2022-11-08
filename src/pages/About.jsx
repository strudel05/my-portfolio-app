import SectionHeader from "../components/SectionHeader";
import faceImg from "../assets/about-square.jpeg";
import { skills } from "../data/skills";

const About = () => {
  return (
    <section id="about" className="min-h-[60vh]">
      <SectionHeader sectionId="1" sectionTitle="about me" />
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-x-12 md:items-start">
        <div className="col-span-3 leading-relaxed order-2 md:order-1">
          <p className="mb-4 relative">
            Hello! My name is Euy, and I've been creating things that live on
            the internet. I originally started out in a game QA career, and I
            realized quickly that I prefer the interactivity and creative energy
            of web development.
          </p>
          <p className="mb-4">
            For the past year or so, I've been practicing coding for at least
            five hours a day consistently.
          </p>
          <p className="mb-4">
            Here are a few technologies that I've been using in my projects:
          </p>
          <ul className="grid grid-cols-2  whitespace-nowrap gap-x-4 mt-5 ml-1">
            {skills.map((skill) => {
              const { id, title, icon } = skill;
              return (
                <li key={id} className="flex items-center text-sm my-1 mx-1">
                  {icon}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2 max-w-[200px] md:max-w-[300px] mt-4 mb-16 md:mt-0 mx-auto w-[80%] sm:w-[60%] md:w-full order-1 md:order-2 ">
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
          after:transition-all
          after:duration-200
          after:ease-in-out
          "
          >
            <div
              className="rounded mix-blend-multiply grayscale relative

              transition-all
              ease-in-out
              hover:filter-none
              hover:mix-blend-normal
              
            "
            >
              <div className="rounded">
                <img src={faceImg} alt="Headshot" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
