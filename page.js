//table creation 
var table1=document.createElement('table');
table1.setAttribute('class','info');
table1.setAttribute('border','5');
var myhead =document.createElement('thead');

var tr1=document.createElement('tr');
var th1=document.createElement('th');
 th1.innerHTML="ID";
var th2=document.createElement('th');
 th2.innerHTML="name";
 var th3=document.createElement('th');
 th3.innerHTML="Email";
tr1.append(th1,th2,th3);
 myhead.append(tr1);


// http -request --model

//1. Create a request variable
var request = new XMLHttpRequest();
//2. Create a connection
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
//3. Send a request
request.send();
//4. Load the response
request.onload = function(){
    var data = JSON.parse(this.response);
   //console.log(data);
    
       //populationg the table with dynamically based on page no

       var b=10;
       function loaddata(x)
       {
           table1.innerHTML="";
           var mytboyd=document.createElement('tbody');
           for(var i=(x-1)*b;i<(b*x);i++)
           {
               var tra=document.createElement('tr');
               var td1=document.createElement('td');
               td1.innerHTML=data[i].id;
               var td2=document.createElement('td');
               td2.innerHTML=data[i].name;
               var td3=document.createElement('td');
               td3.innerHTML=data[i].email;
               tra.append(td1,td2,td3);
               mytboyd.append(tra);
               
           }
           table1.setAttribute('border','5');
        table1.style.backgroundColor="pink";
         table1.append(myhead,mytboyd);
         document.body.append(table1);

       }


// buttton creation
var temp=[];
for(var i=0;i<10;i++)
{
    var p=document.createElement('button');
    p.innerHTML=i+1;
    temp.push(p);
    document.body.append(p);
    }
var x1=document.createElement("BUTTON");
x1.innerHTML="First";
//temp.push(x1);
document.body.append(x1);


//load datainto the table, based on the page number clicked
temp.forEach((ele) => {
    ele.onclick=function(){
    loaddata(ele.innerHTML);
    }
});

}



// function myFunction()
//  {
//    var x1=document.createElement("BUTTON");
//    var t1 = document.createTextNode("FIRST");
//    x1.appendChild(t1);
//    document.body.appendChild(x1);
//    //x1.addEventListener('click',tab1())
//    var x2=document.createElement('BUTTON');
//    var t2 = document.createTextNode("PREVIOUS");
//    x2.appendChild(t2);
//    document.body.appendChild(x2);
//   for(var i=2; i<=10;i++)
//   {
//  var x = document.createElement("BUTTON");
//   var t = document.createTextNode(i);
//   x.appendChild(t);
//   x.setAttribute('fontface','comics sans ms')
//   document.body.appendChild(x);
//   }
//  }




//     for(var i in data){
      
//         var id = data[i].id
//         var name=data[i].name;
//        var email=data[i].email;
//        //for( var a=0;a<=10;a++)
//         //{
//         var tra=document.createElement('tr');
//         //for(var b=0;b<=3;b++)
//        // {
//         var td1=document.createElement('td');
//         var tex1=document.createTextNode=id ;
//         var td2=document.createElement('td');
//         var tex2=document.createTextNode=name;
//         var td3=document.createElement('td');
//         var tex3=document.createTextNode=email;
//         td1.append(tex1);
//         td2.append(tex2);
//         td3.append(tex3);
//         tra.append(td1,td2,td3);
//         mytboyd.append(tra);
//         }
//         table1.setAttribute('border','5');
//         table1.style.backgroundColor="pink";
//          table1.append(myhead,mytboyd);
//          document.body.append(table1);
//         console.log(data[i])
        
    
//   }