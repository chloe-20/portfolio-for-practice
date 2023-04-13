let no, str, sw=0;

const chart_titleA=["Multidisciplinary Designer","Web Programming Language","Graphic and Video Software"]
const chart_valueA=["DESIGN<br>75","ILLUSTRATION<br>70","CODE<br>80","ANIMATION<br>65",
                    "HTML<br>80","CSS<br>75","JAVASCRIPT<br>70","JQUERY<br>70",
                    "PHOTOSHOP<br>70","ILLUSTRATOR<br>75","PREMIERE<br>80","AFTER EFFECTS<br>75"]
const chart_percentA=[75, 70, 80, 65, 80, 75, 70, 70, 70, 75, 80, 75]

//아티클-2,3 아이콘 클릭시 해당 detail 사라지는 설정
function detail_close_func() {
  web_detail_1.style.display="none";
  web_detail_2.style.display="none";
  web_detail_3.style.display="none";
  web_detail_4.style.display="none";
  web_detail_5.style.display="none";
  video_detail_1.style.display="none";
  video_detail_2.style.display="none";
  video_detail_3.style.display="none";
  video_detail_4.style.display="none";
  video_detail_5.style.display="none";
}

// 처음부터 적용되는 명령문
window.onload=function() {
  upDown();
  function upDown() {
      $(".my_icon").animate({"marginBottom":20},1000).animate({"marginBottom":40},1000,upDown);
  }
  
}

// 클릭시 적용되는 명령문
$(function() {
  
  // 홈버튼 클릭시 나머지 아티클 none 설정
  $(".logo").on("click", function() {
    $(".main_img").show();
    $(".at").hide();
    $(".card").hide();
  })

  // 주메뉴 클릭시 해당 아티클 보이고 나머지 아티클과 메인화면 none 설정
  $("nav>div").on("click", function() {
    no=$(this).index()+1;
    $(".at").hide();
    $(".at"+no).show();
    if(no==5)
      $(".card").show();
      $(".card_close").on("click",function() {
        $(".card").hide();
      })
  })

  //메뉴-1과 연결되는 아티클-1 스위치 방식 icon
  $(".my_box").hide();
    $(".my_icon").on("click", function() {
        if(sw==0) {
          $(".my_box").show();
          sw=1;
          $(this).css("color","#9fd3e3");
          $(".my_icon p").html("Turn Off");
        }
        else {
          $(".my_box").hide();
          sw=0;
          $(this).css("color","#392f2f");
          $(".my_icon p").html("Turn On");
        }        
    })
      
  // 메뉴-1과 연결되는 아티클-1 
    for(i=0; i<12; i++) {
      $(".x_bar"+(i+1)).html( chart_valueA[i]+"%" );
      $(".x_bar"+(i+1)).delay(300).animate({"height":chart_percentA[i]*3.5},500);
    }
    
    let at1_count=1;
    $(".btn_left").on("click", function() {
      $(".my_box_stick").hide();
      if(at1_count>1)
        at1_count--;
      else 
        $(".chart_end").show(500);
      no=at1_count;
      $(".my_box_stick"+no).show();
      $(".chart_title").html(chart_titleA[(no-1)]);

      for(i=1; i<=12; i++) {
          $(".x_bar"+i).animate({"height":"10px"},50);
          $(".x_bar"+i).delay(500).animate({"height":chart_percentA[(i-1)]*4 },500);
      }
    })

    $(".btn_right").on("click", function() {
      $(".my_box_stick").hide();
      if(at1_count<3)
        at1_count++;
      else 
          $(".chart_end").show(500);
      no=at1_count;
      $(".my_box_stick"+no).show();
      $(".chart_title").html(chart_titleA[(no-1)]);

      for(i=1; i<=12; i++) {
          $(".x_bar"+i).animate({"height":"10px"},50);
          $(".x_bar"+i).delay(500).animate({"height":chart_percentA[(i-1)]*4 },500);
      }
    })
    
    $(".chart_end").on("click", function() {
      $(this).hide();
    })

//메뉴-2와 연결되는 아티클-2 web_img 클릭시 해당 web_detail 나타내기
    $("#web_img li").on("click", function() {
      no=$(this).index()+1;
      $(".web_detail").hide();
      $("#web_detail_"+no).show();
    })
  
//메뉴-3과 연결되는 아티클-3 video_img 클릭시 해당 video_detail 나타내기
    $("#video_img li").on("click", function() {
        no=$(this).index()+1;
        $(".video_detail").hide();
        $("#video_detail_"+no).show();        
    })  

})