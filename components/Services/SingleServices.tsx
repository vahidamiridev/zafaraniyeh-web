import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

const SingleServices = ({ course }: { course: Course }) => {
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={course.route}
          className="relative block aspect-[37/22] w-full"
        >
  
          <Image src={course.src} alt="image"   width={1024} height={1024} />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={course.route}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {course.title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {course.title}
          </p>
          <div className="flex items-center">
   
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                (حضوری و آنلاین)
              </h4>
              {/* <p className="text-xs text-body-color">??</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServices;
