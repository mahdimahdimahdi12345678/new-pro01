class UserApi extends BaseApi{
    login = (data, success) =>{
        this.postData('user/login',data, success);
    }
}