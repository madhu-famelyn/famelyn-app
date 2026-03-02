import React from "react";

import Header from "./Header/Header";
import HeroSection from "./Hero/Hero";
import BooksSection from "./Books/Books";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Courses from "../pages/Courses/Courses";
import CommunitySection from "./CommunitySection/CommunitySection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import Footer from "../LandingPage/Footer/Footer";


const Components = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BooksSection />
      <UpcomingEvents />
      <Courses />
      <CommunitySection/>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
};

export default Components;