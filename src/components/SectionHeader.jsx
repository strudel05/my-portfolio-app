const SectionHeader = ({ sectionId, sectionTitle }) => {
  return (
    <h2
      data-section-id={sectionId}
      className="[font-size:clamp(1.625rem,4.875vw,2rem)] font-medium capitalize text-skin-base flex items-center whitespace-nowrap mt-3 mb-10 xl:mb-20
          
        
          before:content-['0'attr(data-section-id)'.']
          before:font-mono
          before:text-skin-accent
          before:mr-3
          before:[font-size:clamp(1rem,3vw,1.25rem)]
          before:self-end
          before:relative
          before:bottom-1

          after:content-['']
          after:h-[1px]
          after:bg-skin-moremuted
          after:w-full
          after:ml-6
          after:sm:w-[200px]
          after:md:w-[250px]
          after:transition-all
          after:duration-500
          after:ease-in-out
        
        "
    >
      {sectionTitle}
    </h2>
  );
};
export default SectionHeader;
