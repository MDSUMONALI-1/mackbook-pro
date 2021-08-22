// RAM function
function ramCoast(isHigher8) {
    if (isHigher8 == true) {
        document.getElementById('ram').innerText=100;
    }
     else{
        document.getElementById('ram').innerText = 0;
     }
     
    updateTotal()
    return ;
    
    
}

document.getElementById('memory16').addEventListener('click', function (){
   ramCoast(true);
})
document.getElementById('memory8').addEventListener('click', function (){
    ramCoast(false);
   
  
    
})


document.getElementById('ssd256').addEventListener('click', function (){
     document.getElementById('rom').innerText = 0;
         
        updateTotal()
})
document.getElementById('ssd512').addEventListener('click', function (){
    document.getElementById('rom').innerText = 100;
  
        updateTotal()
})
document.getElementById('ssd1024').addEventListener('click', function (){
    
    document.getElementById('rom').innerText = 180;
  
 updateTotal()
})
// delivery function
function shippingcost(isFastDelivery) {
   if (isFastDelivery == true) {
     document.getElementById('deliveryCharge').innerText =20;
    
   }
else{
    document.getElementById('deliveryCharge').innerText=0;
 
    
}
    updateTotal()
    return ;
    
}
document.getElementById('fastDelivery').addEventListener('click', function (){
    shippingcost(true)
   
})
document.getElementById('freeDelivery').addEventListener('click', function (){
    shippingcost(false)
   
})


// update total
function updateTotal() {
    var memoryCost = Number(document.getElementById('ram').innerText)
console.log(memoryCost);
var storageCost = Number(document.getElementById('rom').innerText)
console.log(storageCost);
var shipCost = Number(document.getElementById('deliveryCharge').innerText)
console.log(shipCost);
var minPrice= Number(document.getElementById('min-price').innerText)
console.log(minPrice);
var total =document.getElementById('total-price');


total.innerText = (memoryCost + storageCost + shipCost + minPrice);
console.log(total)
document.getElementById('update-total').innerText = total.innerText;
  return total;
}
// apply qupon
document.getElementById('qupon-btn').addEventListener('click',function (){
    const quponField = document.getElementById('qupon-code').value;
 if (quponField == 'stevekaku') {
        console.log('qupon clicked')
        
      var totalPrice = 0.8 * Number(document.getElementById('total-price').innerText);
      console.log(totalPrice);
        document.getElementById('update-total').innerText = totalPrice;
    }
   
 })

