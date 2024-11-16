class InvoiceApi extends BaseApi{
    getAllByUserId = (userId, pageIndex, pageSize, token, success) =>{
        this.getDataWithToken(`invoice/user/${userId}?pageIndex=${pageIndex}&pageSize=${pageSize}`,token,success);
    }
    
}