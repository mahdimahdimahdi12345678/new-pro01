goToPayment = async () => {
    let form = document.getElementById("form");
    if (!form.checkValidity()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill the data!",
      });
      return
    }
    
    let userData = {
      address: form['address'].value,
      firstName: form['firstName'].value,
      lastName: form['lastName'].value,
      password: form['password'].value,
      phone: form['phone'].value,
      postalCode: form['postalCode'].value,
      username: form['username'].value,
    };
    let items = [];
    
    let dataList = BasketDb.load();
    dataList.forEach((basket) =>{
      if(basket != null){
        let item = {
          product : {
            id : basket.id,
            colors : [
              {
                id : basket.colorId,
              }
            ],
            sizes : [
              {
                id : basket.sizeId,
              }
            ],
          },
          quantity : basket.qty,
        };
        items.push(item)
      }
    })
  
    let data = {
      user : userData,
      items : items,
    }
  
    showLoading()
    let api = new TransactionApi();
    await api.gotoPayment(data, function(response){
      location.href = response[0]
    });
  };
  