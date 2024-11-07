const formatNumberWithSpaces  = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
    return formatted;
};


const validatePhone = (phone) => {
    // Change format numbers to regular number for validate
    const cleaned = phone.replace(/\D/g, '');
    const changeToNumber = cleaned ? parseInt(cleaned, 10) : null; // اگر خالی نبود، به عدد تبدیل کن

    const pattern = /^9\d{9}$/;
    return pattern.test(changeToNumber)
}

export { validatePhone, formatNumberWithSpaces }