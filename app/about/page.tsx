import AboutSectionOne from "@/components/About/AboutSectionOne";


import { Metadata } from "next";

export const metadata:Metadata = {
  title: "درباره ما | آکادمی زعفرانیه",
  description: "آشنایی با آکادمی زعفرانیه، مسیر ما در آموزش تخصصی و حرفه‌ای برای موفقیت شما.",
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
