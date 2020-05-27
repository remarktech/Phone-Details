  function calculatePpe(){
      var height=document.getElementById("height").value;
      var width=document.getElementById("width").value;
      var diagonal=document.getElementById("diagonal").value;

      var ppi= Math.sqrt((height*height)+(width*width))/diagonal;
      document.getElementById("pixel").value=ppi.toFixed(2);
  }