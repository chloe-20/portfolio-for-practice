let no, str, login_sw=0;
let i, rotate=0;
let timer=setInterval("show",10);

function show() {
    rotate+=20;
    $(".at3_wrap").css("transform","rotate("+rotate+"deg)");
    $(".at_wrap>div>div").css("transform","rotate("-rotate+"deg)");
}

window.onload=function() {
// 화면 상단에 고정
    $("html, body").animate({"scrollTop":0},10);

}


function login_check() {
    let id_len, id_email, pw_len, code;
    id_len=id.value.length;
    id_email=id.value.indexOf("@");
    pw_len=pw.value.length;
    
    if(id_len<1) {
        $(".at5_info").show();
        $(".at5_info>div").html("아이디를 입력하세요.");
        $(".at5_info>p").on("click",function() {
            $(".at5_info").hide();
        });
        id.focus();
        return;
    }
    else if(id_email<0) {
        $(".at5_info").show();
        $(".at5_info>div").html("이메일 형식이 아닙니다.");
        $(".at5_info>p").on("click",function() {
            $(".at5_info").hide();
        });
        id.value="";
        id.focus();
        return;
    }
    else if(pw_len<8){
        $(".at5_info").show();
        $(".at5_info>div").html("비밀번호는 8자 이상 입력하세요.");
        $(".at5_info>p").on("click",function() {
            $(".at5_info").hide();
        });
        pw.value="";
        pw.focus();
        return;
    }
    for(i=0; i<id_len; i++) {
        code=id.value.charCodeAt(i);
//        console.log(code);
        if(code>128) {
            $(".at5_info").show();
            $(".at5_info>div").html("한글은 아이디로 입력 할 수 없습니다.");
            $(".at5_info>p").on("click",function() {
                $(".at5_info").hide();
            });
            id.value="";
            id.focus();
            return;
        }
    }
    $(".at5").hide();
    $(".login>p").html("_Log_Out");
    login_sw=1;
    id.value=""; pw.value="";
    $(".idc").animate({"top":"0px"},200);
    $(".pwc").animate({"top":"0px"},200);
    $(".at6").show();
}

$(function() {

// header의 삼선아이콘 클릭시 nav 주메뉴 나타나는 설정
    $(".bar").on("click", function() {
        $("html, body").animate({"scrollTop":0},10);
        $("nav").animate({"left":"0"},100);
    })

// 메인화면 메세지 마우스 오버하면 한글로 나타나게 설정
    $(".main_msg1").hover(function() {
        $(this).fadeOut();
        $(".main_msg2").fadeIn(2000);        
    },function() {
        $(".main_msg2").delay(2000).fadeOut();
        $(this).delay(4000).fadeIn(2000);
    })

// nav 주메뉴 클릭시 nav 사라지고 해당 article로 연결되는 설정
    $(".menu>li").on("click", function() {
        $("nav").animate({"left":"-100%"},100);
        no=$(this).index()+1;
        $(".at").hide();
        $(".at"+no).show();
    })
// nav 주메뉴의 close 클릭시 nav 사라지는 설정
    $(".menu_close").on("click", function() {
        $("html, body").animate({"scrollTop":0},10);
        $("nav").animate({"left":"-100%"},100);
    })

// article-1 li에 그림 순서대로 넣기
    for(i=0; i<6; i++) {
        $(".at1_contents>li:eq("+i+")").css("background","url(img/mind"+i+".jpg)")
                                       .css("backgroundSize","100% 100%"); 
    }
// article-1 모달창 만들기
    $(".at1_contents>li").on("click", function() {  
        $(".at1_detail").show();
        no=$(this).index();
        $(".at1_detail_big").css("background","url(img/mind"+no+".jpg)no-repeat")
                            .css("backgroundSize","contain"); 
        $("html, body").animate({"scrollTop":0},10);
    });
// article-1 모달창 닫기 버튼
    $(".at1_close").on("click", function() {
        $(".at1_detail").hide();
    });

// article page-button
    $(".at_page_button>.left_button").on("click",function() {
        $(".at_page_end").show();
        $(".at_page_end>div").html("이전 페이지가 없습니다.");
        $(".at_page_end>p").on("click",function() {
            $(".at_page_end").hide();
        });
    });
    $(".at_page_button>.right_button").on("click",function() {
        $(".at_page_end").show();
        $(".at_page_end>div").html("다음 페이지가 없습니다.");
        $(".at_page_end>p").on("click",function() {
            $(".at_page_end").hide();
        });
    });

// article-2 at2_contents 안에 각각 li 속 첫 div 그림 순서대로 넣기
    for(i=0; i<4; i++) {
        $(".at2_contents>li:eq("+i+")>.at2_food_image").css("background","url(img/food"+i+".jpg)")
                                                        .css("backgroundSize","100% 100%"); 
    }
// article-2 at2_contents li 클릭시 at2_food 나타나기
    $(".at2_contents>li").on("click",function() {        
        no=$(this).index()+1;
        $(".at2_contents, .at2_food, .at_page_button").hide();
        $(".at2_food"+no).show();
    });
// article-2 at2_food에 close 버튼
    $(".at2_food>li:last-child").on("click",function(){
        $("html, body").animate({"scrollTop":0},10);
        $(".at2_food").hide();
        $(".at2_contents").show();
        $(".at_page_button").show();       
    });

// article-3 랜덤뽑기 돌림판
    $(".at3_wrap").css("transform","rodtate(0deg)");
    $(".start").on("click",function() {
        timer=setInterval("show()",10);
    })
    $(".stop").on("click",function() {
        clearInterval(timer);
    })
    $(".reset").on("click",function() {
        $(".part>div").html("");
    })







// article-4 delete 버튼 누르면 div 텍스트 지워지기(코드 중복되지 않게 바꾸기)
    $("#memo_reset1").on("click",function() { 
        $(".memo_area1").html("");
    })
    $("#memo_reset2").on("click",function() { 
        $(".memo_area2").html("");
    })

// article-5 로그인
    $(".login").on("click", function() {
        if(login_sw==0) {
            $(".at5_login").show();            
        }
        else {
            $(".at5_login").html("_Log_in");
            login_sw=0;
        }        
    });
//    로그인 하다가 또는 로그인 클릭만 하고 로그인 안하고 나갈때 
    $(".login_close").on("click", function() {
        $(".at5_login").hide();    
        id.value=""; pw.value="";       
        $(".idc").animate({"top":"0px"},200);
        $(".pwc").animate({"top":"0px"},200);
    });

//    로그인 체크 - 아이디 확인
    $("#id").focusin(function() {
        $(".idc").animate({"top":"-40px"},200);
    });
    $("#pw").focusin(function() {
        $(".pwc").animate({"top":"-40px"},200);
    });
    $("#login_ok").on("click", function() {
        login_check();
    });





});
