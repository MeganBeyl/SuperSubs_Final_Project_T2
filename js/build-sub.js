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
    
            overallAmount += amount;
    
            area.innerHTML +=`
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                        <p class="card-text"><strong>Size:</strong> ${size}</p>
                        <p class="card-text"><strong>Toppings:</strong> ${addOns}</p>
                        <p class="card-text"><strong>Cost:</strong> R${amount}.00</p>
                    </div>
                </div>`
    
            total.innerHTML = "R" + overallAmount + ".00"
        }

        document.getElementById("subForm").reset();
    }
}

realPay = () => {

    realPrice = 0;

    let size = document.getElementById("size").value;
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            realPrice = realPrice + size[i].dataset.cost
        }
    }
   

    let breadOption = document.getElementsByName("breadOption");
    if(breadOption === "Brown Bread"){
        realPrice = realPrice + 25;
    } else if(breadOption === "White Bread"){
        realPrice = realPrice + 20;
    } else if(breadOption === "Rye Bread"){
        realPrice = realPrice + 30;
    } else if(breadOption === "Full Grain Bread"){
        realPrice = realPrice + 34;
    } else if(breadOption === "Pita Bread"){
        realPrice = realPrice + 15;
    }

    let sauce = document.getElementByName("sauce");
    for(let i = 0; i < sauceArray.length; i++){
        if(sauceArray[i].checked){
            realPrice = realPrice + sauceArray[i].dataset.cost
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
    localStorage.setItem('order', data)
    window.location.href = '../pages/checkout.html';
}