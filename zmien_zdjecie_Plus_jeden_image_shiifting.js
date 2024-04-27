
var e = entry();

// Name of Primary field

const images = "zdjęcie";  
const integer = "integer";  


var prime = e.field(images);

if (prime[0] == null) {
  exit();
} 


var imgPrime = e.images(images);
var capt = imgPrime.map(a => a.caption);

var prevCount = parseInt(e.field(integer));

var imageCount = prime.length;


var index = prevCount % imageCount;

if (index == 0) {
  e.set(integer, 1);
  exit();
} 

if (index < 0) {
  index += imageCount;
}  


var newPrime = shiftArray(index, prime);
var newCapt = shiftArray(index, capt);

e.set(integer, 1);
e.set(images, newPrime);


imgPrime = e.images(images);

for (k in imgPrime) {

  imgPrime[k].caption = newCapt[k];

} 



function shiftArray(ind, arr) {

  var ar1 = arr.slice(- ind).reverse();
  var ar2 = arr.slice(0, imageCount - ind).reverse();

  return [].concat(ar2, ar1).reverse(); 

}
