import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import HighMoter from "./components/HighMoter";
import MultipleAcc from "./components/MultipleAcc"
import Gallery from "./Gallery/page";
import Colors from "./components/Colors"
export default function Home() {
  return (
   <>
   
   <Hero/>
   <ProductInfo/>
   <HighMoter/>
   <MultipleAcc/>
   <Gallery/>
   <Colors/>
   </>
  );
}
