
var es = entry();

// Name of Primary field

var imagess = "zdjęcie";  
var integers = "integer";  


var primes = es.field(imagess);

if (primes[0] == null) {
  exit();
} 


var imgPrimes = es.images(imagess);
var capts = imgPrimes.map(as => as.caption);

var prevCounts = parseInt(es.field(integers));

var imageCounts = primes.length;


var indexs = prevCounts % imageCounts;

if (indexs == 0) {
  es.set(integers, 1);
  exit();
} 

if (indexs < 0) {
  indexs += imageCounts;
}  


var newPrimes = shiftArray(indexs, primes);
var newCapts = shiftArray(indexs, capts);

es.set(integers, 1);
es.set(imagess, newPrimes);


imgPrimes = es.images(imagess);

for (c in imgPrimes) {

  imgPrimes[c].caption = newCapts[c];

} 



function shiftArray(ind, arr) {

  var ar1 = arr.slice(- ind).reverse();
  var ar2 = arr.slice(0, imageCounts - ind).reverse();

  return [].concat(ar2, ar1).reverse(); 

}

primes.pop()
