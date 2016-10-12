console.log("hey");

    $.getJSON("json.json", function(result){
        console.log(result);
        var recette = result;
        var projet = recette.projet;
        var pitch = recette.pitch;
       
    
     $( ".pj-title" ).html(recette.projet);
    
    $( ".pitch" ).html(recette.pitch); 
for(var i=0;i<recette.cycle.length;i++){
var num = recette.cycle[i].num;
var debut = recette.cycle[i].debut;
 console.log(debut);
var fin = recette.cycle[i].fin;

        $( ".pv" ).append('<div class="panel panel-default"><div class="panel-heading">Cycle N°'+num+' </div><div class="panel-body" id="cycle'+num+'">Debut: '+debut+'<br>Fin: '+fin+'</div></div>');



  for(var y=0;y<recette.cycle[i].metiers.length;y++){
var nc= recette.cycle[0].num;
        
        var name = recette.cycle[y].metiers[y].name;
        console.log(name);
        var positif = recette.cycle[y].metiers[y].positif;
        var negatif = recette.cycle[y].metiers[y].negatif;
        var todo = recette.cycle[y].metiers[y].todo;
        var done = recette.cycle[y].metiers[y].done;
        var doing = recette.cycle[y].metiers[y].doing;
var n= i+1;

 $( "#cycle"+n ).append('<div class="panel panel-default"><div class="panel-heading">'+name+'</div><div class="panel-body">positif: '+positif+'<br>negatif: '+negatif+'<br>Afaire: '+todo+'<br>fait: '+done+'<br>modifier: '+doing+'<br></div></div>');



}
}  /*
     console.log("gg");
        var nc= recette.cycle[0].num;
        
        var name = recette.cycle[0].metiers[0].name;
        console.log(name);
        var positif = recette.cycle[0].metiers[0].positif;
        var negatif = recette.cycle[0].metiers[0].negatif;
        var todo = recette.cycle[0].metiers[0].todo;
        var done = recette.cycle[0].metiers[0].done;
        var doing = recette.cycle[0].metiers[0].doing;

        var newmetier =  {
                   "name":name,
                    "positif":positif,
                    "negatif":negatif,
                    "todo":todo,
                    "done":done,
                    "doing":doing
                 };         
console.log(nc);
var n= nc;
 $( "#cycle"+n ).append('<div class="panel panel-default"><div class="panel-heading">'+name+'</div><div class="panel-body">positif: '+positif+'<br>negatif: '+negatif+'<br>Afaire: '+todo+'<br>fait: '+done+'<br>modifier: '+doing+'<br></div></div>');
nc = nc - 1;
console.log(nc);
pv.cycle[nc].metiers.push(newmetier);
console.log(pv);
console.log(JSON.stringify(pv));


*/
    });
/*var projet = document.getElementById('projet').value;
var pitch = document.getElementById('pitch').value;
var num = document.getElementById('num').value;
var debut = document.getElementById('debut').value;
var fin = document.getElementById('fin').value;
var name = document.getElementById('name').value;
var positif = document.getElementById('positif').value;
var negatif = document.getElementById('negatif').value;
var todo = document.getElementById('todo').value;
var done = document.getElementById('done').value;
var doing = document.getElementById('doing.').value;
*/
/*
var f = "5";
var n = f.charCodeAt(0)
var nm= f - 1;
console.log(nm)

var pv;
function createP(){
    var projet = document.getElementById('projet').value;
    var pitch = document.getElementById('pitch').value;
    pv = {
           "projet" : projet,
           "pitch" : pitch,
           "cycle" : [
             
           ] 
          };
    console.log(pv);    
    
     $( ".pj-title" ).html(pv.projet);
    $( ".pitch" ).html(pv.pitch);  
    return (pv);
}
function createG(){

var num = document.getElementById('num').value;
var debut = document.getElementById('debut').value;
 console.log(debut);
var fin = document.getElementById('fin').value;
var newcycle = {"num":num,
               "debut":debut,
               "fin":fin,
               "metiers":[
                 
               ]};

pv.cycle.push(newcycle);

        $( ".pv" ).append('<div class="panel panel-default"><div class="panel-heading">Cycle N°'+num+' </div><div class="panel-body" id="cycle'+num+'">Debut: '+debut+'<br>Fin: '+fin+'</div></div>');
  
    
}

function createC(){
     console.log("gg");
        var e = document.getElementById("name");
        var nc = document.getElementById("nc").value;
        var name = e.options[e.selectedIndex].text;
        console.log(name);
        var positif = document.getElementById('positif').value;
        var negatif = document.getElementById('negatif').value;
        var todo = document.getElementById('todo').value;
        var done = document.getElementById('done').value;
        var doing = document.getElementById('doing').value;

        var newmetier =  {
                   "name":name,
                    "positif":positif,
                    "negatif":negatif,
                    "todo":todo,
                    "done":done,
                    "doing":doing
                 };         
console.log(nc);
var n= nc;
 $( "#cycle"+n ).append('<div class="panel panel-default"><div class="panel-heading">'+name+'</div><div class="panel-body">positif: '+positif+'<br>negatif: '+negatif+'<br>Afaire: '+todo+'<br>fait: '+done+'<br>modifier: '+doing+'<br></div></div>');
nc = nc - 1;
console.log(nc);
pv.cycle[nc].metiers.push(newmetier);
console.log(pv);
    }
function show(){
   
    
}


   


/*

var projet = document.getElementById('projet').value;
var pitch = document.getElementById('pitch').value;

pv.cycle.push(newcycle);

=======
$.getJSON('data.json', function(data) {
    //do stuff with your data here
});

var projet = document.getElementById('projet').value;
console.log(project);
var pitch = document.getElementById('pitch').value;
var num = document.getElementById('num').value;

var pv = {
 "projet" : projet,
 "pitch" : pitch,
 "cycle" : [

 ] 
};
var newcycle = {"num":num,
"debut":"date",
"fin":"date",
"metiers":[

]};
var newmetier =     {
 "name":"graph",
 "positif":"boop",
 "negatif":"Clouds",
 "a_faire":"broken clouds",
 "fait":"04d",
 "pvalidé":"Clouds"
};         

var projet = document.getElementById('projet').value;
var pitch = document.getElementById('pitch').value;

pv.cycle.push(newcycle);
>>>>>>> origin/master
//pv.cycle[1].metiers.push(newmetier);

console.log(pv);
/*
var recette = new Object()
  recette.pitch = "projet"
  
var cycle = new Object()
  cycle.num = 2
  cycle.debut = "today"
  cycle.fin = "demain"

var metier = new Object()
  metier.nom = "graph"
  metier.positif = "test"
  metier.negatif = 'bla'
  metier.todo="blabla"
  metier.doing="drra"
  metier.done="boop"
cycles.metiers = new Array(metiers)
recette.cycles = new Array(cycle)

console.log(recette)
<<<<<<< HEAD
*/
