dialog()

.view(


ui().layout([


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
var search1 = lib1.find(ui().findByTag('name').text)

var tyu = search1[0].field("nazwa")


message(search1.length);
//message(search1[0].field("całość rozdziału"));
//entry().set("notatki",search1[0].field("całość rozdziału"))

//search1[0].show()

libByName(search1[0].field("nazwa")).show()


//lib().create({ 'nazwa': ui().findByTag('name').text })
        return true; 
    }).width(779)
])
)
.show()


