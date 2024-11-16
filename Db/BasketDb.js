class BasketDb {
  static addToBasket(data, size, color) {
    let dataList = this.load();
    if (dataList == undefined || dataList == null) {
      dataList = new Array();
    }
    let basketItem = new Basket(
      data.id,
      data.title,
      data.price,
      data.image,
      1,
      size.id,
      size.title,
      color.id,
      color.title,
      color.hex
    );
    let oldItem = dataList.find((value) => value != null && value.id == basketItem.id &&
    value.sizeId == basketItem.sizeId && value.colorId == basketItem.colorId);
    if (oldItem != null) {
      oldItem.qty++;
    }  else{
        dataList.push(basketItem)
    }
    setCookie("baasket", JSON.stringify(dataList), 30);
    Swal.fire({
      icon: "success",
      title: basketItem.title + ' Add To Basket!',
    });
  }

  static load(){
    let str = getCookie("baasket");
    if(str == "") return null
    let dataList = JSON.parse(str);
    let result = []
    dataList.forEach((element) => {
        if(element !=null){
            result.push(element)
        }
    });
    return result
  }

  static increase(id, cid, sid){
    let dataList = this.load();
    if(dataList == undefined || dataList == null){
        dataList = new Array();
    }
    let oldItem = dataList.find((value)=> value != null  && value.id == id &&
    value.sizeId == sid && value.colorId == cid);
    if(oldItem != null){
        oldItem.qty++;
        setCookie("baasket", JSON.stringify(dataList), 30);
        return oldItem.qty;
    }
    return 0
  }

  static declear(id, cid, sid){
    let dataList = this.load();
    if(dataList == undefined || dataList == null){
        dataList = new Array();
    }
    let oldItem = dataList.find((value)=> value != null  && value.id == id &&
    value.sizeId == sid && value.colorId == cid);
    if(oldItem != null){
        oldItem.qty--;
        if(oldItem.qty <= 0){
        let index = dataList.findIndex((value) => value != null && value.id == id &&
        value.sizeId == sid && value.colorId == cid);
        delete dataList[index]
        }
        setCookie("baasket", JSON.stringify(dataList), 30);
        return oldItem.qty;
    }
    return 0
  }

}