
import contactInfo from "@/data/contactInfo";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ContactSection = () => {

  const List = ({ contactInfo }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mx-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {contactInfo.icon}
      </span>
      {contactInfo.discription}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          <div className="w-full flex flex-col items-center justify-center  gap-2 ">

            <div className=" w-full">
              <SectionTitle
                title="آکادمی بزرگ زعفرانیه"
                paragraph="ما همیشه آماده‌ایم تا به سوالات و نیازهای شما پاسخ دهیم. اگر سوالی دارید، یا به کمک نیاز دارید، لطفاً از طریق فرم زیر با ما تماس بگیرید. تیم پشتیبانی ما به سرعت به درخواست‌های شما پاسخ خواهد داد.

در صورتی که به مشاوره، اطلاعات بیشتر در مورد خدمات یا هر نوع درخواست دیگر نیاز دارید، می‌توانید با استفاده از راه‌های ارتباطی زیر با ما در ارتباط باشید:"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12  lg:mb-0"
                data-wow-delay=".15s"
              >
  
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {
                      contactInfo.map((c) => (
                        <List key={c.id} contactInfo={c} />
                      ))
                    }
                  </div>

           
              </div>
            </div>


            نقشه :

            <div className="relative w-[100%] overflow-hidden rounded-lg pb-[56.25%] shadow-md mt-10 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.8156791399265!2d51.55287543050374!3d32.86476773776982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdc506620094c3%3A0x4f2ef36fbd58aaa5!2sIsfahan%20Province%2C%20Shahin%20Shahr%2C%20Beheshti%2C%20VH83%2B24P%2C%20Iran!5e0!3m2!1sen!2sus!4v1744880461917!5m2!1sen!2sus"
                className="absolute left-0 top-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
