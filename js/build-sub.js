let subOrder = [];

buildSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let size = document.getElementById("Small").value;

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

    let sauceOption = document.getElementById("sauce");
    let sauceArray;
    for(let i = 5; i < sauceOption.length; i++){
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