export function isNameJoe(value) {
    if (!value) return true;
    return value === "Joe";
}

export function isGmail(value = "") {
    return value.includes("gmail");
}

export function isGt2000(value) {
    return (value !== '' && value && value > 2000);
}
export function isGt0to10(value) {
    return (value <= 10 && value >= 0);
}

export function isPasswordLength(value) {
    return (value.length >= 8);
}