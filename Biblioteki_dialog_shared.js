//ui().text('Hello, world!');
//https://groups.google.com/g/mementodatabase/c/IAv_aBSGfXw/m/FzKdl4cMAgAJ

//https://wiki.mementodatabase.com/index.php?title=Memento_JavaScript_Library#Object_Dialog

var entries = lib().entries();
const arr = ["Present", "Absent", "Sick", "Field", "Night Duty"];

//showDialog(entries);
//function showDialog(entries) {
//var e = entries.shift();
//var name = e.field('Name');

var myCBox = ui().choiceBox(0, arr);
var hhh = ui().text('Hello, world!');
var myDialog = dialog();

myDialog.title("name")
    //.view(myCBox)
     // .view(hhh)
    //.show();
//dialog()

.view(
ui().layout([

ui().text('Hello').font({ size: 20, color: 'red', style: 'bold' }),
ui().text('This is a text label'),

ui().button('zadania terminarz').action(function() { libByName("zadania terminarz zajęć prac zadań zadania").show() }),

ui().image('https://zwierzakinadpotokiem.pl/wp-content/uploads/2024/02/Mloda-bogatka-1024x815.jpg').width(300).height(200)
])
)

.show()

//ui().button('Button').width(100).height(50).tag('button1');
