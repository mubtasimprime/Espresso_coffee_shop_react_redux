import AboutUs from "../components/AboutUs";
import Ad from "../components/Ad";
import Banner from "../components/Hero";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <section className="rancho">
      <Header></Header>
      <Banner></Banner>
      <Ad></Ad>
      <Menu></Menu>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </section>
  );
};

export default Home;
