let subOrder = [];

buildSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    
    // Get Radio Options
    let size = "";
    if (document.getElementById("small").checked){
        size = "small";
    } else if (document.getElementById("medium").checked){
        size = "medium";
    } else if(document.getElementById("large").checked){
        size = "large";
    } else if(document.getElementById("extraLarge").checked){
        size = "extra Large";
    }

        
    let breadOption = document.getElementById("breadOption");

    if(breadOption === "Brown Bread"){
        subTotal = subTotal + 25;
    } else if(breadOption === "White Bread"){
        subTotal = subTotal + 20;
    } else if(breadOption === "Rye Bread"){
        subTotal = subTotal + 30;
    } else if(breadOption === "Full Grain Bread"){
        subTotal = subTotal + 34;
    } else if(breadOption === "Pita Bread"){
        subTotal = subtotal + 15;
    }
    

    let sauceOption = document.getElementById("sauce");
    let sauceArray;
    for(let i = 1; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceArray = sauceOption[i].value
            subTotal = subTotal + sauceOption[i].dataset.cost
        } 
    }

    let addOnsOptions = document.getElementsByName("add-ons");
    let toppingArray = [];
    for(let i = 5; i < addOnsOptions.length; i++){
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


    orderDisplay = () => {
        let area = document.getElementById("subOrder");
        let total = document.getElementById("orderAmount");
    
        area.innerHTML = ""

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

        document.getElementById("subForm").reset();
    }
}

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

checkOut = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('send', subOrder)
    window.location.href = 'checkout.html';
}