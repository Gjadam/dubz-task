
export default function SyncContacts() {
    return (
        <label className="flex justify-between items-center cursor-pointer">
            <span className="">Sync Contacts</span>
            <input type="checkbox" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-100  outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 transition-all duration-300  peer-checked:bg-black"></div>
        </label>
    )
}
