'use client'
import Button from "@/components/modules/button/Button";
import OtpInput from "@/components/modules/formInputs/otpInput/OtpInput";
import HeaderTitle from "@/components/modules/headerTitle/HeaderTitle";
import { useFormik } from "formik";
import { useState } from "react";

export default function Sms({ phone }) {

    const [otp, setOtp] = useState(new Array(5).fill(""))

    const validate = values => {
        const errors = {};
        if(otp.join("") !== "12345") {
            errors.code = "Wrong code, please try again";
        }
        return errors
    }

    const form = useFormik({
        initialValues: {
            code: ""
        },
        validate,
    })


    return (
        <form className=' h-full flex flex-col justify-between' onSubmit={form.handleSubmit}>
            <div className="flex flex-col gap-10" >
                <HeaderTitle title="enter code" text={`We’ve sent an SMS with an activation code to your phone +98 ${phone}`} />
                <OtpInput otp={otp} setOtp={setOtp} error={form.errors.code} value={form.values.code} onChange={form.handleChange} onBlur={form.handleBlur} />
            </div>
            <div className=" flex flex-col gap-5">
                <div className=" flex justify-center items-center gap-2 text-zinc-600">
                    <div className=" font-semibold ">Send code again</div>
                    <span>00:20</span>
                </div>
                <Button isSubmitType={true} text="Continue" isFullWidth={true} />
            </div>
        </form>
    )
}
