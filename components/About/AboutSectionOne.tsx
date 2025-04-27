import Image from "next/image";
import OurTeam from '@/components/OurTeam/page'
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
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
                paragraph="اکادمی زعفرانیه از سال 1397 فعالیت خود را در حوزه آموزش شروع کرد. این آموزشگاه زیر نظر مجموعه سازمان فنی و حرفه ایی کشور می باشد و در شاخه های مختلفی مانند زبان های خارجه از جمله انگلیسی وآلمانی، علوم کامپیوتر و برنامه نویسی ، و هنر های تجسمی در تمامی رشته ها و همچنین نرم افزار های تخصصی از جمله طراحی لباس و نقشه کشی و ... ، شاخه طراحی لباس و طراحی دوخت و رشته های فراوان دیگر فعالیت دارد

خاص خود هستند و نکته مهم ، شناسایی این استعداد ها و شکوفا کردن آنها است و این موضوع نیاز به آموزش دارد.از طرفی آموزش باید به نحوی باشد که فرد با خیال این آکادمی اعتقاد قلبی دارد که همگی افراد صاحب استعداد راحت با آن همراه شود و مطمئن باشد مسیر و دوره آموزشی و اساتید مربوطه همان مسیر درست و مستقیمی است که او را هر چه سریع تر و با آرامش به مقصد مورد نظر می رساند."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="اساتید مجرب و حرفه" />
                    <List text="آموزش خلاقانه" />
                    <List text="رشته های جدید و متنوع" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="همیشه در دسترس" />
                    <List text="رتبه برتر در آزمون ها و مسابقات" />
                    <List text="جشنواره و کارگاه های آموزشی" />
                  </div>
                </div>
              </div>
            </div>

            <OurTeam/>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
