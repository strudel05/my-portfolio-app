const NavbarListDesktop = ({ item }) => {
  return (
    <li className="text-skin-base [counter-increment:list-number]">
      <a
        href={`#${item}`}
        className="before:mr-3 before:text-skin-accent before:content-['0'counter(list-number)'.']"
      >
        {item}
      </a>
    </li>
  );
};
export default NavbarListDesktop;
