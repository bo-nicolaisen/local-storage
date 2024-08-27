// write cool JS hwere!!


localStorage.setItem('data', 'hund')
localStorage.setItem('ib', 'kat')

console.log(localStorage.getItem('bob'));


localStorage.removeItem("ib");


function SaveObject(basketData, itemName) {
    let mySerializedData = JSON.stringify(basketData)
    localStorage.setItem(itemName, mySerializedData)
}



function ReadObject(itemName) {
    let mybasketstring = localStorage.getItem(itemName)

    let myBasket = JSON.parse(mybasketstring)
    return myBasket
}
