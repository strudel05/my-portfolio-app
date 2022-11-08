import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({
  id,
  name,
  url: { site, repo },
  image,
  description,
  technologies,
}) => {
  return (
    <li className="project">
      <div className="project__image">
        <a href={site} target="_blank" rel="noreferrer">
          <img
            className="project__image--img"
            src={image}
            alt={`Preview of the ${name} site`}
          />
        </a>
      </div>
      <div className="project__content p-8 sm:px-10 sm:py-0 transition-all ease-in-out">
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
                className="mx-0 px-1 py-[2px] opacity-[0.85] bg-skin-alwaysdark rounded"
              >
                {tech}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2 items-center">
          <a target="_blank" rel="noreferrer" className="p-2" href={repo}>
            <FiGithub size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="p-2 relative"
            href={site}
          >
            <FiExternalLink className="relative bottom-[1.5px]" size={22} />
          </a>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
