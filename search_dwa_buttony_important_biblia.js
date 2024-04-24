dialog()

.view(

ui().layout([
ui().layout([
ui().button('in').action(function() {libByName("inside").show()}).width(200),
ui().button('im').action(function() {libByName("important").show()}).width(200),
ui().button('mem').action(function() {libByName("memento open").show()}).width(200),
ui().button('lib').action(function() {lib().show()}).width(190),

]).horizontal (),

ui().button('szukaj w biblii').action(function() { 
        

var lib1 = libByName("Biblia audio memento");
//lib1.show();
//message(lib1.entries().length);
//var zguba = arg("fjgg")
var search1 = lib1.find(ui().findByTag('name').text)

var tyu = search1[0].field("nazwa")


message(search1.length);
//message(search1[0].field("całość rozdziału"));
//entry().set("notatki",search1[0].field("całość rozdziału"))

//search1[0].show()

search1[0].show()


//lib().create({ 'nazwa': ui().findByTag('name').text })
        return true; 
    }).width(779),

    ui().edit('').tag('name'), 

    ui().button('szukaj').action(function() { 
        

var lib1 = libByName("important");
//lib1.show();
//message(lib1.entries().length);
//var zguba = arg("fjgg")


//var zbiór = for (var  ent = 0; ent >  lib1.entries().length; ent++){lib1.entries()[ent].field("tekst do wyszukiwania") }


var search1 = lib1.find(ui().findByTag('name').text)

//var search55 = zbiór.find(ui().findByTag('name').text)

//var tyu = search1[0].field("nazwa")

message(search1.length);
//message(search1[0].field("całość rozdziału"));
//entry().set("notatki",search1[0].field("całość rozdziału"))

//search1[0].show()
//function findAll(str,find) {
  //return str.find(new RegExp(find, 'g'); }
//let filter = search1.filter(item => item.field('nazwa') != "ludzie w miłości kontaktujący się");
libByName(search1[0].field("nazwa")).show()
//libByName(filter[0].field("nazwa")).show()


//lib().create({ 'nazwa': ui().findByTag('name').text })
        return true; 
    }).width(779).height(300),

ui().button('zablokuj').action(function() {var url = ("tasker://secondary?text=zablokujekran");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();}).width(777),

])
)
.show()




