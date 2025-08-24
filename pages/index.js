import {Button,SystemPopup} from "@/components/Tools";
import Clock from "@/components/Clock";
import Navpanel from "@/components/Navpanel";
import Wrapper from "@/components/Tabs";
import Detailsbox from "@/components/DetailsBox";
import Querybox from "@/components/QueryBox";
import RegisterForm from "@/components/Registerform";
import { useContext,useEffect} from "react";
import { ShowContext,InfoContext } from "@/conext";

export default function Home() {
  const {showRegister , setshowRegister} = useContext(ShowContext);
  const {Info,setInfo} = useContext(InfoContext);
  if (showRegister == true){
    return <RegisterForm />
  }
  return (
  <> 
    <header> 
      <section id="homeSlide" className="flex justify-center items-center flex-col">
        {Info.show && <SystemPopup message={Info.message} />}
        <span className="w-[400px] text-center uppercase">
          InterCollege 
          Competition 
          2K25
        </span>
        <Button onSmash={()=>{setshowRegister(true)}}>Register Now</Button>
        <Clock />
        <Navpanel></Navpanel>
      </section>
    </header>
    <main>
      <section id="aboutSlide" className="sm:px-[70px]">
        <div className="mt-5 underline"><span className="material-symbols-outlined">info</span>About</div>
        <div className="flex flex-col-reverse items-center my-10 md:my-15 md:flex-row sm:justify-center md:justify-evenly">
        <div className="text-[18px] text-center md:text-[22px] md:w-[60%] 2xl:text-[28px] 2xl:w-[50%] 2xl:pl-[10px] 2xl:text-left"> 
          <i>"Every Hunter Starts Somewhere. This Is Your Gateway To Unlock Unseen Potential And Face Challenges That Test Your Limits."</i>
          <br />
          <br />
          <p>
            <b>
            InterCollege Competition 2025 isn't Just An Event Its A Battleground For skills, Creativity And Intellect Across Domains.
            From Coding Quests To Creative Challenges,
            Every Round Will Bring You Closer To Becoming The Ultimate Champion.

            Ready To Step Into Arena?
            </b>
          </p>
          <Button>Download Brochure</Button>
        </div>
        <div className="flex justify-center items-center w-[50%] my-4 2xl:my-0">
          {/* Logo Goes Here */}
          <img className=" w-[auto] h-[auto] 2xl:w-[50%] 2xl:h-[50%]" src="/vercel.svg" alt="" />
        </div>
        </div>
      </section>
      <section id="eventSlide" className="sm:px-[70px]">
        <div className="mt-5 mx-auto sm:m-[auto] underline"><span className="material-symbols-outlined">shield</span>Events</div>
        <Wrapper></Wrapper>
      </section>
    </main>
    <footer>
      <section id="contactSlide" className="sm:px-[70px]">
        <div className="mx-[auto] mt-5 underline"><span className="material-symbols-outlined">phone</span>Contact</div>
        <div className="flex flex-col items-center sm:flex-row">
        <Detailsbox />
        {/* <Querybox /> */}
        </div>
      </section>
    </footer>
  </>
);
}
