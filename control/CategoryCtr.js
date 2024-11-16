loadCategory = async () =>{
    let categoryTemplate = document.getElementById("category-item-template").innerHTML;
    let categoryHolder = document.getElementById("holder-category");
    let categoryApi = new CategoryApi();
    await categoryApi.getAll(function(data){
       for(let index = 0 ; index < data.length; index++){
        let template = categoryTemplate;
        template = template.replace('__ID__', data[index].id);
        template = template.replace('__IMG__', data[index].image);
        template = template.replace(/__TITLE__/g, data[index].title);
        categoryHolder.innerHTML += template
       }

    })
}