import Citacao from "./components/citacao";
import TitleSection from "./components/titleSection";

export default function Testimonials() {
  return (
    <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <TitleSection titulo="Testimonials"></TitleSection>
      <Citacao
        texto="Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Lifelong customer! A++ shopping experience!"
        autor="Wile E. Coyote, Genius"
      ></Citacao>
      <Citacao
        texto="The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occassions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs."
        autor="Marvin the Martian & K-9"
      ></Citacao>
      <Citacao
        texto="I knew I not only wanted — I needed — Acme's Infinity Rocket for my mission in space. Acme delievered in one day! Nothing says Take me to your leader like Acme's Infinity Rocket! 💯"
        autor="Buzz Lightyear"
      ></Citacao>
    </section>
  );
}
