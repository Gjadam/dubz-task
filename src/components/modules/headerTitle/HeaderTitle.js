
export default function HeaderTitle({ title, text }) {
    return (
        <div className=" flex flex-col gap-3">
            <h1 className=" text-8 font-poppins font-bold capitalize">{title}</h1>
            <h2 className=" text-zinc-600 capitalize">{text}</h2>
        </div>
    )
}
