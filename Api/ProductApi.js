class ProductApi extends BaseApi{
    getAll = (pageIndex, pageSize, success) =>{
        this.getData(`product?pageIndex=${pageIndex}&pageSize=${pageSize}`,success)
    }

    getById = (id,success) =>{
        this.getData(`product/${id}`,success);
    }

    getByCategoryId = (catID,pageIndex,pageSize, success) =>{
        this.getData(`product/cat/${catID}?pageIndex=${pageIndex}&pageSize=${pageSize}`,success);
    }
    
    getNewProducts = (success) =>{
        this.getData(`product/new`,success);
    }

    getPopularProducts = (success) =>{
        this.getData(`product/popular`,success);
    }
}