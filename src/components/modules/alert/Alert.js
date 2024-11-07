import Image from 'next/image'

export default function Alert() {
    return (
        <div className=' flex justify-between items-center gap-5 p-4 rounded-xl bg-zinc-900 '>
            <Image
                alt='success-icon'
                src='/images/png/success.png'
                width={24}
                height={24}
            />
            <p className='text-white font-bold'>Logged in successfully</p>
        </div>
    )
}