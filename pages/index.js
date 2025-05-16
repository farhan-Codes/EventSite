import Button from "@/components/Button";
import Clock from "@/components/Clock";
import Navpanel from "@/components/Navpanel";

export default function Home() {
  return (
  <>   
    <header>
      <section id="homeSlide" className="flex justify-center items-center flex-col">
        <span className="w-[400px] text-center uppercase">
          InterCollege 
          Competition 
          2025
        </span>
        <Button>Register Now</Button>
        <Clock />
        <Navpanel></Navpanel>
      </section>
    </header>
    <main>
      <section id="aboutSlide"></section>
      <section id="eventSlide"></section>
    </main>
    <footer>
      <section id="contactSlide"></section>
    </footer>
  </>
);
}
