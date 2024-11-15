// Wyzwalacz 4 test
dialog()
.view(
ui().layout([
ui().layout([
ui().button('z1').action(function() {
var t = entry().field("zdjęcie")[0]
message(t)
libByName("search").entries()[0].set("zdjęcie",t)
}).width(115),

ui().button('z2').action(function() {
var t = entry().field("zdjęcie drugie")[0]
message(t)
libByName("search").entries()[0].set("zdjęcie drugie",t)
}).width(115),

ui().button('in').action(function() {libByName("inside").show()}).width(107),
ui().button('im').action(function() {libByName("important").show()}).width(114),
ui().button('m').action(function() {libByName("memento open").show()}).width(95),

ui().button('po').action(function() {
// pokaż notatki
var w =libByName("dziennik").entries()[0].field("notatki");
var text =   w   ;
const myd=dialog()
myd
   .text(text)
.positiveButton("OK",()=>true)
   .negativeButton(" przypisy ",() => {const myd=dialog()
myd.title("przypisy")
   .text(entry().field("przypisy osobno"))
.positiveButton("OK",()=>true)
.show()}
)
   .neutralButton("sumarum", ()=> 
{
myd.title("sumarum")
   .text(text2)
   .positiveButton(" OK ",()=>true)
   .show();
})
.autoDismiss(false)
   .show();
}).width(122),

ui().button('lib').action(function() {lib().show()}).width(126)
]).horizontal(),
ui().layout([

ui().button('szdz').action(function() { 
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var search1 = libByName("dziennik").find(ui().findByTag('name').text) 
message(search1.length);
search1[nr].show()
        return true; 
    }).width(166),

ui().button('mo').action(function() {
var min = Math.ceil(10000)
var max = Math.floor(1000)
for (var ent = 0; ent < lib().entries().length; ent++){    
var ggg = Math.floor(Math.random() * (max - min)) + min
var jjj = ggg / 100
var kkk = jjj.toFixed(2)
lib().entries()[ent].set("czas momentum",kkk)
}
}).width(131),

ui().button('szub').action(function() {       
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var lib1 = libByName("Biblia audio memento");
var search1 = lib1.find(ui().findByTag('name').text)
var tyu = search1[0].field("nazwa")
message(search1.length);
search1[nr].show()
        return true; 
    }).width(167),

ui().button('ok').action(function() {
var url = ("tasker://secondary?text=backbuttonlink");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
        return true; 
    }).width(167),

ui().button('B').action(function() {
var url = ("tasker://secondary?text=buttonyzdjec");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
        return true; 
}).width(100),

ui().edit('').tag('name2').width(100), 

]).horizontal(),

ui().layout([
ui().edit('').tag('name')
]).horizontal(),

ui().layout([
ui().button('zer').action(function() {
ui().findByTag('name').text = ""
}).width(140),

ui().button('zap').action(function() {
var note = ui().findByTag('name').text;
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
libByName("dziennik").entries()[nr].set("zajawka",note);
libByName("dziennik").entries()[nr].set("notatki",libByName("dziennik").entries()[nr].field("notatki")+"\n\n"+note+"\n");
message("saved")
return true;
}
).width(146),

ui().button('bib').action(function() {
libByName("biblia audio memento").show()
}
).width(129),

ui().button('ins').action(function() {
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
let entries = lib().entries();
let numberOfEntries = entries.length;
let selection =
    getRandomInteger(numberOfEntries);
let e = entries[selection];
// Put code to show this entry here
e.show()
}).width(131),

ui().button('*').action(function() {
ui().findByTag('name').text = ui().findByTag('name').text + " * "
var url = ("tasker://secondary?text=cursorend");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send()
}).width(100),

ui().button('mie').action(function() {libByName("podsumowania miesięcy memento").show()}).width(190)
]).horizontal(),

ui().layout([
ui().edit('').tag('name3').width(50),

ui().button('p1').action(function() { 


var nr = ui().findByTag('name2').text

if (nr == ""){
nr = 0}


if (nr == 1){
entry().images("zdjęcie")[1].caption = ui().findByTag('name').text
}
else if (nr == 2){
entry().images("zdjęcie")[2].caption = ui().findByTag('name').text
}
else if (nr == 3){
entry().images("zdjęcie")[3].caption = ui().findByTag('name').text
}


var calp = ui().findByTag('name3').text
if (calp == ""){

entry().images("zdjęcie")[nr].caption = ui().findByTag('name').text

message(entry().images("zdjęcie")[nr].caption)
}


else if (calp == "t" ){
ui().findByTag('name').text = entry().images("zdjęcie")[nr].caption

ui().findByTag('name3').text = ""
}       

else if (calp == "d" ){
entry().images("zdjęcie drugie")[nr].caption = ui().findByTag('name').text
ui().findByTag('name3').text = ""
}       
else if (calp == "dk" ){
ui().findByTag('name').text = entry().images("zdjęcie drugie")[nr].caption

ui().findByTag('name3').text = ""
}       
 


       return true; 
}).width(117),




ui().button('p2').action(function() { 
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}



if (nr == 1){
entry().images("zdjęcie drugie")[1].caption = ui().findByTag('name').text
}
else if (nr == 2){
entry().images("zdjęcie drugie")[2].caption = ui().findByTag('name').text
}
else if (nr == 3){
entry().images("zdjęcie drugie")[3].caption = ui().findByTag('name').text
}







var calp = ui().findByTag('name3').text
if (calp == ""){
entry().images("zdjęcie drugie")[nr].caption = ui().findByTag('name').text
message(entry().images("zdjęcie")[nr].caption)
}
else if (calp == "t" ){
ui().findByTag('name').text = entry().images("zdjęcie drugie")[nr].caption
ui().findByTag('name3').text = ""
}       
 return true; 
}).width(117),

ui().button('1').action(function() {
var e = entry();
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
}).width(78),

ui().button('2').action(function() {
// zmien dwa obrazy czyli tutaj jeden
var e = entry();
const imagess = "zdjęcie drugie";  
const integers = "integer";  
var primes = e.field(imagess);
if (primes[0] == null) {
  exit();
} 
var imgPrimes = e.images(imagess);
var capts = imgPrimes.map(a => a.caption);
var prevCounts = parseInt(e.field(integers));
var imageCounts = primes.length;
var indexs = prevCounts % imageCounts;
if (indexs == 0) {
  e.set(integers, 1);
  exit();
} 
if (indexs < 0) {
  indexs += imageCounts;
}  
var newPrimes = shiftArray(indexs, primes);
var newCapts = shiftArray(indexs, capts);
e.set(integers, 1);
e.set(imagess, newPrimes);
imgPrimes = e.images(imagess);
for (k in imgPrimes) {
  imgPrimes[k].caption = newCapts[k];
} 
function shiftArray(ind, arr) {
  var ar1 = arr.slice(- ind).reverse();
  var ar2 = arr.slice(0, imageCounts - ind).reverse();
  return [].concat(ar2, ar1).reverse(); 
}
}).width(90),

ui().button('sh').action(function() {
entry().show()
}).width(120),

ui().button('zd').action(function() {
libByName("zadania terminarz zajęć prac zadań zadania").show()
}).width(120),

ui().button('zab').action(function() {
var url = ("tasker://secondary?text=zablokujekran");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();}).width(185),
]).horizontal(),

ui().layout([
ui().button("cop").action(function() {
var toCopy = ui().findByTag('name').text
var wpis = libByName("search").findByKey("kopiuj do schowka");
wpis.set("copy to clipboard",toCopy)
message(wpis.field("copy to clipboard"))
ui().findByTag('name').text = ""
}).width(148),

ui().button("wkl").action(function() {
var wpis = libByName("search").findByKey("kopiuj do schowka").field("copy to clipboard");
ui().findByTag('name').text = wpis
message(toto)
}).width(150),

ui().button("los").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
message(search1.length);
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
let entries = libByName(search1[nr].field("nazwa")).entries();
let numberOfEntries = entries.length;
let selection =  getRandomInteger(numberOfEntries);
let e = entries[selection];
e.show()
}
else 
var search2 = libByName("important").find(name0)
var libA = search2[0].field("nazwa")
message(libA)
var lib1 = libByName(libA)
var search1 = lib1.find(ui().findByTag('name').text)
message(search1.length);
search1[nr].show()
        return true; 
    }).width(141),

ui().button('t').action(function() {
var calp = ui().findByTag('name3').text
ui().findByTag('name3').text = "t"
}).width(120),

ui().button("dz").action(function() {
libByName("dziennik").show()
}).width(130),

ui().button("0").action(function() {
libByName("dziennik").entries()[0].show()
}).width(100)

]).horizontal(),

ui().layout([
ui().button('g').action(function() {
var edittag = ui().findByTag('name').text;
if (edittag == "p")
{
var google = ("tasker://secondary?text=pogodagoogle2024");
var i = intent("android.intent.action.VIEW"); i.data(google);
i.send()
}
else if (edittag == "po")
{
edittag = "pogoda"
var google = ("https://www.google.com/search?q=" + edittag);
var i = intent("android.intent.action.VIEW"); i.data(google);
i.send()
}
else {
var google = ("https://www.google.com/search?q=" + edittag);
var i = intent("android.intent.action.VIEW"); i.data(google);
i.send();
}
return true; }
).width(100),

ui().button('s').action(function() {
var bib = ui().findByTag('name2').text
if (bib == "" && ui().findByTag('name').text == ""){
lib().show()
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "szukajwlib")
intview.send()
}
else if(
ui().findByTag('name').text == ""
)
{
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name2').text)
message(search1.length);
libByName(search1[0].field("nazwa")).show()
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "szukajwlib")
intview.send()
}
else
{
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "zaznaczselectmemento")
intview.send()
}
return true; }

).width(120),

ui().button('w').action(function() {
var bib = ui().findByTag('name2').text
if (bib == "" && ui().findByTag('name').text == ""){
lib().show()
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "szukajwlibWklej")
intview.send()
}
else if(
ui().findByTag('name').text == ""
)
{
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name2').text)
message(search1.length);
libByName(search1[0].field("nazwa")).show()
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "szukajwlibWklej")
intview.send()
}
else 
{
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");
intview.data(linkt + "zaznaczselectmemento")
intview.send()
}
return true; }
).width(120),
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
ui().button('szwim').action(function() { 
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
message(search1.length);
libByName(search1[nr].field("nazwa")).show()
}
else 
var search2 = libByName("important").find(name0)
var libA = search2[0].field("nazwa")
message(libA)
var lib1 = libByName(libA)
var search1 = lib1.find(ui().findByTag('name').text)
message(search1.length);
search1[nr].show()
        return true; 
}).width(230),

ui().button('pkt').action(function() {
libByName("punkty mapa GPS lokalizacje").show()}
).width(150),

ui().button('a').action(function() {
libByName("akcesoria sprzęt sportowy memento").show()}
).width(100),
]).horizontal(),
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
ui().layout([
ui().button("p3").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var calp = ui().findByTag('name3').text
if (calp == ""){
entry().images("trzecie zdjęcie")[nr].caption = ui().findByTag('name').text
message(entry().images("trzecie zdjęcie")[nr].caption)
}
else if (calp == "t" ){
ui().findByTag('name').text = entry().images("trzecie zdjęcie")[nr].caption
ui().findByTag('name3').text = ""
}       
else if (calp == "d" ){
entry().images("czwarte zdjęcie")[nr].caption = ui().findByTag('name').text

ui().findByTag('name3').text = ""
}       
else if (calp == "dk" ){
ui().findByTag('name').text = entry().images("czwarte zdjęcie")[nr].caption

ui().findByTag('name3').text = ""
}       
        return true; 
}).width(90),

ui().button("p4").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var calp = ui().findByTag('name3').text
if (calp == ""){
entry().images("czwarte zdjęcie")[nr].caption = ui().findByTag('name').text
message(entry().images("trzecie zdjęcie")[nr].caption)
}
else if (calp == "t" ){
ui().findByTag('name').text = entry().images("czwarte zdjęcie")[nr].caption
ui().findByTag('name3').text = ""
}       
        return true; 
}).width(90),

ui().button('z3').action(function() {
var t = entry().field("trzecie zdjęcie")[0]
message(t)
libByName("search").entries()[0].set("zdjęcie",t)
}).width(90),

ui().button('z4').action(function() {
var t = entry().field("czwarte zdjęcie")[0]
message(t)
libByName("search").entries()[0].set("zdjęcie drugie",t)
}).width(90),
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
ui().button("I1").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
var id = entry().images("zdjęcie")[0].caption
libByName(search1[nr].field("nazwa")).findById(id).show()
}
}).width(90),

ui().button("I2").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
var id = entry().images("zdjęcie drugie")[0].caption
libByName(search1[nr].field("nazwa")).findById(id).show()
}
}).width(90),

ui().button("I3").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
var id = entry().images("trzecie zdjęcie")[0].caption
libByName(search1[nr].field("nazwa")).findById(id).show()
}
}).width(90),

ui().button("I4").action(function() {
var nr = ui().findByTag('name2').text
if (nr == ""){
nr = 0}
var name0 = ui().findByTag('name3').text
if (name0 == ""){
var lib1 = libByName("important");
var search1 = lib1.find(ui().findByTag('name').text)
var id = entry().images("czwarte zdjęcie")[0].caption
libByName(search1[nr].field("nazwa")).findById(id).show()
}
}).width(90),

ui().button("chw3").action(function() {
var e = entry();
var images = "zdjęcie chwilowe"; 
var przechowalnia = "trzecie zdjęcie";
var prime = e.field(images);
var second = e.field(przechowalnia);
var capt = second.map(a => a.caption);
var newCapt = []
var newImages = [];
var newPrime = [];
var newSecond = [];
var imageCount = prime.length;
var secondCount = second.length;
var firstImage = prime[imageCount[0]];
second.push(prime[0]);
newSecond = second
prime.shift([0])
newPrime = prime
for (k=0; k<imageCount ; k++) {
  second[k].caption = newCapt[k];}
e.set(przechowalnia,newSecond)
e.set(images,prime)
}).width(157)
]).horizontal(),

ui().layout([
ui().button("p").action(function() {
var t = libByName("search").entries()[0].field("zdjęcie")[0]
message(t)
entry().set("zdjęcie chwilowe",t)
}).width(90),

ui().button("L").action(function() {
var t = libByName("search").entries()[0].field("zdjęcie drugie")[0]
message(t)
entry().set("zdjęcie chwilowe",t)
}).width(90),


ui().button("ch1").action(function() {
// zdj.chwilowe
var e = entry();
var images = "zdjęcie chwilowe"; 
var przechowalnia = "zdjęcie";
var prime = e.field(images);
var second = e.field(przechowalnia);
var capt = second.map(a => a.caption);
var newCapt = []
var newImages = [];
var newPrime = [];
var newSecond = [];
var imageCount = prime.length;
var secondCount = second.length;
var firstImage = prime[imageCount[0]];
second.push(prime[0]);
newSecond = second
prime.shift([0])
newPrime = prime
for (k=0; k<imageCount ; k++) {
  second[k].caption = newCapt[k];}
e.set(przechowalnia,newSecond)
e.set(images,prime)
}).width(117),

ui().button("ch2").action(function() {
// zdj.chwilowe
var e = entry();
var images = "zdjęcie chwilowe"; 
var przechowalnia = "zdjęcie drugie";
var prime = e.field(images);
var second = e.field(przechowalnia);
var capt = second.map(a => a.caption);
var newCapt = []
var newImages = [];
var newPrime = [];
var newSecond = [];
var imageCount = prime.length;
var secondCount = second.length;
var firstImage = prime[imageCount[0]];
second.push(prime[0]);
newSecond = second
prime.shift([0])
newPrime = prime
for (k=0; k<imageCount ; k++) {
  second[k].caption = newCapt[k];}
e.set(przechowalnia,newSecond)
e.set(images,prime)
}).width(117),

ui().button("wst").action(function() {
var wpis = libByName("search").findByKey("zbiorcza biblioteka")
var list = wpis.field("nazwy bibliotek")
dialog()
.text(list)
.show()
}).width(151),
//////////////////////////
//////////////////////////
ui().button("wż").action(function() {
dialog()
.view(
ui().layout([
ui().layout([
ui().button('ag').action(function() {libByName("agenda memento harmonogram terminarz kalendarz zadania").show()}).width(200),
ui().button('ogró').action(function() {libByName("mój ogród").show()}).width(200),
ui().button('tymc').action(function() {libByName("zadania teraz tymczasowe wpisy").show()}).width(200),
ui().button('szty').action(function() {
var url = ("tasker://secondary?text=szukajmemento");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(190)
]).horizontal(),

ui().layout([
ui().button('dzie').action(function() {libByName("dziennik").show()}).width(200),
ui().button('zada').action(function() {libByName("zadania terminarz zajęć prac zadań zadania").show()}).width(200),

ui().button('tymc').action(function() {libByName("zadania teraz tymczasowe wpisy").show()}).width(200),
ui().button('bib').action(function() {libByName("Biblia audio memento").show()}).width(190)
]).horizontal(),
ui().layout([
ui().button('dzie').action(function() {libByName("dziennik").show()}).width(200),
ui().button('ludz').action(function() {libByName("ludzie w miłości kontaktujący się").show()}).width(200),

ui().button('linki').action(function() {libByName("linki linki linki internet").show()}).width(200),

ui().button('mie').action(function() {libByName("podsumowania miesięcy memento").show()}).width(190)
]).horizontal(),

ui().layout([
ui().button('dzie').action(function() {libByName("dziennik").show()}).width(200),
ui().button('zada').action(function() {libByName("zadania terminarz zajęć prac zadań zadania").show()}).width(200),
ui().button('tymc').action(function() {libByName("zadania teraz tymczasowe wpisy").show()}).width(200),

ui().button('dz.0').action(function() {libByName("dziennik").entries()[0].show()}).width(100),

ui().button('pokaż').action(function() {
// pokaż notatki
var w= entry().field("notatki")
var text =   w   ;
const myd=dialog()
myd
   .text(text)
.positiveButton("OK",()=>true)
   .negativeButton(" przypisy ",() => {const myd=dialog()
myd.title("przypisy")
   .text(entry().field("przypisy osobno"))
.positiveButton("OK",()=>true)
.show()}
)
   .neutralButton("sumarum", ()=> 
{
myd.title("sumarum")
   .text(text2)
   .positiveButton(" OK ",()=>true)
   .show();
})
.autoDismiss(false)
   .show();
}).width(100)
]).horizontal(),

ui().layout([
ui().button('czyt. dnia').action(function() {
var url = ("https://opoka.org.pl/liturgia");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(300)
]).horizontal()
])
)
.show()
}).width(114),

ui().button('szty').action(function() {
var url = ("tasker://secondary?text=szukajmemento");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(165)

]).horizontal(),

ui().layout([
ui().button('aimp').action(function() {
var url = ("tasker://secondary?text=aimplaunch");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(180),

ui().button('przed').action(function() {
var url = ("tasker://secondary?text=vradioPrzedluz1minuta");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(195),

ui().button('vra').action(function() {
var url = ("tasker://secondary?text=vradio1min");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(150),
ui().button('stp').action(function() {
var url = ("tasker://secondary?text=stopVradio2task");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(150),
ui().button('usb').action(function() {
var url = ("tasker://secondary?text=usbmoviesfilemanager+");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(150)

]).horizontal()
])
)
.show()
