'use client'
import Button from '@/components/modules/button/Button'
import PhoneInput from '@/components/modules/formInputs/phoneInput/PhoneInput'
import HeaderTitle from '@/components/modules/headerTitle/HeaderTitle'
import SyncContacts from '@/components/modules/syncContacts/SyncContacts'
import Sms from '@/components/modules/templates/login/sms/Sms'
import { validatePhone } from '../../../../utils/auth'
import { useFormik } from 'formik'
import { useState } from 'react'

export default function Login() {

    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)

    const validate = values => {
        const errors = {};
        if (!values.phone) {
            errors.phone = "This field is required";
        } else if (!validatePhone(values.phone)) {
            errors.phone = "Please enter a valid phone number";
        }
        return errors
    }

    const form = useFormik({
        initialValues: {
            phone: ""
        },
        validate,
        onSubmit: (value) => {
            setIsLoginWithOtp(true)
        }
    })



    return (
        !isLoginWithOtp ? (

            <form className=' h-full flex flex-col justify-between' onSubmit={form.handleSubmit}>
                <div className="flex flex-col gap-5">
                    <HeaderTitle title="log in" text="please confirm your country code and enter your phone number." />
                    <PhoneInput name="phone" error={form.errors.phone} value={form.values.phone} onChange={form.handleChange} onBlur={form.handleBlur}/>
                </div>
                <div className=" flex flex-col gap-5">
                    <SyncContacts />
                    <Button text="Continue" isSubmitType={true} isFullWidth={true} />
                </div>
            </form>

        ) : (
            <Sms phone={form.values.phone} />
        )
    )
}
