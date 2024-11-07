export default function FormInput({ name, error, value, onChange, onBlur }) {

    return (
        <>
            <div className={` flex  items-center w-full border-b ${error ? "border-red-500" : "border-primary"}`}>
                <span className=" border-r my-3 pr-3">+98</span>
                <input type="number" name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder="000 000 0000" className=" w-full px-2 text-zinc-500 placeholder:text-zinc-500 outline-none" />
            </div>
            {
                error ? (
                    <p className=" text-center text-red-500">{error}</p>
                ) : null
            }
        </>
    )
}
