//This is home page, It will contains all the sections require in this page.
import styled from 'styled-components';
import HeroSection from '../Sections/Hero';
import About from '../Sections/About';
import Services from '../Sections/Services';
import Testimotials from '../Sections/Testimonials';
import Contact from '../Sections/Contact';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimotials />
      <Contact />

    </Container>
  )

};

export default Home;
