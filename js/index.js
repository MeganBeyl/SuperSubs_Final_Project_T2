let subOrder = [];

buildSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let size = document.getElementById("size").value;

    if(size === "Small"){
        subOrder = subOrder + 20;
    } else if(size === "Medium"){
        subOrder = subOrder + 25;
    } else if(size === "Large"){
        subOrder = subOrder + 40;
    } else if(size === "Extra Large"){
        subOrder = subOrder + 45;
    }

        // Get Radio Options
    let breadOption = document.getElementById("breadRadio");
    let breadVal;
    for(let i = 0; i < breadOption.length; i++){
        if(baseOption[i].checked){
            breadVal = breadOption[i].value
            subTotal = subTotal + breadOption[i].dataset.cost
        }
    }

    let sauceOption =document.getElementById("sauce");
    let sauceArray;
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceArray = sauceOption[i].value
            subTotal = subTotal + sauceOption[i].dataset.cost
        }
    }

    let addOnsOptions = document.getElementsByName("add-ons");
    let toppingArray = [];
    for(let i = 0; i < addOnsOptions.length; i++){
        if(addOnsOptions[i].checked){
            toppingArray.push(addOnsOptions[i].value);
            subTotal = subTotal + addOnsOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subSize: size,
        subSauce: sauceOption,
        subAddOns: topArray,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realPay").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}
realPay = () => {
    let size = document.getElementById("size").value;

    if(size === "Small"){
        realPay = realPay + 20;
    } else if(size === "Medium"){
        realPay = realPay + 25;
    } else if(size === "Large"){
        realPay = realPay + 40;
    } else if(size === "Extra Large"){
        realPay = realPay + 45;
    }

    let breadOption = document.getElementsByName("breadRadio");
    for(let i = 0; i< breadOption.length; i++){
        if(breadOption[i].checked){
            realPay = realPay + breadOption[i].dataset.cost
        }
    }

    let addOnsOptions = document.getElementsByName("add-ons");
    for(let i = 0; i < addOnsOptions.length; i++){
        if(addOnsOptions[i].checked){
            realPay = realPay + addOnsOptions[i].dataset.cost
        }
    }

    document.getElementById("realPay").innerHTML = "R" + realPay + ".00"
}

orderDisplay = () => {
    let area = document.getElementById("order-choice");
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