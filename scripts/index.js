let bagItems = [];
onLoad()

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems')
    console.log(bagItemsStr)
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    console.log(bagItems)
    displayitemsOnHomePage()
    displayBagIcon()
    
}

function addToBag(item) {
    bagItems.push(item)
    console.log(item)
    console.log(bagItems)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon(){
    let itemBagCount = document.querySelector(".bag-item-count")

    if(bagItems.length > 0){
        itemBagCount.style.visibility = 'visible'
        itemBagCount.innerText = bagItems.length
    }else {
        itemBagCount.style.visibility = 'hidden'
    } 
}

function displayitemsOnHomePage() {
    let itemsContainerElement = document.querySelector(".items-container");

    if(!itemsContainerElement) {
        return;
    }

        let innerHTML = ``
        items.forEach(item => {
            innerHTML += `
            <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐|| ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage})% off</span>
            </div>
            <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
            </div>
            `
})

itemsContainerElement.innerHTML = innerHTML;
}
