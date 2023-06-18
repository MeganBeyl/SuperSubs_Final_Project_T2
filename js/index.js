
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

