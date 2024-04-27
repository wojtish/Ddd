dialog()
.view(
ui().layout([

ui().layout([
ui().button('in').action(function() {libByName("inside").show()}).width(200),
ui().button('im').action(function() {libByName("important").show()}).width(200),
ui().button('mem').action(function() {libByName("memento open").show()}).width(200),
ui().button('lib').action(function() {lib().show()}).width(190),
]).horizontal(),


ui().layout([
ui().button('szukaj dz.').action(function() { 


var libs = libByName("important").entries()

//var names = libs.field("nazwa")


var search1 = libByName("dziennik").find(ui().findByTag('name').text) 
//for (i = 0; i < libs.length; i++) {
//var search1 =libByName(libs[i].field("nazwa")).find(ui().findByTag('name').text) }

message(search1.length);
search1[0].show()
        return true; 
    }).width(395),

ui().button('szukaj w biblii').action(function() { 
        
var lib1 = libByName("Biblia audio memento");
var search1 = lib1.find(ui().findByTag('name').text)

var tyu = search1[0].field("nazwa")
message(search1.length);
search1[0].show()
        return true; 
    }).width(395),
]).horizontal(),



    ui().edit('').tag('name'), 



ui().layout([
ui().button('jas').action(function() {
var url = ("tasker://secondary?text=jasnyciemnymotyw");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
}).width(200),

ui().button('mo').action(function() {


var min = Math.ceil(10000)
var max = Math.floor(1000)

for (var ent = 0; ent < lib().entries().length; ent++){    

var ggg = Math.floor(Math.random() * (max - min)) + min
var jjj = ggg / 100
var kkk = jjj.toFixed(2)

lib().entries()[ent].set("czas momentum",kkk)

}



}).width(200),

ui().button('zap').action(function() {
var note = ui().findByTag('name').text;
libByName("dziennik").entries()[0].set("zajawka",note);
libByName("dziennik").entries()[0].set("notatki",libByName("dziennik").entries()[0].field("notatki")+"\n\n"+note+"\n");

note = ""
message("saved")
return true;
}
).width(200),



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
}).width(190),

]).horizontal(),

ui().button('zablokuj').action(function() {var url = ("tasker://secondary?text=zablokujekran");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();}).width(777),


ui().button('szukaj w im').action(function() { 

var lib1 = libByName("important");

var search1 = lib1.find(ui().findByTag('name').text)

message(search1.length);

libByName(search1[0].field("nazwa")).show()

        return true; 
    }).width(779).height(300),

])
)
.show()




        
