checkOutDisplay = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkOrder');
    let totalArea = document.getElementById('totalCheck');

    let checkOutTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let size = data[i].subSize;
        let sauce = data[i].subSauce;
        let bread = data[i].subBread;
        let addOns = data[i].subAddOns;
        let amount = data[i].subAmount;

        checkOutTotal += amount;

        items.innerHTML += `

        <div class="orderList">
            <p>Name: ${name}</p>
            <p>Sub Size: ${size}</p>
            <p>Sub Bread: ${bread}</p>
            <p>Sub Sauce: ${sauce}</p>
            <p>Sub Add Ons: ${addOns.join(', ')}</p>
            <p>Sub Price: R${amount}.00</p>
        </div>
        `

        totalArea.innerHTML = "R" + checkOutTotal + ".00";

    }
}

addDiscount = () => {
    
}

resetBack = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}