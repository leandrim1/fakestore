const Footer = () => {
  return (
    <footer className="w-full fixed h-45 flex items-center justify-between px-5 sm:px-10 md:px-20 select-none z-1">
      <div className="flex items-center">
        <img src="\atomic.svg" alt="Logo" className="w-30 h-15 " />
      </div>
      <nav className="hidden md:flex items-center gap-2 lg:gap-10 md:gap-4">
        <div className="hidden md:flex items-center lg:gap-10 md:gap-4 border-1 border-neutral-700 bg-neutral-900 opacity-99  rounded-4xl p-4">
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">Features</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">How it works</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">Testimonials</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">FAQs</strong>
          </div>
        </div>
      </nav>
      <button className="hidden md:flex items-center h-10 px-4 rounded-3xl text-neutral-100 hover:border-neutral-400 border-1 border-neutral-700 bg-neutral-800 p-6 font-semibold">
          Notify me
        </button>
    </footer>
  );
};

export default Footer;
