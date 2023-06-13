import Line from "./components/Line";
import Contact from "./contact";
import PrimeiraTela from "./primeiraTela";
import OurRockets from "./ourrockets";
import Testimonials from "./testimonials";
import Footer from "./components/footer";

export default function Conteudo() {
  return (
    <div>
      <main className="max-w-4xl mx-auto">
        <PrimeiraTela></PrimeiraTela>
        <Line></Line>
        <OurRockets></OurRockets>
        <Line></Line>
        <Testimonials></Testimonials>
        <Line></Line>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
