"use client"
import Coursedetailsection from "@/components/coursedetailsection";
import Coursesection from "@/components/coursesection";
import Expertsreviewsection from "@/components/expertsreviewsection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mainsection from "@/components/mainsection";
import Studentreview from "@/components/studentreview";
import Yourteacher from "@/components/yourteacher";
export default function Home() {
  const themeColor="#5d0909";
  return (
    <>
        <Header themeColor={themeColor}/>
        <Mainsection themeColor={themeColor}/>
        <Coursesection themeColor={themeColor}/>
        <Expertsreviewsection themeColor={themeColor}/>
        <Coursedetailsection themeColor={themeColor}/>
        <Studentreview themeColor={themeColor}/>
        <Yourteacher themeColor={themeColor}/>
        <Footer themeColor={themeColor} />

    </>
  );
}
