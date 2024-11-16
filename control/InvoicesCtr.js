loadInvoices = async () =>{
    let invoiceTemplate = document.getElementById("invoice-table-template").innerHTML;
    let invoiceHolder = document.getElementById("holder-invoice");
    let currentUserJson = getCookie("currentUser");
    let currentUser = JSON.parse(currentUserJson);
    debugger
    let invoiceapi = new InvoiceApi();
    await invoiceapi.getAllByUserId(currentUser.id, 0, 10, currentUser.token, function(data){
       for(let index = 0 ; index < data.length; index++){
        let template = invoiceTemplate;
        template = template.replace(/__ADDDATE__/g, data[index].addDate);
        template = template.replace(/__PAYDATE__/g, data[index].paymentDate);
        template = template.replace(/__STATUS__/g, data[index].status);
        template = template.replace(/__ID__/g, data[index].id);
        invoiceHolder.innerHTML += template;
       }
    })
}

setTimeout(loadInvoices, 1000)