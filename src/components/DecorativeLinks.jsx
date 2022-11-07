import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const DecorativeLinks = () => {
  return (
    <>
      <div className="hidden md:block w-10 bottom-0 fixed left-5">
        <ul
          className="flex flex-col items-center
      
        after:content-[''] 
        after:w-[1px]
        after:h-20 after:bg-lightSlate
        after:mt-4"
        >
          <li className="m-0">
            <a
              href="https://github.com/strudel05"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
            hover:text-green
            hover:-translate-y-1
            transition-all
            block
            p-4
            "
            >
              <FiGithub size={22} />
            </a>
          </li>
          <li className="m-0">
            <a
              href="https://www.instagram.com/euyyyy_0/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="
             hover:text-green
            hover:-translate-y-1
            transition-all
            block
            p-4
            "
            >
              <FiInstagram size={22} />
            </a>
          </li>
          <li className="m-0">
            <a
              href="https://www.linkedin.com/in/euyyoungjang/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
             hover:text-green
            hover:-translate-y-1
            transition-all
            block
            p-4
            "
            >
              <FiLinkedin size={22} />
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block w-10 bottom-0 fixed right-5">
        <div
          className="flex flex-col items-center
              after:content-[''] 
              after:w-[1px]
              after:h-20 
              after:bg-lightSlate
              after:block
              after:mt-4"
        >
          <a
            className="
            font-mono text-xs leading-none tracking-widest p-2 transition-all
            [writing-mode:vertical-rl] 

            hover:-translate-y-1
            hover:text-green
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
