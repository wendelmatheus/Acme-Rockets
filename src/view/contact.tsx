import Formulario from "./components/formulario";
import TitleSection from "./components/titleSection";

export default function Contact() {
  return (
    <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
      <TitleSection titulo="Contact Us"></TitleSection>
      <Formulario></Formulario>
    </section>
  );
}
