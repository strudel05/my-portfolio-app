import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useGlobalContext } from "../context";

const ProjectCard = ({
  name,
  url: { site, repo },
  description,
  technologies,
  sourceSet: { lg, md, sm },
}) => {
  const { theme } = useGlobalContext();

  return (
    <li className="project">
      <div
        className={
          theme === "dark" ? "project__image" : "project__image theme-light"
        }
      >
        <a href={site} target="_blank" rel="noreferrer">
          <picture>
            <source media="(min-width: 1024px)" srcSet={lg} />
            <source media="(min-width: 640px)" srcSet={md} />
            <source srcSet={sm} />
            <img
              aria-hidden="true"
              alt={`Preview of the ${name} site`}
              aria-label={`link to ${name}`}
              className="project__image--img"
              src={lg}
              width="600"
              height="326"
            />
          </picture>
        </a>
      </div>
      <div className="project__content p-8 sm:px-10 sm:py-0">
        <p className="text-skin-accent text-sm mt-4 mb-4">Featured Project</p>
        <h3 className="font-sans text-skin-inverted font-semibold text-2xl capitalize mb-8">
          <a href={site} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h3>
        <div className="project__content--paragraph sm:bg-skin-muted sm:shadow-sm sm:p-6 rounded">
          <p className="normal-case text-base font-sans">{description}</p>
        </div>
        <ul className="text-sm sm:text-xs md:text-sm flex flex-wrap gap-2 mt-10 sm:mt-8 mb-5 items-center sm:justify-end">
          {technologies.map((tech, i) => {
            return (
              <li
                key={i}
                className="mx-0 px-1 py-[2px] opacity-[0.85] bg-skin-alwaysdark text-skin-white rounded normal-case"
              >
                {tech}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2 items-center">
          <a
            target="_blank"
            rel="noreferrer"
            className="p-2"
            href={repo}
            aria-label="link to repository"
          >
            <FiGithub size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="p-2 relative"
            href={site}
            aria-label="link to published site"
          >
            <FiExternalLink className="relative bottom-[1.5px]" size={22} />
          </a>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
