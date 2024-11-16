selectBtn =(target,pageIndex,pageSize,catID) =>{
    let productApi = new ProductApi();
    if(target == 'Popular'){
        productApi.getPopularProducts(loadProduct)
    } else if(target == 'New'){
        productApi.getNewProducts(loadProduct)
    } else if(target == 'All'){
        productApi.getAll(pageIndex, pageSize, coolaBack)
    } else if(target == 'Category'){
        productApi.getByCategoryId(catID,pageIndex,pageSize,coolaBack)
    }
}

loadProduct = (data) =>{
    let productTemplate = document.getElementById("product-item-template").innerHTML;
    let productHolder= document.getElementById("product-holder");
    productHolder.innerHTML = ""
    for(let index = 0 ; index < data.length; index++){
        let template = productTemplate;
        template = template.replace('__ID__',data[index].id);
        template = template.replace('__IMG__',data[index].image);
        template = template.replace(/__TITLE__/g,data[index].title);
        productHolder.innerHTML += template
    }
}

coolaBack = (data) =>{
    let productTemplate = document.getElementById("product-item-template").innerHTML;
    let productHolder= document.getElementById("product-holder");
    for(let index = 0 ; index < data.length; index++){
        let template = productTemplate;
        template = template.replace('__ID__',data[index].id);
        template = template.replace('__IMG__',data[index].image);
        template = template.replace('__TITLE__',data[index].title);
        productHolder.innerHTML += template
    }
    if(data.length == 0){
        window.stopLoading = true;
    }
}

changeBtn = (currentItem,target,pageIndex,pageSize,catID,catName) =>{
    let tagBtn = document.getElementsByClassName("tag-btn");
    for(let ele of tagBtn){
        ele.classList.remove("tag-btn-selected")
    }
    if(currentItem == null){
        currentItem = document.getElementById("popular-select")
    }
    if(currentItem != null){
    currentItem.classList.add("tag-btn-selected");
    }
    if(catName != null || catName != undefined){
    document.getElementById("title-Btn").innerText = catName + ' Products';

    } else{
    document.getElementById("title-Btn").innerText = target + ' Products';
    }
    
    selectBtn(target,pageIndex,pageSize,catID)
}