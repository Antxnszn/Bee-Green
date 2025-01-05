import Header from './src/components/Header'
import App from './src/pages/Main';
import HowItWorks from "./src/pages/HowItWorks";
import PlantsApp from "./src/pages/PlantsApp";
import AboutUs from "./src/pages/AboutUs";
import Example from "./src/pages/Example";
import Footer from "./src/components/Footer";
import ContactUs from './src/pages/ContactUs';

const routes = [
  {
    path: '/',
    component: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: '/Funcionamiento',
    component: (
      <>
        <Header />
        <HowItWorks />
        <Footer />
      </>
    ),
  },
  {
    path: '/PlantsApp',
    component: (
      <>
        <Header />
        <PlantsApp />
        <Footer />
      </>
    ),
  },
  {
    path: '/AboutUs',
    component: (
      <>
        <Header />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: '/Example',
    component: (
      <>
        <Header />
        <Example />
        <Footer />
      </>
    ),
  },

  {
    path: '/ContactUs',
    component: (
      <>
        <Header />
        <ContactUs />
        <Footer />
      </>
    ),
  }
];


export default routes;
