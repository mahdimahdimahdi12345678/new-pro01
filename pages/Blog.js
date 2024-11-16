window.onload = function(){
    let blogApi = new BlogApi();
    blogApi.getAll(function(dataList){
        let data = dataList[0];
        document.getElementById("showBlog-title").innerText = data.title;
        document.getElementById("showBlog-mainTitle").innerText = data.subTitle;
        document.getElementById("showBlog-description").innerText = data.description;
    });
};