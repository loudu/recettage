var projet = document.getElementById('projet').value;
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
*/
