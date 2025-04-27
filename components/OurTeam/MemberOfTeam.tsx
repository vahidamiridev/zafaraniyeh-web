import Image from "next/image"


type Member = {
  id: number;
  name: string;
  src: string;
  role: string;
};

type MemberProps = {
  member: Member;
};

const MemberOfTeam = ({ member }: MemberProps) => {
        return (

            <li>
            <div className="flex items-center gap-x-6">
              <Image className="size-16 rounded-full" width={100} height={100} src={member.src} alt=""/>
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight ">{member.name}</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">{member.role}</p>
              </div>
            </div>
          </li>
        )
}

export default MemberOfTeam