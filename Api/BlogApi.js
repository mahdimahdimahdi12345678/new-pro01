class BlogApi extends BaseApi{
    getAll = (success) =>{
        this.getData('blog',success)
    }

    getById = (id, success) =>{
        this.getData(`blog/${id}`,success);
    }
}