function w(vd)
{
  var ob = document.getElementById(vd);
  if(ob.style.display=="block" || ob.style.display=="")
  {
     ob.style.display="none";
     var ob2=document.getElementById('s'+vd);
     ob2.style.backgroundImage="url(../images/left_off.png)";
     ob2.style.color="#a61719";
  }
  else
  {
    ob.style.display="block";
    var ob2=document.getElementById('s'+vd);
    ob2.style.backgroundImage="url(../images/left_on.png)";
    ob2.style.color="#a61719";
  }
}
function k(vd)
{
  var ob=document.getElementById(vd);  
  if(ob.style.display=="block")
  {
     ob.style.display="none";
     var ob2=document.getElementById('s'+vd);
     ob2.style.backgroundImage="url(../images/left_off.png)";
  }
  else
  {
    ob.style.display="block";
    var ob2=document.getElementById('s'+vd);
    ob2.style.backgroundImage="url(../images/left_on.png)";
  }
}
