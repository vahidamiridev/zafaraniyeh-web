// import Breadcrumb from "@/components/Common/Breadcrumb";
// import Contact from "@/components/Contact";

import ContactSection from "@/components/Contact/ContactSection";

import { Metadata } from "next";

export const metadata:Metadata = {
  title: "تماس با ما | آکادمی زعفرانیه",
  description: "برای مشاوره، ثبت‌نام و دریافت اطلاعات بیشتر درباره دوره‌های آموزشی آکادمی زعفرانیه با ما در تماس باشید.",
};
const ContactPage = () => {
  return (
    <>
        <ContactSection />
    </>
  );
};

export default ContactPage;
