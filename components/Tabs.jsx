import data  from "@/components/Data"
import { useRouter } from "next/router"
// import {useRef, useEffect} from "react"

export function Tab({image,children,amt,id}){
    const router = useRouter();
    const styles = {
        backgroundImage:`url(${image}),linear-gradient(black)`,
    }


    return (
        <div style={styles} className='tabs' onClick={()=>{
            router.push(`/register/${data[id].title}`)
        }}>
            <span className="bg-black">{children}</span>
            {/* <ul className="text-[15px] my-10" style={{'display':'none'}}>
                <li>Number of Players: 2</li>
                <li>Day 1</li>
                <li>Players should bring there own laptop</li>
                <li>Entry Fee: {amt}</li>
            </ul> //Rules */}
        </div>
    )
}


export default function Wrapper(){
    // let wrapper = useRef(null)
    let content = data.map((currentData,index)=>{
        return <Tab key={currentData.id} image={currentData.image} amt={currentData.amt} id={index}>{currentData.title}</Tab>
    })
    {/* 
    useEffect(() => { // Use For showing Rules in Future
        const tabs = wrapper.current.querySelectorAll('.tabs');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Snap changed to:', entry.target.lastChild);
          entry.target.lastChild.style.display= 'block';
        }
        else{
            entry.target.lastChild.style.display= 'none';
        }
      });
    },
    {
      root: wrapper.current,
      threshold: 0.8, // Adjust as needed
    }
  );
  tabs.forEach(tab => observer.observe(tab));
  }, []);
  return () => observer.disconnect();
  use: ref={wrapper} at below line
*/}

    return (
        <div className="wrapper mb-10">
            {content}
        </div>
    )
}