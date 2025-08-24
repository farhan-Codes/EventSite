import {Field,Button} from "./Tools"

export default function Querybox(){
    return (
        <form action="#" className="lg:self-end lg:absolute lg:top-[30%] 2xl:right-[5%] mt-[25px]">
            <div className="flex flex-col justify-center items-center gap-3">
                <Field For="Query" name="query"/>
                <Field For="Email" name="email"/>
                <Button>Submit</Button>
            </div>
        </form>
    )
}