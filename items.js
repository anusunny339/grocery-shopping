
    var xhttp= new XMLHttpRequest();
    
    xhttp.onreadystatechange= function()
    {
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            console.log(response);
            var Jitems=response.items;
            console.log(Jitems);
            var output="<table class='table  table-striped table-hover active-animation'><tr><th>SERIAL NO</th><th>NAME</th><th>QUANITY</th><th>UNIT</th><th>DEPARTMENT</th><th>NOTE</th></tr>"
            
            for(var i=0;i<Jitems.length;i++){
            output +="<tr><td>"+Jitems[i].serialno+"</td><td>"+Jitems[i].name+"</td><td>"+Jitems[i].quanity+"</td><td>"+Jitems[i].unit+"</td><td>"+Jitems[i].department+"</td><td>"+Jitems[i].notes+"</td></tr>";
            }
            output +="</table>";
            console.log(output)
           document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","items.json",true);
    xhttp.send();
    