import Paragrafo from "./components/paragrafo";

export default function PrimeiraTela() {
  return (
    <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldly Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before...
        </h2>
        <Paragrafo texto="We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond..."></Paragrafo>
        <Paragrafo texto="Think Acme Rockets."></Paragrafo>
      </article>
      <img className="w-1/2" src="/img/rocketdab.png" alt="Rocket Dab" />
    </section>
  );
}
