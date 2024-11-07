
// Format to three digit groups 
import { formatNumberWithSpaces } from '../../../../../utils/auth';

export default function FormInput({ name, error, value, onChange, onBlur }) {  

    const handleChange = (e) => {  
        const formattedValue = formatNumberWithSpaces(e.target.value);  
        onChange({  
            target: {  
                name,  
                value: formattedValue,  
            },  
        });  
    };  

    return (  
        <>  
            <div className={`flex items-center w-full border-b ${error ? "border-red-500" : "border-primary"}`}>  
                <span className="border-r my-3 pr-3">+98</span>  
                <input  
                    type="text" // تغییر نوع به text برای فرمت مناسب  
                    name={name}  
                    value={value}  
                    onChange={handleChange}  
                    onBlur={onBlur}  
                    placeholder="000 000 0000"  
                    className="w-full px-2 text-zinc-500 placeholder:text-zinc-500 outline-none"  
                />  
            </div>  
            {error && (  
                <p className="text-center text-red-500">{error}</p>  
            )}  
        </>  
    );  
}