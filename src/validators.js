export function isNameJoe(value) {
    if (!value) return true;
    return value === "Joe";
}

export function notGmail(value = "") {
    return !value.includes("gmail");
}

export function isGt2000(value) {
    return value > 2000;
}
export function isGt0to10(value) {
    return (value <= 10 && value >= 0);
}