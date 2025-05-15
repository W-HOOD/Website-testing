var x=[];
var y=[];
var power=1
main()
function main(){
var button = document.querySelector("button");
button.onclick = function Hello(){
  x=[]
  y=[]
    power =parseInt(prompt("Please enter power", "2"))
    for (i=-1000;i<1000;i++ ) {
      x.push(i)
      y.push(i**(power))
      }
      new Chart("graph", {
        type: "line",
        data: {
          labels: x,
          datasets: [{
            backgroundColor:"rgba(255,255,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: y
          }]
        },
        options:{}
      });
}
}