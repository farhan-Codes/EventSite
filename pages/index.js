import {Button} from "@/components/Tools";
import Clock from "@/components/Clock";
import Navpanel from "@/components/Navpanel";
import Wrapper from "@/components/Tabs";
import Detailsbox from "@/components/DetailsBox";
import Querybox from "@/components/QueryBox";
import RegisterForm from "@/components/Registerform";
import { useState } from "react";

export default function Home() {
  let [showRegister,setshowRegister] = useState(false);
  if (showRegister == true){
    return <RegisterForm />
  }
  return (
  <>  
    <header>
      <section id="homeSlide" className="flex justify-center items-center flex-col">
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
      <section id="aboutSlide" className="px-[70px]">
        <div className="m-[auto] underline"><span className="material-symbols-outlined block relative bottom-1 right-1">info</span>About</div>
        <div className="flex flex-row justify-between">
        <div className="w-[50%] text-[32px] pl-[10px]"> 
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
        <div className="flex justify-center items-center w-[50%]">
          {/* Logo Goes Here */}
          <img className="w-[50%] h-[50%]" src="/vercel.svg" alt="" />
        </div>
        </div>
      </section>
      <section id="eventSlide" className="px-[70px]">
        <div className="m-[auto] underline"><span className="material-symbols-outlined block relative bottom-1 right-1">shield</span>Events</div>
        <Wrapper></Wrapper>
      </section>
    </main>
    <footer>
      <section id="contactSlide">
        <div className="m-[auto] underline my-[40px]"><span className="material-symbols-outlined block relative bottom-1 right-1">phone</span>Contact</div>
        <div className="flex">
        <Detailsbox />
        <Querybox />
        </div>
      </section>
    </footer>
  </>
);
}
