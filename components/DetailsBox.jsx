export default function Detailsbox(){
    return (
        <div className="px-[70px]">
          <p className="w-[600px] text-[50px] mb-[60px]">Having Queries? Feel Free To Contact Us</p>
          <ul className="verticalList list-none">
          <li>
            <span className="material-symbols-outlined block relative">phone</span> 9148533393
          </li>
          <li>
            <span className="material-symbols-outlined block relative ">mail</span> sfgc@baingan.com
          </li>
          <li>
            <a href="https://maps.app.goo.gl/ejbrRMb8yU96hJa46" target="_blank"><span class="material-symbols-outlined">location_on</span> Seshadripuam First Grade College, Yelahanka New Town, Bengaluru, Karnataka 560064</a>
          </li>
          </ul>
          <ul className="horizontalList list-none flex gap-10 mx-[30px] my-[60px]">
            <a href=""><img src="/Logos/insta.png" alt="" /></a>
            <a href=""><img src="/Logos/fb.png" alt="" /></a>
            <a href=""><img src="/Logos/yt.png" alt="" /></a>
          </ul>
        </div>
    )
}