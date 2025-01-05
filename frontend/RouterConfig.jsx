import Header from './src/components/Header'
import App from './src/pages/Main';
import HowItWorks from "./src/pages/HowItWorks";
import PlantsApp from "./src/pages/PlantsApp";
import AboutUs from "./src/pages/AboutUs";
import Example from "./src/pages/Example";

const routes = [
  {
    path: '/',
    component: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: '/Funcionamiento',
    component: (
      <>
        <Header />
        <HowItWorks />
      </>
    ),
  },
  {
    path: '/PlantsApp',
    component: (
      <>
        <Header />
        <PlantsApp />
      </>
    ),
  },
  {
    path: '/AboutUs',
    component: (
      <>
        <Header />
        <AboutUs />
      </>
    ),
  },
  {
    path: '/Example',
    component: (
      <>
        <Header />
        <Example />
      </>
    ),
  }
];


export default routes;
