export type Feilds = {
    id:string;
    name:string;
    seasons:string[];
}


export  type Course = {
  id: string;
  title: string;
  src: string;
  icon:string;
  discription: string;
  fields:Feilds;
};
