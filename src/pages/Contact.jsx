const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center">
      <h2 className="font-mono [font-size:clamp(1.25rem,4.5vw,1.75rem)] font-medium text-skin-accent whitespace-nowrap mb-5">
        03. What's Next?
      </h2>
      <h3 className="[font-size:clamp(2.5rem,7vw,4rem)] text-skin-base mb-8 xl:mb-10">
        Get In Touch
      </h3>
      <p className="max-w-[600px] mb-8 xl:mb-10 text-center">
        I'm currently looking for new opportunities to build upon my skills as a
        frontend developer. If you think I could be a good fit for your team,
        don't hesitate to reach out 😃
      </p>
      <a href="mailto:euyjang05@gmail.com">
        <button className="text-xl px-8 py-6">hello to you too!</button>
      </a>
    </section>
  );
};
export default Contact;
