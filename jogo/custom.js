const player = document.querySelector('.player');
const main = document.querySelector('.main');

function test(){
    main.focus();
}
console.log();
var y=0;
var x=0;

document.addEventListener('keypress', function(e){
    
    if(e.key=='s' && y!=400){
        y+=20;
        player.style.top=y+'px';
    }

    else if(e.key=='d' && x!=400){
        x+=20;
        player.style.left=x+'px';
    }

    else if(e.key=='a' && x!=0 ){
        x-=20;
        player.style.left=x+'px';
    }

    else if(e.key=='w' && y>=20){
        y-=20;
        player.style.top=y+'px';
    }
});
