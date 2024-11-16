let selectColor = null;
let selectSize = null;
let currentProduct = null;
window.onload = function () {
  let id = getParameterByName("id");
  let productApi = new ProductApi();
  productApi.getById(id, function (dataList) {
    let data = dataList[0];
    currentProduct = data
    document.getElementById("show-image").src = data.image;
    document.getElementById(
      "show-title"
    ).innerText = `${data.category.title} - ${data.title}`;
    document.getElementById("show-description").innerText = data.description;

    //  Template Color
    let colorTemplate = document.getElementById(
      "color-item-template"
    ).innerHTML;
    let colorHolder = document.getElementById("color-holder");
    for (let index = 0; index < data.colors.length; index++) {
      let template = colorTemplate;
      template = template.replace(/__HEX__/g, data.colors[index].hexValue);
      template = template.replace(/__TITLE__/g, data.colors[index].title);
      template = template.replace(/__ID__/g, data.colors[index].id);
      colorHolder.innerHTML += template;
    }

    // Size
    let sizetemplate = document.getElementById("size-item-template").innerHTML;
    let sizetHolder = document.getElementById("size-holder");
    for (let index = 0; index < data.sizes.length; index++) {
      let template = sizetemplate;
      template = template.replace(/__TITLE__/g, data.sizes[index].title);
      template = template.replace(/__ID__/g, data.sizes[index].id);
      sizetHolder.innerHTML += template;
    }
  });
  
  changecolor = (elem,id,title,hex) =>{
    let colorSlect = document.getElementsByClassName("show-product-color-selected");
    for(let ele of colorSlect){
        ele.classList.remove("show-product-color-selected")
    }
    elem.classList.add("show-product-color-selected");
    selectColor = {
        id : id,
        title : title,
        hex : hex,
    }
}

changeSize = (current,id,title) =>{
    let sizeSelect = document.getElementsByClassName("show-product-size-selected");
    for(let ele of sizeSelect){
        ele.classList.remove("show-product-size-selected")
    }
    current.classList.add("show-product-size-selected")
    selectSize = {
        id : id,
        title : title,
    }
}
};


let addToBasket = () =>{
  if(selectColor == undefined || selectColor == null){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      title: "please select color!",
    });
    return
  }
  if(selectSize == undefined || selectSize == null){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      title: "please select size!",
    });
    return
  }
  BasketDb.addToBasket(currentProduct, selectSize, selectColor);
}