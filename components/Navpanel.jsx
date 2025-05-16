import style from "../styles/Navpanel.module.css"

export default function Navpanel(){
    return (
        <div className={style.wrapper}>
            <div className={style.box}>
                <span className="material-symbols-outlined block">info</span>
                <span className={style.heading}>About</span>
                <p className={style.desc}>Know More About The Competition Here.</p>
            </div>
            <div className={style.box}>
                <span class="material-symbols-outlined block">shield</span>
                <span className={style.heading}>Events</span>
                <p className={style.desc}>Explore and Know More About The Events Here.</p>
            </div>
            <div className={style.box}>
                <span class="material-symbols-outlined block">shield</span>
                <span className={style.heading}>Contact</span>
                <p className={style.desc}>Having Queries? Feel Free To Contact Us.</p>
            </div>
        </div>
    )
}