function SumOfSeries(){
   var res = document.getElementById('result');
  var f = new Array(12);   
  
  f[0] = 0;
  f[1] = 1;
  var sum=0;

  for (var i = 2; i < 12; i++) 
  { 
      f[i] = f[i-1] + f[i-2];
  } 
  
  for(var i=0;i<12;i++){
      sum+=f[i];
  }
  res.innerHTML=sum;
}
