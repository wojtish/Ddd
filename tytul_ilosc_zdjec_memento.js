// tytuł_ilosc_zdjec_memento.js
var e = entry();
var n = e.field("nazwa");
var z1 = e.field("ilość zdjęć lista")
var z3 = e.field("ilość zdjęć lista trzy")

i = intent("android.intent.action.SEND");
i.mimeType("text/plain");
i.extra("android.intent.extra.TEXT",n);
//i.extra("package:ClipboardManager");
//i.send();
//cancel();
//exit();
message(n + " " + z1 +" "+ z3)
