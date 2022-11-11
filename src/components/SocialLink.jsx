const SocialLink = ({ url, label, icon }) => {
  return (
    <li className="m-0">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="
              decorative__links block p-4
              hover:text-skin-accent
              hover:-translate-y-1
            "
      >
        {icon}
      </a>
    </li>
  );
};
export default SocialLink;
