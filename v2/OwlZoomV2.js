/*  OwlZoom  : Youtube Video Zoom WebExtension
    Copyright (C) 2017  Ferris Etanish

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
   
    Note: YouTube is trademark of Google Inc. 
    This extension does NOT belong or relate to the Google Inc at all and is developed and maintained independently as a fan project.

    https://github.com/LionRoar/WebExt-OwlZoom */


var mpW,mpH,mpT,nW,nH,nL,nT,nCheck='n'
 var isNormal = true;

$(document).ready(function(){
    
    main();
	MoveAroundBtn();
	ScaleBox();
	
	
function ScaleBox(){
	
	var box1 = $('<div>',{
		'class':"ytp-popup ytp-settings-menu",
		'id':"zoomBox",
		css:{
		"width":"50%","height":"50%","background-color":"#666","opacity":"0.5",
		"border":"2px solid #FFF",'display':"none"
				
	}
		
	}).appendTo('#movie_player');
	
	var box2 = $('<div>',{
		'id':"draggedBox",
		'css':{
		"width":"50%","height":"50%","background-color":"red","opacity":"0.5"
	}
	}).appendTo(box1);
	
	$( "#draggedBox" ).draggable({containment: "parent" ,
      drag: function(){
           var $this = $(this);
            var thisPos = $this.position();
            var parentPos = $this.parent().parent().position();

            var xPos = -4*(thisPos.left - parentPos.left);
            var yPos = -4*(thisPos.top - parentPos.top);
		
		  $('video').css({left:xPos,top:yPos}); 
            }});
	
	
}	
	
	function MoveAroundBtn(){
		
		var btn = $('<button>',{
			'class':"ytp-button ytp-settings-button", 'id':"ScaleBtn",
			'aria-haspopup':"true",'aria-owns':"ytp-main-menu-id",'title':"Play Around",
			css:{'display':"none"}
			
		}).prependTo('.ytp-right-controls');
		
		var svgNS = 'http://www.w3.org/2000/svg';
		var svg =document.createElementNS(svgNS,'svg');
		svg.id='owlsvg' ;
	    svg.setAttribute('viewBox','0 0 120 120');
		svg.setAttribute('version','1.1');
		svg.style.width = '100%';
		svg.style.height = '100%'; 
			
		btn.append(svg);
		
		
		var use = $('<use>',{
			'class':"ytp-svg-shadow", 'xlink:href':"#ytp-svg-1550-z"
		}).appendTo(svg);
		
		
		var path = document.createElementNS(svgNS,'path');
		path.id='#ytp-svg-1550-z';
		path.style.fill='#fff';
		path.setAttribute('d','M 77.00,32.47            C 84.54,29.24 88.87,30.38 95.00,28.05              101.16,25.70 103.81,21.76 110.00,20.00              108.23,26.00 105.78,29.05 101.00,33.00              106.04,35.59 109.51,38.06 112.52,43.00              120.52,56.11 116.28,74.78 103.00,82.65              89.25,90.80 68.19,86.28 63.00,70.00              54.56,79.18 50.52,85.79 37.00,86.82              33.47,87.08 28.35,86.06 25.00,84.90              23.45,84.36 19.72,82.45 18.42,82.48              14.34,82.58 9.19,92.59 4.75,88.24              0.27,83.85 9.51,77.02 10.02,73.83              10.44,71.19 7.84,68.20 7.17,62.00              6.03,51.34 11.25,37.67 22.00,34.00              22.00,34.00 15.00,21.00 15.00,21.00              21.88,22.70 22.75,25.66 29.00,27.90              39.14,31.52 55.47,30.33 61.00,47.00              66.45,40.37 68.45,36.13 77.00,32.47 Z            M 21.33,43.34            C 7.10,57.26 17.64,81.32 38.00,78.82              54.11,76.83 60.49,58.61 52.35,47.00              47.66,40.31 40.91,37.86 33.00,38.31              28.57,39.12 24.67,40.07 21.33,43.34 Z            M 92.00,78.53            C 111.13,75.15 114.77,53.80 103.82,43.21              98.27,37.85 91.22,37.52 84.00,38.33              58.95,44.57 67.59,82.85 92.00,78.53 Z            M 100.83,51.09            C 101.97,53.19 101.99,55.67 101.99,58.00              101.99,64.97 99.49,69.79 92.00,70.81              73.22,73.37 69.81,48.78 88.00,44.57              92.84,44.49 98.37,46.58 100.83,51.09 Z            M 43.90,48.65            C 51.85,54.71 50.12,66.93 40.00,70.85              25.27,76.56 13.63,55.38 30.00,46.74              34.73,45.59 39.83,45.55 43.90,48.65 Z');
		svg.appendChild(path);
		
		btn.click(ScaleBoxDisplay);
		
	
}

	function ScaleBoxDisplay(e){
		
        if( $('#zoomBox').css('display') == 'none') {
			
		$('#ScaleBtn').attr('aria-expanded','true');
             $('#zoomBox').show(); 
			
		}else{		
		
           
			$('#zoomBox').hide();
		 $('#ScaleBtn').attr('aria-expanded','false');}
	}
	
	function ShowScaleBtn(){
     var popup = $('#ScaleBtn');
        if(popup.css('display') == 'none') {
			
           popup.show();
		}
	}
	function HideScaleBtn(){
     var popup = $('#ScaleBtn');
        if(popup.css('display') != 'none') {popup.hide();
		}	   
}
	
function main(){
   var ytp = $('<div>', {
                'class': "ytp-menuitem",
                'id':'leo',
                'aria-haspopup':'true',
                'role':"menuitem",
       'tabindex':"0"
                }).appendTo(".ytp-panel-menu");
    
    var ytpMnu = $('<div>', {
     'class': "ytp-menuitem-label" ,
    'text':"Zoom"}).appendTo(ytp);
    
    var ytpContent = $('<div>',{
        'class': "ytp-menuitem-content",
        'id': "mainlbl"
    }).appendTo(ytp);
    
    var Frist = $('<span>',{
        'id':"mainlbl1",
        'text':"Normal"
    }).appendTo(ytpContent);
    
    var Second = $('<span>',{
      'class':  "ytp-menu-label-secondary"
        , 'id': "mainlbl2", 'text':"100%"
    }).appendTo(ytpContent);
    
    }
    
   
    $('#leo').click(showZoomingList);
    $('#leo').mouseup(getNormalValues);
    $("[class='ytp-size-button ytp-button']").mousedown(changeView);
    $("[class='ytp-fullscreen-button ytp-button']").mousedown(changeView);
	$('#movie_player').dblclick(changeView);

    
    function ytpList(){
      var popup = $("[class='ytp-popup ytp-settings-menu']").first();
        if(popup.css('display') == 'none') {
			
           popup.show();
        }
	else {
         popup.hide();
		 
        }
    }
   
    
    function showZoomingList(){
        ytpList();
        var Zmenu = $('<div>',{
            'class':"ytp-popup ytp-settings-menu",
            'id':"leo0",
         css: {
             "width":"20%","height":"70%"
         }   
        }).appendTo('#movie_player') ;
        
        var panel = $('<div>',{
            'class':"ytp-panel",
            'id': "leo1",
            css:{
                "width":"100%",height:"100%"
            }
        }).appendTo(Zmenu);
        
        var pHead = $('<div>',{
            
            'class':"ytp-panel-header",
            css:{
                "height":"10%"
            }
        }).appendTo(panel);
        
        var title = $('<button>',{
            'id':"leo2",'class':"ytp-button ytp-panel-title",'text':"Zoom"
        }).appendTo(pHead);
        
        var HelpBtn =$('<button>',{
            'class':"ytp-button ytp-panel-options",'text':"Help",'id':"leo3"
        }).appendTo(pHead);
        
        var ListMenu = $('<div>',{
            'class':"ytp-panel-menu",
            'role':"menu",
            css:{
            "height":"85%"    
            }
        }).appendTo(panel);
        
        var item1 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom1",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item1Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"200%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item1);
        
          var item2 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom2",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item2Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"170%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item2);
        
        
        
          var item3 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom3",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item3Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"150%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item3);
        
          var item4 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom4",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item4Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"125%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item4);
       
          var item5 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom5",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item5Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"110%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item5);
        
          var item6 = $('<div>',{
            'class':"ytp-menuitem",'id':"zoom6",
            'tabindex':"0",'role':"menuitemradio"
        }).appendTo(ListMenu);
         
        var item6Lable = $('<div>',{
            'class':"ytp-menuitem-label",'text':"100%",
            css:{
                "paddingLeft":"40%"
            }
        }).appendTo(item6);
        checked();
        $('#zoom1').mousedown(Zoom2x);
        $('#zoom2').mousedown(Zoom1x7);
        $('#zoom3').mousedown(Zoom1x5);
        $('#zoom4').mousedown(Zoom1x25);
        $('#zoom5').mousedown(Zoom1x1);
        $('#zoom6').mousedown(normalMode);
        $('#leo2').mousedown(ytpList);
        $('#leo3').mouseup(HelpPanel);
		
   $(document).bind('keypress', function(event) {
    if( event.which === 66 && event.shiftKey ) {
        normalMode();
    }
});

    }
    
	function HelpPanel(){
		
		var Help = $('<div>',{
			'class':"ytp-popup ytp-settings-menu", 'id':"help",
			 'css':{
				 'width':"50%",'height':"50%"
			 }
		}).appendTo('#movie_player');
		
	var panel = $('<div>',{
		'class':"ytp-panel", 
		'css':{
			'width':"100%",'height':"100%"
		}
	}).appendTo(Help);
		
		var menu = $('<div>',{
			'class':"ytp-panel-menu", 
			'role':"menu",
			'css':{
				'height':"100%"}
		}).appendTo(panel);
		
		var mainText = $('<p>',{
			'text':"OwlZoom v2.0",
			'css':{
				'fontWeight':"900",'fontSize':"250%",
				'padding-left':"15%",'line-height':"2",
			}
		}).appendTo(menu);
		
		var Text1 = $('<p>',{
			'text':"To get back to normal size Press (Shift + b)",
			'css':{
				'fontWeight':"500",'fontSize':"120%",
				'padding-left':"10%",'line-height':"2",'color':"dodgerblue"
			}
		}).appendTo(menu);
		
		var Text2 = $('<p>',{
			'text':"TClick to get back !",
			'css':{
				'fontWeight':"500",'fontSize':"120%",
				'padding-left':"10%",'line-height':"2",'color':"dimgray"
			}
		}).appendTo(menu);
		
		$('#help').mousedown(function(){
			ytpList();
			$('#movie_player').find('#help').remove();
		});
		
		
	}
	
    function checked(){
        
        if (nCheck=='n'){$('#zoom6').attr("aria-checked","true");}
        if(nCheck=='z1'){$('#zoom1').attr("aria-checked","true");}
        if(nCheck=='z2'){$('#zoom2').attr("aria-checked","true");}
        if(nCheck=='z3'){$('#zoom3').attr("aria-checked","true");}
        if(nCheck=='z4'){$('#zoom4').attr("aria-checked","true");}
        if(nCheck=='z5'){$('#zoom5').attr("aria-checked","true");}
    }
    
    function changeView(){
        nCheck='n'; MainLable("100%");
		HideScaleBtn();
        $('#leo').mouseup(getNormalValues);
    }
    
    function getNormalValues(){
        HandOnVideo();
        nW=mpW; nH=mpH; nL=mpL; nT=mpT;
	
        $('#leo').off("mouseup");
    }
    
    $('body').mouseup(HideList);
    
    function HideList(e){
        if ($('#movie_player').has('#leo0')){
            
            $('#movie_player').find('#leo0').remove();
        }
		var popup = $('#zoomBox');
		if($(e.target).closest('#ScaleBtn').length!=0  ) {return false;}
		else if ( $(e.target).closest('#zoomBox').length!=0){}
		else if(popup.css('display') != 'none')
		{
      
         popup.hide();
		 $('#ScaleBtn').attr('aria-expanded','false');
        }
		
    }

    function HandOnVideo(){
    mpW =  $('video').width();
    mpH = $('video').height();
    mpL =   parseInt($('video').css('left'));
    eight=   parseInt($('video').css('left'));
    mpT =   parseInt($('video').css('top'));
		
    }
    
    function Zoom2x(){
        nCheck='z1';
        $('video').width(mpW*2);
        $('video').height(mpH*2);
		$('video').css({left:nL,top:nT});  
        MainLable("200%"); ytpList();
        isNormal =false;
       oeightrmal =false;
        ytpScales();
		$('#draggedBox').css({width:"50%"});
		$('#draggedBox').css({height:"50%"});
        ShowScaleBtn();

	}
    function Zoom1x7(){
        nCheck='z2';
        $('video').width(mpW*1.7);
        $('video').height(mpH*1.7);
		$('video').css({left:nL,top:nT});  
        MainLable("170%"); ytpList();
        isNormal =false;
        ytpScales();
			$('#draggedBox').css({width:"58.82%"});
			$('#draggedBox').css({height:"58.82%"});
        ShowScaleBtn();

	}
    function Zoom1x5(){
        nCheck='z3';
        $('video').width(mpW*1.5);
        $('video').height(mpH*1.5);
		$('video').css({left:nL,top:nT});  
        MainLable("150%"); ytpList();
        isNormal =false;
        ytpScales();
			$('#draggedBox').css({width:"66.67%"});
			$('#draggedBox').css({height:"66.67%"});
    ShowScaleBtn();
	}
    
    function Zoom1x25(){
        nCheck='z4';
        $('video').width(mpW*1.25);
        $('video').height(mpH*1.25);
		$('video').css({left:nL,top:nT});  
        MainLable("125%"); ytpList();
        isNormal =false;
        ytpScales();
			$('#draggedBox').css({width:"80%"});
			$('#draggedBox').css({height:"80%"});
	ShowScaleBtn();
	}
    
    function Zoom1x1(){
        nCheck='z5';
        $('video').width(mpW*1.1);
        $('video').height(mpH*1.1);
		$('video').css({left:nL,top:nT});  
        MainLable("110%"); ytpList();
        isNormal =false;
        ytpScales();
			$('#draggedBox').css({width:"90.91%"});
			$('#draggedBox').css({height:"90.91%"});
        ShowScaleBtn();
    }
function normalMode(){
nCheck='n';
$('video').width(nW);
$('video').height(nH);
$('video').css({left:nL,top:nT});  
MainLable("100%"); ytpList();
   isNormal = true;
	HideScaleBtn();

}

function ytpScales(){
mpW = nW ;
mpH = nH ;
mpL = nL ;
mpT = nT ;
}
    
    function MainLable(str){
        if(str=='100%'){ 
			
            		 $('#mainlbl2').text(str);
                      if ($('#mainlbl').find('#mainlbl1').length){	}else{
					 $('<span>',{
                         'id':"mainlbl1",
                        'text':"Normal"
                     }).appendTo('#mainlbl');
					  
							}
                       }
        else {
        $('#mainlbl2').text(str);
            
            if($('#mainlbl').has('#mainlbl1')){
          
                $('#mainlbl').find('#mainlbl1').remove();
                
            }
                           
                           
                       }
        
    }
    
});