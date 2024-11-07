'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import Alert from "@/components/modules/alert/Alert";
import Button from "@/components/modules/button/Button";
import OtpInput from "@/components/modules/formInputs/otpInput/OtpInput";
import HeaderTitle from "@/components/modules/headerTitle/HeaderTitle";

// Form validation
import { useFormik } from "formik";

export default function Sms({ phone }) {

    const [otp, setOtp] = useState(new Array(5).fill(""))
    const [openAlertBox, setOpenAlertBox] = useState(false)
    const [counter, setCounter] = useState(20)
    const router = useRouter()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCount => {
                if (prevCount <= 1) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const validate = () => {
        const errors = {};
        if (otp.join("") !== "12345") {
            errors.code = "Wrong code, please try again";
        }
        return errors
    }

    const form = useFormik({
        initialValues: {
            code: ""
        },
        validate,
        onSubmit: () => {
            setOpenAlertBox(true)
            setTimeout(() => {
                setOpenAlertBox(false)
                router.replace('/')
            }, 3000);
            setOtp(new Array(5).fill(""))
        }
    })


    return (
        <>
            <form data-aos="fade" className=' h-full flex flex-col justify-between' onSubmit={form.handleSubmit}>
                <div className="flex flex-col gap-10" >
                    <HeaderTitle title="enter code" text={`We’ve sent an SMS with an activation code to your phone`} phone={phone} />
                    <OtpInput otp={otp} setOtp={setOtp} error={form.errors.code} value={form.values.code} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>
                <div className=" flex flex-col gap-5">
                    <div className=" flex justify-center items-center gap-2 text-zinc-600">
                        <div className=" font-semibold cursor-pointer">Send code again</div>
                        <span>00:{counter < 10 ? `0${counter}` : counter}</span>
                    </div>
                    <Button isSubmitType={true} text="Continue" isFullWidth={true} />
                </div>
            </form>
            <div className={`fixed left-0 md:left-8 top-8 md:top-auto md:bottom-8 w-full md:w-auto ${openAlertBox ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
                <Alert />
            </div>
        </>
    )
}
