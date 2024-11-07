'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter()

    const navigateBack = () => {
        router.back()
    }

  return (
    <div className=" flex justify-between items-center">
        <button className=" border border-primary hover:border-zinc-500 py-3 px-4 rounded-2.5 transition-colors" onClick={navigateBack}>
        <Image
        alt="arrow"
        src='/images/svg/arrow-left.svg'
        width={9}
        height={15}
        />
        </button>
        <Image
        alt="star"
        src='/images/png/star.png'
        width={46}
        height={44}
        />
    </div>
  )
}
