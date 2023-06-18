let subOrder = [];

buildSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let size = "";
    if (document.getElementById("small").checked){
        size = "small";
    } else if (document.getElementById("medium")){
        size = "medium";
    } else if(document.getElementById("large")){
        size = "large";
    } else if(document.getElementById("extraLarge")){
        size = "extra Large";
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

checkOut = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('send', subOrder)
    window.location.href = 'pages/checkout.html';
}