import Image from "next/image";

// Components
import Button from "@/components/modules/button/Button";
import HeaderTitle from "@/components/modules/headerTitle/HeaderTitle";

export default function Home() {
  return (

    <div data-aos="fade" className=" flex justify-between items-center flex-col gap-5  h-120 w-full md:w-120 text-center">
      <Image
        alt="stars"
        src='/images/png/stars.png'
        width={315.61}
        height={273.42}
        className=""
      />
      <HeaderTitle title="Explore the app" text="Now your finances are in one place and always under control" />
      <div className=" flex gap-3 flex-col md:flex-row w-full md:w-auto">
        <Button text={"log in"} route="/login" />
        <Button type='outline' text={"create account"} />
      </div>
    </div>
  );
}
