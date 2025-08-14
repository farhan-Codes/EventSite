import {Field,Button} from "./Tools"

export default function Querybox(){
    return (
        <form action="#" className="my-[150px]">
            <div className="flex flex-col justify-center items-center gap-3">
                <Field For="Query" name="query"/>
                <Field For="Email" name="email"/>
                <Button>Submit</Button>
            </div>
        </form>
    )
}