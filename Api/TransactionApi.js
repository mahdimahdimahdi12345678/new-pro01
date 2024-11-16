class TransactionApi extends BaseApi{
    gotoPayment = (data, success) =>{
        this.postData('trx/gotoPayment',data, success);
    }
}