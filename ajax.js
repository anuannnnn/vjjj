function ajax()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState==4&&this.status==200)
        {
            var response = JSON.parse(this.responseText);
            var output ="";
            for(var i=0;i<response.length;i++){
                
           output += "<li>"+"<input type='checkbox' class='chk' >"+response[i].title+"</td>";
         
          if(response[5].title)
          {
              alert("ii");
          }
           
           
    }
        document.getElementById("demo").innerHTML=output;
    }
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhttp.send();
}


// function ajax() {

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
    
//         if (this.readyState==4&&this.status==200) {
    
//             var response = JSON.parse(this.responseText);
//             // console.log(response); 
//             var output ="";
            
//             for(var i=0;i<responce.length;i++){
//                 output += "<li>"+"<input type='checkbox' class='chk'>"+response[i].title+"</td>";
//             }
        
//             document.getElementById("demo").innerHTML=output;
//         }
    
        
//     }
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
//     xhttp.send();
    
        
//     }