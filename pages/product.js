let pageIndex = 0;
let pageSize = 6;
window.stopLoading = false;
window.onload = async function(){
    await loadCategory();
   await readIdcategory()
}

window.onscroll = async function(){
    let lastElement = document.getElementById("product-holder").lastChild;
    let offSet = lastElement.previousElementSibling.offsetTop;
    if(window.scrollY > 800 && !stopLoading){
        ++pageIndex;
        await readIdcategory();
    }
}
readIdcategory = async () =>{
    let catId = getParameterByName("catId");
    let catName = getParameterByName("catName");
    if(catId == null || catId == undefined){
        await changeBtn(null, 'All',pageIndex,pageSize)
    } else{
        await changeBtn(null, 'Category',pageIndex,pageSize,catId,catName)
    }
}