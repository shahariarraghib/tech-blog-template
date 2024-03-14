"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import Banner from "./components/Banner";
import Navbar from "./shareComponents/Navbar";
import Footer from "./shareComponents/Footer";
import TrandingBlog from "./components/TrandingBlog";
import TrandingNews from "./components/TrandingNews";
import Contract from "./components/Contract";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div className="progressbar" style={{ scaleX }} />
      <Navbar></Navbar>
      <Banner></Banner>
      <TrandingBlog></TrandingBlog>
      <TrandingNews></TrandingNews>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}
