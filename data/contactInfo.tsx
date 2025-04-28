 const contactInfo = [
    {
      id: 1,
      title: "آدرس",
      discription: "شاهین شهر - خ مخابرات - ۴ غربی - پ ۳",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
      ),
    },
    {
      id: 2,
      title: "ساعت کار",
      discription: "صبح ۸-۱۳ و بعدازظهر ۱۵-۲۱",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      ),
    },
    {
        id: 3,
        title: "تماس",
        discription: "031-45367544",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 5.5l4.5-2 2 5.5-3 2c.5 1.5 1.5 3.5 3 5s3.5 2.5 5 3l2-3 5.5 2-2 4.5c-3.5.5-7.5-1-10.5-4S2 9 2.5 5.5z" />
          </svg>
        ),
      },
    {
      id: 4,
      title: "اینستاگرام",
      discription: "zafaraniyehtvto",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="size-6">
          <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM348.71,161.71a54,54,0,1,0,54,54A54,54,0,0,0,348.71,161.71ZM224,277.34A21.34,21.34,0,1,1,245.34,256,21.34,21.34,0,0,1,224,277.34ZM348.71,236.34a21.34,21.34,0,1,1,21.34-21.34A21.34,21.34,0,0,1,348.71,236.34ZM398.8,80A48,48,0,0,0,352,32H96A48,48,0,0,0,48,80V432a48,48,0,0,0,48,48H352a48,48,0,0,0,48-48ZM224,338.66A82.66,82.66,0,1,1,306.66,256,82.77,82.77,0,0,1,224,338.66ZM368,152a24,24,0,1,1-24-24A24,24,0,0,1,368,152Z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "واتساپ",
      discription: "zafaraniyehtvto",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="size-6">
          <path d="M380.9 97.1C339-10.7 194.8-35.2 106.3 49.9 36.3 114.7 24.8 214.8 76.8 288L32 464l179.3-46.7c70.6 23.5 152.7 5.8 211.6-52.8 86.5-86.5 86.5-227.3 0-313.4zm-59.6 263c-27.4 27.4-65.6 42.5-105.3 42.5-22.3 0-44.2-4.8-64.6-13.9l-9.3-4.3-112 29.1 29.9-109.2-6-9.6c-16.4-26-25-55.8-25-86.3 0-90.8 73.9-164.7 164.7-164.7 44 0 85.4 17.1 116.5 48.1s48.1 72.5 48.1 116.5c.1 39.7-15.1 77.9-42.5 105.3zM299.2 273.8c-5.6-2.8-33-16.2-38.1-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18-17.7 21.7-3.3 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.5-8.7-44.7-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.3 2.6-2.6 5.6-6.5 8.4-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.2-17.1-41.5-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.5 19-19.5 46.2 0 27.2 20 53.5 22.8 57.2 2.8 3.7 39.4 60.2 95.5 84.4 13.4 5.8 23.8 9.3 32 11.9 13.5 4.3 25.8 3.7 35.5 2.2 10.8-1.6 33-13.5 37.6-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.3-5.1-3.7-10.7-6.5z" />
        </svg>
      ),
    },
    {
        id: 6,
        title: "ایمیل",
        discription: "info@zafaraniyehtvto.ir",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5Zm-9.75 6L3.51 6.63m16.98 0L12 13.5" />
          </svg>
        ),
      }
  ];
  export default contactInfo ;