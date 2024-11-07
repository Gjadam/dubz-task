import Navbar from "@/components/modules/navabar/Navbar";

export default function layout({children}) {
  return (
    <div className=' w-full sm:w-120 h-120 flex justify-between flex-col gap-14'>
        <Navbar/>
        {children}
    </div>
  )
}
