var lib = lib();
var ent = lib.entries();
var l = ent.length;


for (var j=0;j<l;j++) {
//ent[j].set("ilość zdjęć lista","(" + ent[j].field("ilość zdjęć") + "\)");


ent[j].set("ilość zdjęć lista","(" + ent[j].field("zdjęcie").length + "+" + ent[j].field("zdjęcie drugie").length + "\)");

ent[j].set("ilość zdjęć lista trzy","(" + ent[j].field("trzecie zdjęcie").length + "+" + ent[j].field("czwarte zdjęcie").length + "\)");



}

//var k = entry().field("zdjęcie").length;
//(entry().field("ilość zdjęć lista"), k)
