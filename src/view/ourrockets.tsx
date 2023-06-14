import ItemLista from "./components/ItemLista";
import TitleSection from "./components/TitleSection";

export default function OurRockets() {
  return (
    <section id="rockets" className="p-6 my-12 scroll-m-20 widescreen:section-min-height tallscreen:section-min-height">
      <TitleSection titulo="Our Rockets"></TitleSection>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <ItemLista urlImagem="/img/rocketman.png" alt="Rocket Man" titulo="Explorer" paragrafo="Affordable Exploration" paragrafoSM="$"></ItemLista>
        <ItemLista urlImagem="/img/rocketride.png" alt="Adventurer" titulo="Adventurer" paragrafo="Best Selling Rocket!" paragrafoSM="$$"></ItemLista>
        <ItemLista urlImagem="/img/rocketlaunch.png" alt="Infinity" titulo="Infinity" paragrafo="Luxury Starship" paragrafoSM="$$$"></ItemLista>
      </ul>
    </section>
  );
}
