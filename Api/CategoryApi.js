class CategoryApi extends BaseApi{
    getAll = (success) =>{
        this.getData('productCategory',success)
    }

    getById = (id, success) =>{
        this.getData(`productCategory/${id}`,success);
    }
}