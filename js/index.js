
realPay = () => {

    realPrice = 0;

    let size = document.getElementById("size").value;

    if(size === "Small"){
        realPrice = realPrice + 20;
    } else if(size === "Medium"){
        realPrice = realPrice + 25;
    } else if(size === "Large"){
        realPrice = realPrice + 40;
    } else if(size === "Extra Large"){
        realPrice = realPrice + 45;
    }

    let breadOption = document.getElementsByName("breadRadio");
    for(let i = 0; i< breadOption.length; i++){
        if(breadOption[i].checked){
            realPrice = realPrice + breadOption[i].dataset.cost
        }
    }

    let addOnsOptions = document.getElementsByName("add-ons");
    for(let i = 0; i < addOnsOptions.length; i++){
        if(addOnsOptions[i].checked){
            realPrice = realPrice + addOnsOptions[i].dataset.cost
        }
    }



    document.getElementById("realPay").innerHTML = "R" + realPrice + ".00"

}

orderDisplay = () => {
    let area = document.getElementById("subOrder");
    let total = document.getElementById("orderAmount");

    let overallAmount = 0;

    for(let i = 0; i < subOrder.length; i++){
        let name = subOrder[i].subName;
        let size = subOrder[i].subSize;
        let bread = subOrder[i].subBread;
        let addOns = subOrder[i].subAddOns;
        let amount = subOrder[i].subAmount;

        overallTotal += amount;

        area.innerHTML +=`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Base:</strong> ${base}</p>
                    <p class="card-text"><strong>Size:</strong> ${size}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div>`

        total.innerHTML = "R" + overallTotal + ".00"
    }
}