"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mainsection from "@/components/mainsection";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [themeColor,setThemeColor]=useState("#5d0909");
  return (
    <>
        <Header themeColor={themeColor}/>
        <Mainsection themeColor={themeColor}/>
        <Footer themeColor={themeColor} />
    </>
  );
}
