let subOrder = [];

buildSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    
    
    let size = document.getElementsByName("sizeRadio");
    let sizeValue;
    for(let i = 0; i < size.length;i++){
        if(size[i].checked){
            sizeValue = size[i].value
            subTotal = subTotal + +size[i].dataset.cost
        }
    }

    // Get Radio Options
    //let size= "";
    //if (document.getElementById("small").checked){
    //  size = "small";
    //} else if (document.getElementById("medium").checked){
    //    size = "medium";
    //} else if(document.getElementById("large").checked){
    //    size = "large";
    //} else if(document.getElementById("extraLarge").checked){
    //    size = "extra Large";
    //}

        
    let breadOption = document.getElementById("breadOption").value;

    if(breadOption === "Brown Bread"){
        subTotal = subTotal + 25;
    } else if(breadOption === "White Bread"){
        subTotal = subTotal + 20;
    } else if(breadOption === "Rye Bread"){
        subTotal = subTotal + 30;
    } else if(breadOption === "Full Grain Bread"){
        subTotal = subTotal + 34;
    } else if(breadOption === "Pita Bread"){
        subTotal = subTotal + 15;
    }
    

    let sauceOption = document.getElementsByName("sauce");
    let sauceArray = [];
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceArray.push(sauceOption[i].value)
            subTotal = subTotal + +sauceOption[i].dataset.cost
        } 
    }

    let addOnsOptions = document.getElementsByName("add-ons");
    let toppingArray = [];
    for(let i = 5; i < addOnsOptions.length; i++){
        if(addOnsOptions[i].checked){
            toppingArray.push(addOnsOptions[i].value);
            subTotal = subTotal + +addOnsOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subSize: sizeValue,
        subBread: breadOption,
        subSauce: sauceArray,
        subAddOns: toppingArray,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realPay").innerHTML = "R0.00"
    document.getElementById("buildSubForm").reset();


    orderDisplay()
}

orderDisplay = () => {
    let area = document.getElementById("subOrder");
    let total = document.getElementById("orderAmount");

    area.innerHTML = ""

    let overallAmount = 0;

    for(let i = 0; i < subOrder.length; i++){
        let name = subOrder[i].subName;
        let size = subOrder[i].subSize;
        let sauce = subOrder[i].subSauce;
        let bread = subOrder[i].subBread;
        let addOns = subOrder[i].subAddOns;
        let amount = subOrder[i].subPrice;

        overallAmount += amount;

        area.innerHTML +=`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                    <p class="card-text"><strong>Size:</strong> ${size}</p>
                    <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${addOns}</p>
                    <p class="card-text"><strong>Cost:</strong> R${amount}.00</p>
                </div>
            </div>`

        total.innerHTML = "R" + overallAmount + ".00"
    }

    document.getElementById("buildSubForm").reset();
}

realPay = () => {

    let realPrice = 0;

    let size = document.getElementsByName("sizeRadio");
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            realPrice = realPrice + size[i].dataset.cost
        }
    }

    let breadOption = document.getElementsById("breadOption").value;
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

    let sauceOption = document.getElementsByName("sauce");
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            realPrice = realPrice + sauceOption[i].dataset.cost
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
    let data = JSON.stringify(subOrder);
    localStorage.setItem('subOrder', data);
    window.location.href = '../pages/checkout.html';
}