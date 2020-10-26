export const addressFormater = (data) => {
    let addressObj = data.addresses[0];
    let address = `${addressObj.line1} \n ${addressObj.city}, ${addressObj.stateCode} ${addressObj.postalCode}`;
    return address;
}

export const parkOperatingHours = (data) => {
    let standardHours = data.operatingHours[0].standardHours
    let daysHours = [`Monday: ${standardHours.monday}`, `Tuesday: ${standardHours.tuesday}`, `Wednesday: ${standardHours.wednesday}`, `Thursday: ${standardHours.thursday}`, `Friday: ${standardHours.friday}`, `Saturday: ${standardHours.saturday}`, `Sunday: ${standardHours.sunday}`];
    return daysHours;
}
