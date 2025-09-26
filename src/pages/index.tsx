import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/data/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import AccordionLast from "@/components/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import { ImagesSliderDemo } from "@/components/landingpage";
import Footer4Col from "@/components/footer2";
import { Navbar } from "@/components/navbar";
import AboutArakuTravels from "@/components/about";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Araku Travels | Explore Araku Valley’s Beauty & Culture</title>
        <meta
          name="description"
          content="Immerse yourself in the magic of Araku Valley. Araku Travels offers curated journeys with expert local guides, personalized itineraries, and comfortable, clean cabs."
        />
        <meta
          name="keywords"
          content="Araku tour packages, Araku Valley tourism, Borra Caves tour, Katiki Waterfalls, Araku coffee plantations, Tribal Museum Araku, Andhra Pradesh tourism, Vizag to Araku tour, Nature tours Araku, Araku cabs, Araku car rentals, Family vacation Araku, Araku resorts, Araku Valley hotels, Adventure tourism Araku, Eco-tourism Araku, Homestays Araku, Budget travel Araku, Luxury tours Araku Valley, Honeymoon Araku Valley, Best places to visit Araku, Araku sightseeing, Araku weather, Weekend getaways Andhra Pradesh"
        />
        <link rel="canonical" href="https://www.arakutravels.com/" />
      </Head>
      <div>
        <Navbar />
        <ImagesSliderDemo />
        <AnimatedTestimonialsDemo />
        <InfiniteMovingCardsDemo />
        <TourPlans />
        <AnimatedPinDemo />
        <AccordionLast />
        <AboutArakuTravels />
        <Footer4Col />
      </div>
    </>
  );
}
