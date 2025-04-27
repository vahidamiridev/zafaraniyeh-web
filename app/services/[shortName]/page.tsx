import Accordion from "@/components/Accordion/page";
import courses from "@/data/courses.json";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = false;


export async function generateStaticParams() {
  return courses.map((course) => ({
    shortName: course.id,
  }));
}
export async function generateMetadata({ params }) {
  const course = courses.find((c) => c.id === params.shortName);
  if (!course) {
    notFound();    
  }
  return {
    title: `${course.title} | آکادمی زعفرانیه`,
    description : course.description,
  };
}

export default async function SinglePageDetails({ params }) {
  const course = courses.find((c) => c.id === params.shortName);

  if (!course) {
    notFound();    
  }
  return (
    <div className="mx-auto mt-20 flex w-[90%] max-w-[1024px] flex-col items-center justify-center gap-10 px-4 py-10">
      <div>
        <Image src={course.src} width={500} height={500} alt="Course Image" />
      </div>
      <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
      <p className="mb-6 text-gray-600">{course.description}</p>
      <h2 className="mb-4 mt-10 text-2xl font-bold">سوالات متداول</h2>
      <Accordion fields={course.fields} />
    </div>
  );
}
