const NavbarListMobile = ({ item, closeSidebar }) => {
  return (
    <li className="text-skin-base [counter-increment:list-number]">
      <a
        href={`#${item}`}
        className="block pt-3 pb-10 

                  before:[font-size:clamp(0.9rem,3.5vw,1.125rem)]
                  before:mb-3 
                  before:block
                  before:text-skin-accent
                  before:content-['0'counter(list-number)'.']"
        onClick={closeSidebar}
      >
        {item}
      </a>
    </li>
  );
};
export default NavbarListMobile;
