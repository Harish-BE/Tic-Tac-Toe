var cells=document.querySelectorAll(".cell");

var state=0;
// console.log(cells[0].id);
var overwite=[0,0,0,0,0,0,0,0,0]
var wincheck=[0,0,0,0,0,0,0,0,0]
for(var i=0;i<9;i++)
cells[i].onclick=draw;

function checkWin(){
    var win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
    var draw=true;
    for(var i=0;i<=7;i++){
        if(wincheck[win[i][0]]==1 & wincheck[win[i][1]]==1 & wincheck[win[i][2]]==1){
           // console.log("0 is winner");
            document.getElementById("win").innerHTML="winner 0";
        }
        if(wincheck[win[i][0]]==2 & wincheck[win[i][1]]==2 & wincheck[win[i][2]]==2){
            //console.log("x is winner");
            document.getElementById("win").innerHTML="winner x";
        }
    }

  
     
}

function draw(){
    if(overwite[this.id]==0){
        if(state==0){
        this.innerHTML="o";
        state=1;
        wincheck[this.id]=1;
        }
        else{
            this.innerHTML="x";
            state=0;
            wincheck[this.id]=2;
            }
        overwite[this.id]=-1;
        checkWin();
    }

}

function replay(){
    overwite=[0,0,0,0,0,0,0,0,0]
    wincheck=[0,0,0,0,0,0,0,0,0]
    for(var i=0;i<9;i++){
        document.getElementById(i).innerHTML="";
    }
    document.getElementById("win").innerHTML="";

}