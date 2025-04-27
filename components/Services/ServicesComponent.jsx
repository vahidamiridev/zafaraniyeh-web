
import coursesData from '../../data/courses.json'
import SectionTitle from '../Common/SectionTitle'
import SingleServices from './SingleServices'



const ServicesComponent = ()=>{

    return (

        <section className="pb-[120px] pt-[120px]">
          
        <div className="container">
               <SectionTitle
                      title=" دوره هایی که ما ارائه می دهیم"
                      paragraph="در صورت ثبت نام همزمان در دوره های مختلف شما امتیاز دانشجوی فعال را گرفته و از تخفیفات ویژه بهرمند خواهید شد. جهت ثبت نام در دوره ها و دریافت مشاور رایگان با ما تماس بگیرید."
                      center
                    />
          <div className="-mx-4 flex flex-wrap justify-center md:justify-start">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="w-full px-4  lg:w-1/2 xl:w-1/3"
              >
                <SingleServices course={course} />
              </div>
            ))}
          </div>

        </div>
      </section>
    )

}

export default ServicesComponent