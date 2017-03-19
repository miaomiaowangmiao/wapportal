	
	document.documentElement.style.fontSize=innerWidth/10+"px";
	window.onresize=function(){
		document.documentElement.style.fontSize=innerWidth/10+"px";
	}
 function goback () {
            api.closeWin();
}
function buyTickt(event,url,name,pageParam){
             event.stopPropagation();  
       		       api.openWin({
	                      name: name,
	                      url: url,
	                      rect: {
		                      x:0,
		                      y:0,
		                      w:'atuo',
		                      h:'auto'
	                      },
	                      pageParam:pageParam,
	                      animation:{type:"none",                //动画类型（详见动画类型常量）
                                    subType:"from_right",       //动画子类型（详见动画子类型常量）
                                    duration:500               //动画过渡时间，默认300毫秒}
                                    }
                      });
}
// 解决状态栏重合，并优化fixStatusBar代码,Android4.4版本以上添加25px

 function fixStatusBar(headerid, callback) {
                        var header = $api.byId(headerid);
                        var systemType = api.systemType;
                        var systemVersion = parseFloat(api.systemVersion);
                        if (systemType == "ios" || (systemType == "android" && systemVersion >= 4.4)) {
                                if (systemType == "android") {
                                        header.style.paddingTop = '25px';
                                }
                                $api.fixStatusBar(header);
                        } else {
                                $api.fixIos7Bar(header);
                        }
                        var headerPos = $api.offset(header);
                        if ( typeof callback == "function") {
                                callback(headerPos);
                        }
                }
                
 
// 判断打开欢迎页还是直接进首页调出indexframegroup
//var indexOrWelcome = function(){
//
////  if($api.getStorage('firstStart')){
////      api.setFrameGroupAttr({
////          name: 'welcome',
////          hidden:true
////      });
////      api.setFrameAttr({
////          name: 'dot_slider',
////          hidden:true
////      });
//      api.execScript({
//          name: 'root',
//          script: 'switchframe();'
//      });
////  } else {
////      fn && fn();
////  }
//};
//    主页menu切换
var changeIndexMenu = function(num){
    api.setFrameGroupIndex ({
        name: 'index_frameGroup',
        index: num,
        scroll: true
    });
};
   // 隐藏所有的一级frame
    function hideAllFrame()
    {
        api.setFrameAttr({
            name: 'movie',
            hidden:true
        });
        api.setFrameAttr({
            name: 'cinema',
            hidden:true
        });
        api.setFrameAttr({
            name: 'activities',
            hidden:true
        });
        api.setFrameAttr({
            name: 'mine',
            hidden:true
        });
        api.setFrameAttr({
            name: 'willbe',
            hidden:true
        });
    }
// var ajax=function(){
// var str;
// api.ajax({
//  url: 'http://cinema.dadicinema.com/film/getHitFilm?cinemaCode=78654908&pageSize=10&pageNo=1',
//  method: 'get',
//  data: {
////      values: {
////          name: 'haha'
////      },
////      files: {
////          file: 'fs://a.gif'
////      }
//  }
//}, function(msg, err) {
//  $.each(msg.d,function(i,ele) {
//              str += '<li><a class="item">'
//                  + '<img class="J_ImgLoad" src="./image/ferryman.gif">'
//                  + '<div class="cont">'
//                  + '<h4 class="movie_init">'
//                  + '<span class="movie_name">' + ele.name + '</span>'
//              if(ele.dimensionalList[0]=="3D") {
//                  str += ' <span class="movie_tag"><img src="./image/3D.png" class="D_3"></span>'
//              }
//              str += '</h4>'
//              if(ele.score!="未评分"||!ele.yearn){
//                  + '<div class="count_star">'
//                  + '<ul class="star">'
//                  + '<li class="icon_star"></li>'
//                  + '<li class="icon_star"></li>'
//                  + '<li class="icon_star"></li>'
//                  + '<li class="icon_star"></li>'
//                  + '<li class=""></li>'
//                  + '</ul>'
//                  str+= '<span class="score">'+ele.score+'</span>'
//                      + '</div>'
//              }else{
//                  str += '<p><span>'+ele.yearn+'</span>人想看</p>'
//              }
//
//              str+= '<p class="desc">'+ele.summaryClob+'</p>'
//                  + '<p class="status">今天174家影院放映1796场</p>'
//                  + '<span class="info">'
//              if(ele.hitOrPresell==1) {
//                  str += '<a class="btn-trans"></a>'
//              }else{
//                  str += '<a class="btn-trans"></a>'
//              }
//              + '</span>'
//              + '</div>'
//              + '</a>'
//              + '</li>'
//          })
//          $('.movie_list').html(str);
//          
//	    
//	});
// }

