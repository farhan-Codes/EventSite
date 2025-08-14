import { useState, useRef, useEffect} from "react"
import styles from "@/styles/system.module.css"
import { useContext } from "react"
import { InfoContext } from "@/public/conext"
export function Button({children,onSmash}){
    return (
    <button className={styles.button} onClick={onSmash}>
        {children}
    </button>
    )
}

export function Field({For,className,name}){
    function handleInput(e){
        setEntry(e.currentTarget.value)
    }

    const [Entry,setEntry] = useState("")
    return(
            <input type="text" placeholder={For} name={name} className={className} value={Entry} onChange={(e)=>handleInput(e)} required/>
    )
}


export function SystemPopup({message}) {
  const {setInfo} = useContext(InfoContext)
  const popupRef = useRef(null);

  useEffect(() => {
    const popup = popupRef.current;

    const timer = setTimeout(() => {
      if (popup) {
        popup.style.opacity = "1";
        popup.style.animation = `${styles.systemPopupVertical} 0.6s ease-out forwards`;
      }
    }, 600);

    const timer2 = setTimeout(()=>{setInfo({message:'',show:false})},5000)

    return () =>{
        clearTimeout(timer)
        clearTimeout(timer2)
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={popupRef} className={styles.popup}>
        <p className={styles.glitchText}>{message}</p>
      </div>
    </div>
  );
}