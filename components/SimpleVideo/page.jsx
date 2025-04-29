"use client";

import SectionTitle from "../Common/SectionTitle";

const SimpleVideo = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="تماشای ویدیو معرفی"
          paragraph="آشنایی سریع با آکادمی زعفرانیه و دوره‌های آموزشی ما"
          center
          mb="12"
        />

        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mx-auto max-w-4xl">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/images/video/video.jpg"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      </div>
    </section>
  );
};

export default SimpleVideo;
