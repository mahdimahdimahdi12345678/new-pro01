class SliderApi extends BaseApi{
    getAll = (success) =>{
        this.getData('slider',success)
    }

    getById = (id, success) =>{
        this.getData(`slider/${id}`,success);
    }
}