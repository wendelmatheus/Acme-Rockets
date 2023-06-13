import Line from "./components/Line";
import Contact from "./contact";
import PrimeiraTela from "./primeiraTela";
import OurRockets from "./ourrockets";
import Testimonials from "./testimonials";

export default function Conteudo() {
  return (
    <main className="max-w-4xl mx-auto">
      <PrimeiraTela></PrimeiraTela>
      <Line></Line>
      <OurRockets></OurRockets>
      <Line></Line>
      <Testimonials></Testimonials>
      <Line></Line>
      <Contact></Contact>
    </main>
  );
}
