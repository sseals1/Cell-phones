
const phoneToFind = 2
const phonesArray = [
    {
        
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2,
        id: 1
    },
    {
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4,
        id: 2
    }
]




// for (const phoneObj of phonesArray) {
//     if (phoneObj.id === phoneToFind) {
//         phoneObj.weight = phoneObj.weight + 0.4
//     console.log(`The ${phoneObj.maker}, ${phoneObj.name} costs $${phoneObj.price}.00 dollars. It weighs ${phoneObj.weight} grmas.`)
//     }
    
// }

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phonesArray.length - 1
    const currentLastPhone = phonesArray[lastIndex]
    const maxId = currentLastPhone.id + 1
    const idForNewPhone = maxId

    phoneObject.id = idForNewPhone
    phonesArray.push(phoneObject)

}
addPhoneToInventory(pixel)

    for (const phone of phonesArray) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

console.log(phonesArray)