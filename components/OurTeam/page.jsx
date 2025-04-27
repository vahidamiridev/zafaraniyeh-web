import membersInfo from "@/data/membersInfo"
import Image from "next/image"
import MemberOfTeam from "./MemberOfTeam"

const OurTeam = () => {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800 dark:border-b">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty  sm:text-4xl">اعضاء تیم زعفرانیه :  </h2>
            <p className="mt-6 text-lg/8 text-gray-600">تیم ما از افرادی با استعداد، پرانرژی و متعهد تشکیل شده است که با دانش تخصصی و همکاری بی‌وقفه، مسیر رشد و موفقیت را هموار می‌کنند. هر یک از اعضای ما با عشق به کار و روحیه تیمی، ارزش‌های مشترک ما را زنده نگه می‌دارند.</p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {
                membersInfo.map((member)=><MemberOfTeam key={member.id} member={member}/>)
            }
          </ul>
        </div>
      </div>
      
    )
}

export default OurTeam