/**
 * Created by dell on 2016/7/12.
 */
$(document).ready(function(){
    $(window).on("load",function(){
            //invoke the main function
            position();
           $(window).scroll(function(){
               var data=[
                   {"src":"1.jpg","title":"first in row 1"},
                   {"src":"2.jpg","title":"second in row 1"},
                   {"src":"3.jpg","title":"third in row 1"},
                   {"src":"4.jpg","title":"four in row 1"},
                   {"src":"5.jpg","title":"first in row 2"},
                   {"src":"6.jpg","title":"second in row 2"},
                   {"src":"7.jpg","title":"third in row 2"},
                   {"src":"8.jpg","title":"four in row 2"},
                   {"src":"9.jpg","title":"first in row 3"},
                   {"src":"10.jpg","title":"second in row 4"}
               ];
               if (slideScroll()){
                   //alert(slideScroll());
                   $.each(data,function(key,value){
                       //console.log(value.src);
                        var box=$("<div >").addClass("box").appendTo("#wrap");
                        var info=$("<div >").addClass("info").appendTo(box);
                        var pic=$("<div >").addClass("pic").appendTo(info);
                        var imgs=$("<img>").attr({"src":"img/"+$(value).attr("src")}).appendTo(pic);
                       var title=$("<div >").addClass("title").appendTo(info);
                       var imgs=$("<a>").text($(value).attr("title")).appendTo(title);
                   })
               }
               position();
        })

       $(window).resize(function(){
           position();
           //window.location.reload();
       })

    })
})

function slideScroll(){
    var docH=$(document).height();
    //alert(docH);
    var windH=$(window).height();
    //alert(windH)
    var scoTop=$(window).scrollTop();
    //alert(scoTop);
    return docH==windH+scoTop;

}
function waterfall(){
    var box=$(".box");
    var boxW=box.eq(0).width();
    //console.log(boxW);
    var num=Math.floor($(window).width() / boxW);
    console.log(num);

    var boxHArr=[];
    $("#wrap").css("width",num*300);
    box.each(function(index,value){
        var boxH=box.eq(index).height();
        if(index<num){
            $(value).removeAttr("style");
            boxHArr[index]=boxH;
        }else{
            var minH=Math.min.apply(null,boxHArr);
            var minIndex= $.inArray(minH,boxHArr);
            $(value).css({
                "position":"absolute",
                "top":minH+10,
                "left":box.eq(minIndex).position().left
            });
            boxHArr[minIndex]+=(box.eq(index).height()+10);
        }
    })
}
