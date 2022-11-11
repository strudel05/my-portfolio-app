import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import SocialLink from "./SocialLink";
import socials from "../data/socials";

const DecorativeLinks = () => {
  return (
    <>
      <div className="hidden md:block w-10 bottom-0 fixed left-5">
        <ul
          className="flex flex-col items-center
      
        after:content-[''] 
        after:w-[1px]
        after:h-20 after:bg-skin-textmuted
        after:mt-4"
        >
          {socials.map((social, i) => {
            return (
              <SocialLink
                key={i}
                {...social}
                customStyle="decorative__links block p-4 hover:text-skin-accent hover:-translate-y-1"
              />
            );
          })}
        </ul>
      </div>
      <div className="hidden md:block w-10 bottom-0 fixed right-5">
        <div
          className="flex flex-col items-center
              after:content-[''] 
              after:w-[1px]
              after:h-20 
              after:bg-skin-textmuted
              after:block
              after:mt-4"
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="
            decorative__links
            font-mono text-xs leading-none tracking-widest p-2 transition-all
            [writing-mode:vertical-rl] 

            hover:-translate-y-2
            hover:text-skin-accent
              "
            href="mailto:euyjang05@gmail.com"
          >
            euyjang05@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};
export default DecorativeLinks;
