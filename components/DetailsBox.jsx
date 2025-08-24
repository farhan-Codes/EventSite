import Querybox from "./QueryBox";

export default function Detailsbox(){
    return (
        <div className="flex flex-col shrink-0 items-center sm:items-start w-[100vw] relative 2xl:pl-[30px]">
          <p className="w-[300px] text-[25px] text-center my-[20px] lg:w-[600px] lg:text-[50px] lg:mb-[60px] lg:text-left">Having Queries? Feel Free To Contact Us</p>
          <Querybox />
         <ul className="verticalList list-none">
          <li>
            <span className="material-symbols-outlined">phone</span> 9148533393
          </li>
          <li>
            <span className="material-symbols-outlined">mail</span> sfgc@baingan.com
          </li>
          <li>
            <a href="https://maps.app.goo.gl/ejbrRMb8yU96hJa46" target="_blank"><span className="material-symbols-outlined">location_on</span> Seshadripuam First Grade College, Yelahanka New Town, Bengaluru, Karnataka 560064</a>
          </li>
          <li>
          <ul className="horizontalList list-none flex gap-10 mx-[30px] sm:my-[60px]">
            <a href=""><img src="/Logos/insta.png" alt="" /></a>
            <a href=""><img src="/Logos/fb.png" alt="" /></a>
            <a href=""><img src="/Logos/yt.png" alt="" /></a>
          </ul>
          </li>
          </ul>
        </div>
    )
}