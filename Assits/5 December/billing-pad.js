
let srno = 1

function addItem(){

    let item_Name = document.querySelector("#item-name")
    let base_item_price = document.querySelector("#base-item-price")
    let item_qty = document.querySelector("#item-qty")
    let total_amount = document.querySelector("#total-amount")

if(item_Name.value != null && base_item_price && item_qty.value != null){


    let tr = document.createElement("tr")
    let td_srno = document.createElement("td")
    td_srno.innerText = srno 
    srno++

    let td_item_name = document.createElement("td")
        td_item_name.innerText = item_Name.value

    let td_base_item_price = document.createElement("td")
    td_base_item_price.innerText = base_item_price.value

    let td_item_qty = document.createElement("td")
    td_item_qty.innerText = item_qty.value

    let td_total_amount = document.createElement("td")
    td_total_amount.innerText = (Number(base_item_price.value) * Number(item_qty.value))

    tr.append(td_srno)
    tr.append(td_item_name)
    tr.append(td_base_item_price)
    tr.append(td_item_qty)
    tr.append(td_total_amount)

    let tbody = document.querySelector("#tBody")
    tbody.append(tr)

  


}

else{

    alert("please enter all the fields")
}


item_Name.value = '';
base_item_price.value = '';
item_qty.value = '';
total_amount.value = '';


}

function putTotal(){
let put_price = document.querySelector("#base-item-price")
let put_qty = document.querySelector("#item-qty")
let put_total = document.querySelector("#total-amount")
let grand_total = (Number(put_price.value) * Number(put_qty.value))
      put_total.value = grand_total

}