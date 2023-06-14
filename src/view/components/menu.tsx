export default function Menu() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="items-center mx-auto max-w-4xl flex justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button id="hamburger-button" className="text-4xl md:hidden cursor-pointer">
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a className="hover:opacity-90" href="#rockets">
              Our Rockets
            </a>
            <a className="hover:opacity-90" href="#testimonials">
              Testimonials
            </a>
            <a className="hover:opacity-90" href="#contact">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
        <button className="text-8xl self-end px-6">&times;</button>
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <a href="#hero" className="w-full text-center py-6 hover:opacity-90">
            Home
          </a>
          <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="w-full text-center py-6 hover:opacity-90">
            Contact Us
          </a>
          <a href="#footer" className="w-full text-center py-6 hover:opacity-90">
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
}
