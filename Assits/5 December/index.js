
// let arr = ['Akram', 'Hassan', 'Hussain', 'Saqib']


//length of array 

// console.log(arr.length)

// document.write(arr.length)
// document.write(arr)


// for(i=0; i<arr.length; i++){

//     document.write(arr[i]);
// }


let lis = document.getElementsByTagName("li")

for(i=0; i<lis.length; i++){
    lis[i].style.fontFamily=' Arial, Helvetica, sans-serif'
    lis[i].style.fontSize='50px'
    lis[i,'0'].style.color='red'
    lis[i,'1'].style.color='blue'
    lis[i,'2'].style.color='black'
    lis[i,'3'].style.color='green'
    lis[i].style.listStyle ='none'
    
}
console.log(lis.length)


