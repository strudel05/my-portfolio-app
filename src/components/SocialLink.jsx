const SocialLink = ({ url, label, icon, customStyle }) => {
  return (
    <li className="m-0">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={customStyle}
      >
        {icon}
      </a>
    </li>
  );
};
export default SocialLink;
