class BaseApi {
  getData = async (suffix, success) => {
    let url = ApiAddress.getApiUrl(suffix);
    let response = await fetch(url);
    if (response.status == 200) {
      this.onSuccess(response, success);
    } else {
      this.onError();
    }
  };

  postData = async (suffix, data, success) => {
    let url = ApiAddress.getApiUrl(suffix);
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if(response.status == 200) {
      debugger
      // let json = await response.json();
      // console.log(json);
      this.onSuccess(response, success);
    } else {
      this.onError();
    }
  };

  getDataWithToken = async (suffix, token, success) => {
    let url = ApiAddress.getApiUrl(suffix);
    let response = await fetch(url,{ 
      method: 'get', 
      headers: new Headers({
          'Authorization': 'Bearer '+ token, 
      }),
  });


    if (response.status == 200) {
      this.onSuccess(response, success);
    } else {
      this.onError();
    }
  };

  onSuccess = async (response, collBack) => {
    let json = await response.json();
    if (json.status == "OK") {
      collBack(json.data);
    } else {
      this.onError();
    }
  };

  onError = () => {
    alert("Geting Error");
  };
}
