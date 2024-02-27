const shop = {
    name:'mokbol',
    address:{
        ziala: 'rangpur',
        uppozala: 'rangpur sa',

    },
    prices : 4873,
}
console.log(shop)
const shopJSON =JSON.stringify(shop)
console.log(shopJSON)
const shopobj =JSON.parse(shopJSON)
console.log(shopobj)