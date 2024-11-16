login = async () =>{
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
        password: form['password'].value,
        username: form['username'].value,
      };

      showLoading();
      let api = new UserApi();
      await api.login(userData, function(data){
        let currentUser =  data[0];
        setCookie("currentUser",JSON.stringify(currentUser), 5);
        setCookie("token", currentUser.token);
        location.href = 'panel/index.html';
      })
}