
var up = document.getElementById('GFG_UP'); 
  
up.innerHTML = "Click on button to get the" 
    + " number of days in specified month"; 
      
var down = document.getElementById('GFG_DOWN');  
  
function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 
  
function GFG_Fun() { 
    var date = new Date(); 
    var month = 5; 
    var year = 2020; 
    down.innerHTML = "Number of days in " + month 
                 + "nd month of the year " + year 
                 +" is "+ daysInMonth(month, year); 
}   
