import socials from "../data/socials";
import SocialLink from "../components/SocialLink";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <ul className="flex md:hidden items-center">
        {socials.map((social, i) => {
          return <SocialLink key={i} {...social} customStyle="m-2 block" />;
        })}
        <li className="m-0">
          <a
            href="mailto:euyjang05@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="email euy jang"
            className="m-2 block"
          >
            <AiOutlineMail size={23} />
          </a>
        </li>
      </ul>
      <p className="font-mono text-xs mt-2 mb-5">Site built by Euy Jang</p>
    </footer>
  );
};
export default Footer;
