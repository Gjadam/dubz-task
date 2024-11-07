import Link from "next/link"

export default function Button({ type, text, route, isFullWidth, onClick, isSubmitType }) {

    switch (type) {
        case "outline":
            return (
                route ? (
                    <Link href={route}>
                        <button type={isSubmitType && 'submit'} className={` py-4 ${isFullWidth ? " w-full " : "w-full md:w-72"}  hover:shadow-xl border border-[#747474] text-black bg-inherit  font-semibold rounded-2.5 transition-shadow duration-300 capitalize`} onClick={onClick}>{text}</button>
                    </Link>
                ) : (
                    <button type={isSubmitType && 'submit'} className={` py-4 ${isFullWidth ? " w-full " : "w-full md:w-72"} hover:shadow-xl  border border-[#747474] text-black bg-inherit  font-semibold rounded-2.5 transition-shadow duration-300 capitalize`} onClick={onClick}>{text}</button>
                )
            )
        default:
            return (
                route ? (
                    <Link href={route ? route : ""}>
                        <button type={isSubmitType && 'submit'} className={` py-4 ${isFullWidth ? " w-full " : "w-full md:w-72"}  bg-black hover:shadow-xl text-white  font-semibold rounded-2.5 transition-shadow duration-300 capitalize`} onClick={onClick}>{text}</button>
                    </Link>
                ) : (
                    <button type={isSubmitType && 'submit'} className={` py-4 ${isFullWidth ? " w-full " : "w-full md:w-72"}  bg-black hover:shadow-xl text-white  font-semibold rounded-2.5 transition-shadow duration-300 capitalize`} onClick={onClick}>{text}</button>
                )
            )
    }
}
