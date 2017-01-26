var mpW ,mpH,mpL,mpT,nW,nH,nL,nT,nCheck='n';
var isNormal = true;
main();
function main() {
    var ytp = document.createElement('div');
        ytp.className = 'ytp-menuitem';
        ytp.id = 'leo';
        ytp.setAttribute("aria-haspopup", "true");
        ytp.setAttribute("role", "menuitem");
        ytp.setAttribute("tabindex", "0");
    document.getElementsByClassName('ytp-panel-menu')[0].appendChild(ytp);
    var ytpMnu = document.createElement('div');
    ytpMnu.className = 'ytp-menuitem-label';
    ytpMnu.innerHTML= 'Zoom';
    ytp.appendChild(ytpMnu);
    var ytpCnt = document.createElement('div')
     ytpCnt.className ='ytp-menuitem-content';
     ytpCnt.id = 'mainlbl';
      ytp.appendChild(ytpCnt);
     var Fst = document.createElement('span');
         Fst.id ='mainlbl1';
         Fst.innerHTML='Normal';
         ytpCnt.appendChild(Fst);
      var Sec = document.createElement('span');
         Sec.className = 'ytp-menu-label-secondary';
         Sec.id= 'mainlbl2'
         Sec.innerHTML = '100%';
         ytpCnt.appendChild(Sec); 
    
    
        } 
function ytpList(){
var dis = document.getElementsByClassName('ytp-popup ytp-settings-menu')[0];
dis.style.display = dis.style.display === 'none' ? '' : 'none' ;
}
document.getElementById('leo').addEventListener("click", showZoomList); 
document.getElementById('leo').addEventListener("mouseup", normalValues);
document.getElementsByClassName('ytp-size-button ytp-button')[0].addEventListener("mousedown",changeView);
document.getElementsByClassName('ytp-fullscreen-button ytp-button')[0].addEventListener("mousedown",changeView);

function changeView(){
    nCheck='n';mainlbl("100%");isNormal = true;
document.getElementById('leo').addEventListener("mouseup", normalValues);
}

function normalValues(e){
    handOnVideo();
    nW = mpW; nH=mpH; nL=mpL; nT=mpT;
    document.getElementById('leo').removeEventListener("mouseup", normalValues);
   }

function showZoomList(){

    ytpList(); 
    
var mnu = document.createElement('div');
mnu.className = 'ytp-popup ytp-settings-menu';
mnu.id = 'leo0';
mnu.style.width = '20%';
mnu.style.height = '70%' ;
document.getElementById('movie_player').appendChild(mnu);
var pnl = document.createElement('div');
pnl.className = 'ytp-panel';
pnl.id='leo1';
pnl.style.width =  '100%' ;
pnl.style.height= '100%' ;
mnu.appendChild(pnl);

var hdr = document.createElement('div');
hdr.className = 'ytp-panel-header';
    hdr.style.height=  '10%';
pnl.appendChild(hdr);
var titl = document.createElement('button');
titl.id = 'leo2';
titl.className = 'ytp-button ytp-panel-title';
titl.innerHTML = 'Zoom';
hdr.appendChild(titl)
var opt = document.createElement('button');
opt.id ='leo3';
opt.className = 'ytp-button ytp-panel-options';
opt.innerHTML = 'Help?';
hdr.appendChild(opt);
var pMnu = document.createElement('div');
pMnu.className = 'ytp-panel-menu';
pMnu.setAttribute("role","menu");
pMnu.style.height = '85%';

pnl.appendChild(pMnu);
var itm1 = document.createElement('div');
itm1.className = 'ytp-menuitem';
itm1.id = 'zoom1';
itm1.setAttribute("tabindex","0");
itm1.setAttribute("role","menuitemradio");
pMnu.appendChild(itm1);
var itm1lbl = document.createElement('div');
itm1lbl.className = 'ytp-menuitem-label' ;
itm1lbl.innerHTML = '200%' ;
itm1lbl.style.paddingLeft= '50px';
itm1.appendChild(itm1lbl);

var itm2 = document.createElement('div');
itm2.className = 'ytp-menuitem';
itm2.id = 'zoom2';
itm2.setAttribute("tabindex","0");
itm2.setAttribute("role","menuitemradio");
pMnu.appendChild(itm2);
var itm2lbl = document.createElement('div');
itm2lbl.className = 'ytp-menuitem-label' ;
itm2lbl.innerHTML = '170%' ;
itm2lbl.style.paddingLeft= '50px';
itm2.appendChild(itm2lbl);

var itm3 = document.createElement('div');
itm3.className = 'ytp-menuitem';
itm3.id = 'zoom3';
itm3.setAttribute("tabindex","0");
itm3.setAttribute("role","menuitemradio");
pMnu.appendChild(itm3);
var itm3lbl = document.createElement('div');
itm3lbl.className = 'ytp-menuitem-label' ;
itm3lbl.innerHTML = '150%' ;
itm3lbl.style.paddingLeft= '50px';
itm3.appendChild(itm3lbl);

var itm4 = document.createElement('div');
itm4.className = 'ytp-menuitem';
itm4.id = 'zoom4';
itm4.setAttribute("tabindex","0");
itm4.setAttribute("role","menuitemradio");
pMnu.appendChild(itm4);
var itm4lbl = document.createElement('div');
itm4lbl.className = 'ytp-menuitem-label' ;
itm4lbl.innerHTML = '125%' ;
itm4lbl.style.paddingLeft= '50px';
itm4.appendChild(itm4lbl);

var itm5 = document.createElement('div');
itm5.className = 'ytp-menuitem';
itm5.id = 'zoom5';
itm5.setAttribute("tabindex","0");
itm5.setAttribute("role","menuitemradio");
pMnu.appendChild(itm5);
var itm5lbl = document.createElement('div');
itm5lbl.className = 'ytp-menuitem-label' ;
itm5lbl.innerHTML = '110%' ;
itm5lbl.style.paddingLeft= '50px';
itm5.appendChild(itm5lbl);

var itm6 = document.createElement('div');
itm6.className = 'ytp-menuitem';
itm6.id = 'zoom6';
itm6.setAttribute("tabindex","0");
itm6.setAttribute("role","menuitemradio");
pMnu.appendChild(itm6);
var itm6lbl = document.createElement('div');
itm6lbl.className = 'ytp-menuitem-label' ;
itm6lbl.innerHTML = '100%' ;
itm6lbl.style.paddingLeft= '50px';
itm6.appendChild(itm6lbl);

    checked();
document.getElementById('zoom1').addEventListener('mousedown', Zoom2x );
document.getElementById('zoom2').addEventListener('mousedown', Zoom1x7 );
document.getElementById('zoom3').addEventListener('mousedown', Zoom1x5 );
document.getElementById('zoom4').addEventListener('mousedown', Zoom1x25 );
document.getElementById('zoom5').addEventListener('mousedown', Zoom1x1 );
document.getElementById('zoom6').addEventListener('mousedown', normalMood );
document.getElementById('leo2').addEventListener('mousedown', ytpList );
document.getElementById('leo3').addEventListener('mouseup', helpMenu );

}

function checked(){
if(nCheck=='n'){document.getElementById('zoom6').setAttribute("aria-checked","true")}
if(nCheck=='z1'){document.getElementById('zoom1').setAttribute("aria-checked","true")}
if(nCheck=='z2'){document.getElementById('zoom2').setAttribute("aria-checked","true")}
if(nCheck=='z3'){document.getElementById('zoom3').setAttribute("aria-checked","true")}    
if(nCheck=='z4'){document.getElementById('zoom4').setAttribute("aria-checked","true")}
if(nCheck=='z5'){document.getElementById('zoom5').setAttribute("aria-checked","true")}       
}

document.body.addEventListener("mouseup",noShow);

function noShow (e){

  var nChild=document.getElementById('movie_player');
    if (nChild.contains(document.getElementById('leo0')))
 { document.getElementById('movie_player').removeChild(document.getElementById('leo0'));} 
 
}
document.onkeydown=function(event){


  
if (event.altKey && event.shiftKey && event.keyCode == 37)
{
  scaleLeft();
}
    if (event.altKey && event.shiftKey && event.keyCode == 38)
{
  scaleUp();
}
    if (event.altKey && event.shiftKey && event.keyCode == 39)
{
  scaleRight();
}
    if (event.altKey && event.shiftKey && event.keyCode == 40)
{
  scaleDown();
}
 if (event.shiftKey && event.keyCode == 66)
{
  normalMood();
}
   }

function toInt(str){
    var res = parseInt(str.replace("px",""));
    return res ;
}
function handOnVideo(){
var mP = document.getElementsByTagName("video")[0];
mpW = toInt(mP.getBoundingClientRect().width.toString());
mpH = toInt(mP.getBoundingClientRect().height.toString());
mpL = toInt(mP.style.left);
mpT = toInt(mP.style.top);
}
function Zoom2x(){
nCheck='z1';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = mpW*2+"px";
mP.style.height= mpH*2+"px";  
mainlbl("200%"); ytpList();
isNormal = false;
origrinalScale();
                     }
function Zoom1x7(){
nCheck='z2';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = mpW*1.7+"px";
mP.style.height= mpH*1.7+"px";
mainlbl("170%"); ytpList();
    isNormal = false;
origrinalScale();
                     }    
function Zoom1x5(){
nCheck='z3';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = mpW*1.5+"px";
mP.style.height= mpH*1.5+"px";
mainlbl("150%"); ytpList();
   isNormal = false;
origrinalScale();
                     }
function Zoom1x25(){
nCheck='z4';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = mpW*1.25+"px";
mP.style.height= mpH*1.25+"px";
mainlbl("125%"); ytpList();
    isNormal = false;
origrinalScale();
                     }
function Zoom1x1(){
nCheck='z5';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = mpW*1.1+"px";
mP.style.height= mpH*1.1+"px";
mainlbl("110%"); ytpList();
   isNormal = false;
origrinalScale();
                     }
function scaleLeft(){
    if(!isNormal){
var mP = document.getElementsByTagName("video")[0];
mP.style.left = (mpL++) +'px';}}
function scaleRight(){
    if(!isNormal){
var mP = document.getElementsByTagName("video")[0];
mP.style.left = (mpL--) +'px';}
}
function scaleUp(){
       if(!isNormal){
var mP = document.getElementsByTagName("video")[0];
mP.style.top = (mpT++) +'px';}
}
function scaleDown(){
   if(!isNormal){
var mP = document.getElementsByTagName("video")[0];
mP.style.top = (mpT--) +'px';}
}
function origrinalScale(){
var mP = document.getElementsByTagName("video")[0];
mpW = nW ;
mpH = nH ;
mpL = nL ;
mpT = nT ;
}
function normalMood(){
nCheck='n';
var mP = document.getElementsByTagName("video")[0];
mP.style.width = nW +'px';
mP.style.height= nH +'px';
mP.style.left  = nL +'px';
mP.style.top   = nT +'px';
mainlbl("100%"); ytpList();
    isNormal = true;
}
function mainlbl(str){
    if(str=="100%"){
   document.getElementById('mainlbl2').innerHTML = str;
    if (!document.getElementById('mainlbl').contains(document.getElementById('mainlbl1')))
        {
            
        var Fst = document.createElement('span');
         Fst.id ='mainlbl1';
         Fst.innerHTML='Normal';
        document.getElementById('mainlbl').appendChild(Fst);
            
        }
    }
    else{
          document.getElementById('mainlbl2').innerHTML = str;
   
       if (document.getElementById('mainlbl').contains(document.getElementById('mainlbl1')))
           {
           document.getElementById('mainlbl').removeChild(document.getElementById('mainlbl1'));
           }
}
}
function helpMenu(){
var hmnu = document.createElement('div');
hmnu.className = 'ytp-popup ytp-settings-menu';
hmnu.id = 'help';
hmnu.style.width = '50%';
hmnu.style.height = '70%' ;
document.getElementById('movie_player').appendChild(hmnu);
var hpnl = document.createElement('div');
hpnl.className = 'ytp-panel';
hpnl.style.width =  '100%' ;
hpnl.style.height= '100%' ;
hmnu.appendChild(hpnl);
var hpMnu = document.createElement('div');
hpMnu.className = 'ytp-panel-menu';
hpMnu.setAttribute("role","menu");
hpMnu.style.height = '100%';
hpnl.appendChild(hpMnu);
var mTxt = document.createElement('p');
mTxt.style.fontWeight = '900';
mTxt.style.fontSize = '250%';
mTxt.style.paddingLeft = '40%';
mTxt.style.lineHeight = '2';
mTxt.innerHTML = 'Owl help';
hpMnu.appendChild(mTxt);
var txt1 = document.createElement('p');
txt1.style.fontWeight = '500';
txt1.style.fontSize = '120%';
txt1.style.paddingLeft = '10%';
txt1.style.lineHeight = '2';
txt1.innerHTML = '1. Scale around the video by pressing <br> (Shift + Alt + [The arrow key for direction])';
hpMnu.appendChild(txt1);
var txt2 = document.createElement('p');
txt2.style.fontWeight = '500';
txt2.style.fontSize = '120%';
txt2.style.paddingLeft = '10%';
txt2.style.lineHeight = '2';
txt2.innerHTML = '2. To get back to normal size Press (Shift + b)';
hpMnu.appendChild(txt2);
var txt3 = document.createElement('p');
txt3.style.fontWeight = '400';
txt3.style.fontSize = '120%';
txt3.style.paddingLeft = '10%';
txt3.style.color = 'dodgerblue';
txt3.style.lineHeight = '2';
txt3.innerHTML = 'On Normal (100%) size you can\'t scale the video!';
hpMnu.appendChild(txt3);
var txt4 = document.createElement('p');
txt4.style.fontWeight = '500';
txt4.style.fontSize = '150%';
txt4.style.paddingLeft = '30%';
txt4.style.color = 'dimgray';
txt4.style.lineHeight = '2';
txt4.innerHTML = 'Click to get back !';
hpMnu.appendChild(txt4);

hmnu.addEventListener("mousedown",function(){
    ytpList();
    document.getElementById('movie_player').removeChild(document.getElementById('help'));
});


}
