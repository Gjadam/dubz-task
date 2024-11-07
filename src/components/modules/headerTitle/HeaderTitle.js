
export default function HeaderTitle({ title, text, phone }) {
    return (
        <div className=" flex flex-col gap-3">
            <p className=" text-8 font-poppins font-bold capitalize">{title}</p>
            <div>
                <p className=" inline text-zinc-600 capitalize">{text} </p>
                {
                    phone && <span className=" text-black">+98 {phone}</span>
                }
            </div>
        </div>
    )
}
