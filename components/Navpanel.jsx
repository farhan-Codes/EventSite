import style from "../styles/Navpanel.module.css"

export default function Navpanel(){
    return (
        <div className={style.wrapper}>
            <a className={style.box} href="#aboutSlide">
                <span className="material-symbols-outlined block">info</span>
                <span className={style.heading}>About</span>
                <p className={style.desc}>Know More About The Competition Here.</p>
            </a>
            <a className={style.box} href="#eventSlide">
                <span className="material-symbols-outlined block">shield</span>
                <span className={style.heading}>Events</span>
                <p className={style.desc}>Explore and Know More About The Events Here.</p>
            </a>
            <a className={style.box} href="#contactSlide">
                <span className="material-symbols-outlined block">call</span>
                <span className={style.heading}>Contact</span>
                <p className={style.desc}>Having Queries? Feel Free To Contact Us.</p>
            </a>
        </div>
    )
}