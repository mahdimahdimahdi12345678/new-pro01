loadDataBasket = () =>{
    let basketTemplate = document.getElementById("basket-item-template").innerHTML;
    let basketHolder = document.getElementById("basket-holder");
    let dataList = BasketDb.load();
    if(dataList == undefined || dataList.length == 0){
        return
    }
    basketHolder.innerHTML = "";
    dataList.forEach((basket) =>{
        if(basket != null){
        let template = basketTemplate;
        template = template.replace(/__ID__/g, basket.id);
        template = template.replace('__IMG__', basket.image);
        template = template.replace('__TITLE__', basket.title);
        template = template.replace('__PRICE__', basket.price);
        template = template.replace('__QTY__', basket.qty);
        template = template.replace('__SIZE__', basket.sizeTitle);
        template = template.replace(/__SID__/g, basket.sizeId);
        template = template.replace('__HEX__', basket.colorHex);
        template = template.replace('__CTITLE__', basket.colorTitle);
        template = template.replace(/__CID__/g, basket.colorId);
        basketHolder.innerHTML += template;
        }
    })
    calcuelateTotalPrice();
}

let increase = (id, sid, cid) =>{
    let result = BasketDb.increase(id, sid, cid);
    if(result > 0){
    document.getElementById("qty_" + id + sid + cid).innerText = result
    }
    calcuelateTotalPrice()
}

let declear = (id, sid, cid) =>{
    let result = BasketDb.declear(id, sid, cid);
    if(result > 0){
    document.getElementById("qty_" + id + sid + cid).innerText = result
    } else{
        document.getElementById("basket-row-" + id + sid+ cid).remove();
        location.href = location.href
    }
    calcuelateTotalPrice()
}

calcuelateTotalPrice = () =>{
    let dataList = BasketDb.load();
    let sum = 0;
    dataList.forEach((basket) =>{
        if(basket != null){
            sum += basket.qty * basket.price
        }
    })
    document.getElementById("basket-sum").innerText = ` Total Price : ${sum}$ `;
}