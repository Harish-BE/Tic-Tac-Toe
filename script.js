function Human(){
    var cells=document.querySelectorAll(".cell");

    var state=0;
    // console.log(cells[0].id);
    var overwite=[0,0,0,0,0,0,0,0,0]
    var wincheck=[0,0,0,0,0,0,0,0,0]
    for(var i=0;i<9;i++)
    cells[i].onclick=draw;

    function checkWin(){
        var draw=true;
        var win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
        for(var i=0;i<=7;i++){
            if(wincheck[win[i][0]]==1 & wincheck[win[i][1]]==1 & wincheck[win[i][2]]==1){          
                document.getElementById("win").style.color="#A6D0DD";
                document.getElementById("win").innerHTML="winner o";
            }
            if(wincheck[win[i][0]]==2 & wincheck[win[i][1]]==2 & wincheck[win[i][2]]==2){
                document.getElementById("win").style.color="#FF6969";
                document.getElementById("win").innerHTML="winner x";
            }
            
        }  
        for(var i=0;i<=8;i++){
                if(overwite[i]!=-1)
                     draw=false;
            }
            if(draw){
            document.getElementById("win").innerHTML="Draw";
                
            }  
    }

    function draw(){
        if(overwite[this.id]==0){
            if(state==0){
            this.innerHTML="o";
            this.style.color="#A6D0DD";
            state=1;
            wincheck[this.id]=1;
            }
            else{
                this.innerHTML="x";
                this.style.color="#FF6969";
                state=0;
                wincheck[this.id]=2;
                }

            
            overwite[this.id]=-1;
            checkWin();
        }

    }

}

function Random(){
    var cells=document.querySelectorAll(".cell");
    var overwite=[0,0,0,0,0,0,0,0,0]
    var wincheck=[0,0,0,0,0,0,0,0,0]
    
    for(var i=0;i<9;i++)
    cells[i].onclick=draw;

    function checkWin(){
        var draw=true;
        var win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
        for(var i=0;i<=7;i++){
            if(wincheck[win[i][0]]==1 & wincheck[win[i][1]]==1 & wincheck[win[i][2]]==1){
                document.getElementById("win").style.color="#A6D0DD";
                document.getElementById("win").innerHTML="winner o";
                return false;
            }
            if(wincheck[win[i][0]]==2 & wincheck[win[i][1]]==2 & wincheck[win[i][2]]==2){
                document.getElementById("win").style.color="#FF6969";
                document.getElementById("win").innerHTML="winner x";
                return false;
            }
        }
        for(var i=0;i<=8;i++){
            if(overwite[i]!=-1)
                 draw=false;
        }
        if(draw){
        document.getElementById("win").innerHTML="Draw";
             return false;
        }
    return true;
        
    }


    function draw(){
        if(overwite[this.id]==0){    
            this.innerHTML="o";
            this.style.color="#A6D0DD";
            wincheck[this.id]=1;
            overwite[this.id]=-1;
            var gotit=true;
            while(checkWin() & gotit){
                const random= Math.floor(Math.random() * 9)
                if(wincheck[random]==0){
                    gotit=false;
                    cells[random].innerHTML="x"
                    cells[random].style.color="#FF6969";
                    wincheck[cells[random].id]=2;
                    overwite[cells[random].id]=-1;
                }
             }
           
            
        }
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
