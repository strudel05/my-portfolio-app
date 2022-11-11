const SocialLink = () => {
  return (
    <li className="m-0">
      <a
        href="https://github.com/strudel05"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="
              decorative__links block p-4
              hover:text-skin-accent
              hover:-translate-y-1
            "
      >
        <FiGithub size={22} />
      </a>
    </li>
  );
};
export default SocialLink;
