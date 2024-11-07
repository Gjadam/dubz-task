const validatePhone = (phone) => {
    const pattern = /^9\d{9}$/;
    return pattern.test(phone)
}

export { validatePhone }