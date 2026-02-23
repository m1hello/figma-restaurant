import Navbar from "./components/Navbar";
import Events from "./components/Events";
import OurTeam from "./components/OurTeam";
import WhoAreWe from "./components/WhoAreWe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="homeBackground">
        <Navbar variant="dark" />
        <h1 className="heroTitle">Made by Italians. Enjoyed by Everyone.</h1>
      </div>      
      <div className="sectionBreak" aria-hidden="true" />
      <WhoAreWe />
      <div className="sectionBreak" aria-hidden="true" />
      <OurTeam />
      <div className="sectionBreak" aria-hidden="true" />
      <Events />      
      <Footer />
    </main>
  );
}
