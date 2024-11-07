export default function OtpForm({ otp, setOtp, error }) {


    function otpOnchange(e, index) {
        if (isNaN(e.target.value)) return false
        setOtp([...otp.map((data, indx) => (indx === index ? e.target.value : data))])

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
    }

    function otpBackSpace(e) {
        if (e.key === "Backspace") {
            let previousInput = e.target.previousSibling
            if (previousInput) {
                previousInput.focus()
            }
        }
    }

    return (
        <div className=" flex flex-col gap-5">
            <div className=" flex justify-between w-full items-center gap-5">
                {
                    otp.map((data, i) => (
                        <input
                            type="text"
                            value={data}
                            maxLength={1}
                            className={` outline-none border  ${error ? 'border-red-500' : "border-primary"}  rounded-2xl  focus:border-black  transition-all duration-300 w-12 h-14  sm:w-16 sm:h-[4.5rem]  text-3xl text-center`}
                            onChange={(e) => otpOnchange(e, i)}
                            onKeyUp={otpBackSpace}
                        />
                    ))
                }
            </div>
            {
                error ? (
                    <p className=" text-center text-red-500">{error}</p>
                ) : null
            }
        </div>
    )
}
