export default function Menu() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="items-center mx-auto max-w-4xl flex justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
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
    </header>
  );
}
