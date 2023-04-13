let i, no, str, cc=0, sub_no, pos;
let timer=setInterval("show()", 5000);

const menuA={
    "main_menu":["logo","ABOUT","SHOP","COMMUNITY",
                    "정기배송","공지사항","이벤트"],
    "sub_menu1":["True_Self_Time","오시는 길","메뉴안내"],
    "sub_menu2":["스페셜티","커피팩/선물세트","커피용품"],
    "sub_menu3":["커피 매거진","질문과 답변","구매 후기"],
    "sub_menu4":["로그인","회원가입","주문조회","마이페이지"],

    "mob_main":["ABOUT","SHOP","COMMUNITY","정기배송","공지사항",
                "이벤트","로그인","회원가입","주문조회","마이페이지","장바구니"]
}

const mainA={
    "main1_image":["main1.png","main2.png","main3.png"],

    "main3_best1_img":["bean1.jpg","bean2.jpg","bean3.jpg"],           
    "main3_best1_title":["에피오피아 예가체프 아리차 G1 내추럴",
                        "과테말라 우에우에테낭고 와이칸",
                        "인도네시아 수마트라 가요 쁘가싱 더블워시드"],
    "main3_best1_info":["&#35;크랜베리 &#35;블루베리 &#35;화사한 여운",
                        "&#35;바닐라 &#35;초코 &#35;달달하고 깨끗한",
                        "&#35;군고구마 &#35;오렌지 &#35;부드러운 질감"],    
    "main3_best1_price":["13,000원","13,000원","13,000원"],
    
    "main3_best2_img":["shop1.jpg","shop2.jpg","shop3.jpg"],
    "main3_best2_title":["칼리타 - FP 102 필터 브라운",
                        "폰타노 - 우드 핸드밀 KH-3",
                        "폰타노 - 우드 인덕션 드립포트 600ml"],
    "main3_best2_info":["4,900원","25,900원","18,000원"],
    "main3_best2_price":["2~4인용 100매","",""],

    "main4_img":["cm1.jpg","cm2.jpeg","cm3.jpeg","cm4.jpeg"], 
    "main4_title":["비와 커피 이야기","커피하우스 이야기","커피는 정말 뼈건강에 해로울까?","졸음퇴치 Coffee Nap을 아시나요?"],
    "main4_mores":["view more &#43;","view more &#43;","view more &#43;","view more &#43;"]
}

const pageA={
    "at4_img":["pack1.jpg","pack2.jpg","pack3.jpg","pack4.jpg","pack5.jpg","pack6.jpg"],
    "at4_title":["에디오피아 예가체프 게뎁 반코 고티티 G1 내추럴","엘살바도르 핀카 에스코시아 SL34 에어로빅 내추럴",
                "디카페인 콜롬비아 수프리모 산어거스틴","인도네시아 수마트라 가요 쁘가싱 더블워시드",
                 "과테말라 우에우에테낭고 와이칸","에티오피아 예가체프 아리차 G1 내추럴"],
    "at4_info":["&#35;플로럴 &#35;망고 &#35;쥬시 &#35;복합성","&#35;짙은 시트러스 &#35;견과류 &#35;살구",
                "&#35;캐러멜 &#35;꿀 &#35;오렌지 &#35;밀크초콜릿","&#35;군고구마 &#35;오렌지 &#35;초코바 &#35;견과류 &#35;부드러운 질감",
                "&#35;바닐라 &#35;초코 &#35;몹시달다 &#35;깨끗하다","&#35;크랜베리 &#35;블루베리 &#35;화사한 여운"],
    "at4_price":["15,000원","16,000원","13,000원","14,000원","13,500원","12,000원"],
    at4_comp:[15000,16000,13000,14000,13500,12000],

    "at5_img":["sp1.jpg","sp2.jpg"],
    "at5_title":["스페셜티 데일리팩","스페셜티 원두 선물세트"],
    "at5_info":["30g x 7ea (다양한 스페셜티를 한박스 안에)","200g x 2ea (선물박스포장)"],
    "at5_price":["18,500원 [10%] → 16,600원 ","26,000원"],
    at5_comp:[16600,26000],

    "at6_img":["at6_1.jpg","at6_2.jpg","at6_3.jpg","at6_4.jpg","at6_5.jpg","at6_6.jpg","at6_7.jpg","at6_8.jpg"],
    "at6_title":["[칼리타] 102LD 도자기 드리퍼(브라운)","[칼리타] 101LD 도자기 드리퍼(브라운)",
                 "[폰타노] 우드 인덕션 드립포트 600ml","[폰타노] 우드 핸드밀 KH-3",
                 "[칼리타] FP 104 필터 브라운 ","[칼리타] FP 103 필터 브라운 ",
                 "[칼리타] FP 102 필터 브라운 ","[칼리타] FP 101 필터 브라운 "],
    "at6_info":["2~4인용","1~2인용 브라운","","",
                "7~12인용 100매","4~7인용 100매","2~4인용 100매","1~2인용 100매"],
    "at6_price":["12,800원","11,800원","18,000원","25,900원",
                 "8,500원","6,000원","4,900원","4,500원"],
    at6_comp:[12800,11800,18000,25900,8500,6000,4900,4500],

    "at7_record":["바라보다 2021-01-26 18:28:26","바라보다 2021-01-26 18:25:51",
                  "바라보다 2021-01-26 14:18:47","바라보다 2021-01-26 14:18:38"]
}

// main_wrap 속 main1의 안에 있는 ul 셋인터벌로 그림 변경
function show() {
    $(".main1_img").animate({"left":"-=100%"},3000, function() {
        $(".main1_img li:first").appendTo(".main1_img");
        $(".main1_img").css("left", "+=100%");
    })
    if(cc<2) {
        cc++;
        $(".main1_radio li").css("background","white")
        $(".main1_radio li:eq("+cc+")").css("background","#ccc")
    }
    else {
        cc=-0;
        $(".main1_radio li").css("background","white")
        $(".main1_radio li:eq("+cc+")").css("background","#ccc")
    }           
}


window.onload=function() {
    // 메인메뉴 제이슨 배열로 텍스트 넣기
    for(i=0; i<menuA.main_menu.length; i++)
        $("nav>.menu li:eq("+i+")").html(menuA.main_menu[i]);
    // 서브메뉴 제이슨 배열로 텍스트 넣기
    for(i=0; i<menuA.sub_menu1.length; i++)
        $("nav>.main_sub1>li:eq("+i+")").html(menuA.sub_menu1[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $("nav>.main_sub2>li:eq("+i+")").html(menuA.sub_menu2[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $("nav>.main_sub3>li:eq("+i+")").html(menuA.sub_menu3[i]);
    for(i=0; i<menuA.sub_menu4.length; i++)
        $("nav>.main_sub7>li:eq("+i+")").html(menuA.sub_menu4[i]);
    
    // 모바일메뉴 제이슨 배열로 텍스트 넣기
    for(i=0; i<menuA.mob_main.length; i++)
        $(".mob_menu>li:eq("+i+")").html(menuA.mob_main[i]);
    // 모바일 서브메뉴 제이슨 배열로 텍스트 넣기
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub1>li:eq("+i+")").html(menuA.sub_menu1[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub2>li:eq("+i+")").html(menuA.sub_menu1[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub3>li:eq("+i+")").html(menuA.sub_menu1[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub4>li:eq("+i+")").html(menuA.sub_menu2[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub5>li:eq("+i+")").html(menuA.sub_menu2[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub6>li:eq("+i+")").html(menuA.sub_menu2[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub7>li:eq("+i+")").html(menuA.sub_menu3[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub8>li:eq("+i+")").html(menuA.sub_menu3[i]);
    for(i=0; i<menuA.sub_menu1.length; i++)
        $(".mob_sub9>li:eq("+i+")").html(menuA.sub_menu3[i]);
    
    // quick menu
    // upDown();
    // function upDown() {
    //     $("#quick_menu").animate({"marginTop":100},1000).animate({"marginTop":120},1000,upDown);
    // }
    
    // main1 에 들어가는 그림
    for(i=0; i<mainA.main1_image.length; i++) {
       str=$(".main1_img li:eq("+i+")").css("background","url(img/"+mainA.main1_image[i]+")")
                                         .css("backgroundSize","100% 100%");
    }
   
    // main3 에 들어가는 그림과 텍스트
    $(".main3_menu li:last-child").css("color","gray");
    for(i=0; i<3; i++) {
        $(".main3_img"+(i+1)).css("background","url(img/"+mainA.main3_best1_img[i]+")")
                             .css("backgroundSize","100% 100%");
        $(".main3_title"+(i+1)).html(mainA.main3_best1_title[i]); 
        $(".main3_info"+(i+1)).html(mainA.main3_best1_info[i]);
        $(".main3_price"+(i+1)).html(mainA.main3_best1_price[i]);
    }
       
    // main4 에 들어가는 그림과 텍스트
    for(i=0; i<mainA.main4_img.length; i++) {
        $(".main4_content li:eq("+i+") div").css("background","url(img/"+mainA.main4_img[i]+")")
                                            .css("backgroundSize","100% 100%"); 
        $(".main4_text"+(i+1)).html(mainA.main4_title[i]);
        $(".main4_more"+(i+1)).html(mainA.main4_mores[i]);
    }

    // article - 4 list li 에 들어가는 그림과 텍스트
    for(i=0; i<pageA.at4_img.length; i++) {         
        $(".at4_list_img"+(i+1)).css("background","url(img/"+pageA.at4_img[i]+")")
                            .css("backgroundSize","100% 100%"); 
        $(".at4_list_title"+(i+1)).html(pageA.at4_title[i]);
        $(".at4_list_info"+(i+1)).html(pageA.at4_info[i]);
        $(".at4_list_price"+(i+1)).html(pageA.at4_price[i]);
    }
    init();

    // article - 5 list li 에 들어가는 그림과 텍스트
    for(i=0; i<pageA.at5_img.length; i++) {
        $(".at5_list_img"+(i+1)).css("background","url(img/"+pageA.at5_img[i]+")")
                            .css("backgroundSize","100% 100%"); 
        $(".at5_list_title"+(i+1)).html(pageA.at5_title[i]);
        $(".at5_list_info"+(i+1)).html(pageA.at5_info[i]);
        $(".at5_list_price"+(i+1)).html(pageA.at5_price[i]);
    }

    // article - 6 list li 에 들어가는 그림과 텍스트
    for(i=0; i<pageA.at6_img.length; i++) {
        $(".at6_list_img"+(i+1)).css("background","url(img/"+pageA.at6_img[i]+")")
                            .css("backgroundSize","100% 100%"); 
        $(".at6_list_title"+(i+1)).html(pageA.at6_title[i]);
        $(".at6_list_info"+(i+1)).html(pageA.at6_info[i]);
        $(".at6_list_price"+(i+1)).html(pageA.at6_price[i]);
    }

    // article - 7 에 들어가는 그림과 텍스트
    for(i=0; i<mainA.main4_img.length; i++) {
        $(".at7_content li:eq("+i+") div").css("background","url(img/"+mainA.main4_img[i]+")")
                                            .css("backgroundSize","100% 100%"); 
        $(".at7_title"+(i+1)).html(mainA.main4_title[i]);
        $(".at7_text"+(i+1)).html(pageA.at7_record[i]);
    }

}

function init() {
    for(i=0; i<pageA.at4_img.length; i++) {
        $(".at4_list_img"+(i+1)).css("background","url(img/"+pageA.at4_img[i]+")")
                            .css("backgroundSize","100% 100%"); 
        $(".at4_list_title"+(i+1)).html(pageA.at4_title[i]);
        $(".at4_list_info"+(i+1)).html(pageA.at4_info[i]);
        $(".at4_list_price"+(i+1)).html(pageA.at4_price[i]);
    }
}


$(function() {
    // 각 article에 들어가는 footer 내용 ajax로 넣기
    $.ajax({
        url:"foot.html",success: function(result) 
        {
            $(".foot").html(result);
        }  
     })  
   

    // quick menu
    $(window).scroll(function() {
        pos=parseInt( $(window).scrollTop() ); // 현재 스크롤값       
    
        $("#quick_menu").animate({"top": (pos+350)+"px"},100);
    //        console.log(pos);
    });
    $(".quick_top").on("click",function() {
        $(window).scrollTop(0); 
    })
    $(".quick_bottom").on("click",function() {
        $(window).scrollTop(3500); 
    })
    
    // PC버젼 주메뉴 hover하면 해당 sub menu 나타나기
    $(".main_sub").hide();
    $(".menu li").hover(function() {
        no=$(this).index();  
        $(".main_sub").hide();
        $(".main_sub"+no).show();       
    },function() {
        $(".main_sub"+no).delay(2000).fadeOut(); 
    })
    $(".menu li").on("click",function() {
        $(".main_sub").hide();
        $(".main_wrap").hide();
        $("footer").hide();
        $("section").show();
        $(".at").hide();
        no=$(this).index();
        if(no==0) {                   
            $(".main_wrap").show();
        }
        else if(no==1) {                   
            $(".at1").show();
        }
        else if(no==2) {                   
            $(".at4").show();
        }
        else if(no==3) {                   
            $(".at7").show();
        }
        else if(no==4) {                   
            $(".at14").show();
        }
        else if(no==5) {                   
            $(".at15").show();
        }
        else if(no==6) {                   
            $(".at16").show();
        }
        else if(no==7) {                   
            $(".at12").show();
        }
        else if(no==8) {                   
            $(".at15").show();
        }
        else if(no==9) {                   
            $(".at18").show();
        }
    })
    // PC버젼 서브메뉴 클릭하면 해당 아티클 나타나기
    $(".main_sub li").on("click",function() { 
        $(".main_sub").hide();
        $(".main_wrap").hide();
        $("section").show();
        no=$(this).attr("class").substr(3,2);
        $(".at").hide();       
        $(".at"+no).show();
        if(no==13) {
            alert("로그인 하셔야 합니다.");
            $("section").hide();
            $(".main_wrap").show();
        }
    }) 
    

    // 모바일 버젼
    $("header div:nth-child(3)").on("click",function() {
        $("nav").css("height","500px");
    })
    $("nav .mob_menu_close").on("clink",function() {
        $("nav").css("height","0px");
    })
    $(".mob_menu li").on("click",function()  {     
        $(".main_wrap").hide();
        $("nav").css("height","0px");
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at1").show();
        }            
        else if(no==1) {
            $(".at4").show();
        }           
        else if(no==2) {
            $(".at7").show();
        }
        else if(no==3) {
            $(".at14").show();
        }
        else if(no==4) {
            $(".at15").show();
        }
        else if(no==5) {
            $(".at16").show();
        }
        else if(no==6) {
            $(".at10").show();
        }
        else if(no==7) {
            $(".at11").show();
        }
        else if(no==8) {
            $(".at12").show();
        }
        else if(no==9) {
            alert("로그인 하셔야 합니다.");
            $("section").hide();
            $(".main_wrap").show();
            // $(".at13").show();
        } 
        else if(no==10) {
            $(".at17").show();
        }
        else if(no==11) {
            $(".at18").show();
        }   
    })
   

    // 모바일버젼 서브메뉴 클릭하면 해당 아티클 나타나기
    $(".mob_sub1 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at1").show();
        }
        else if(no==1) {
            $(".at2").show();
        }
        else if (no==2) { 
            $(".at3").show();
        }
    })
    $(".mob_sub2 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at1").show();
        }
        else if(no==1) {
            $(".at2").show();
        }
        else if (no==2) { 
            $(".at3").show();
        }
    })
    $(".mob_sub3 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at1").show();
        }
        else if(no==1) {
            $(".at2").show();
        }
        else if (no==2) { 
            $(".at3").show();
        }
    })
    $(".mob_sub4 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at4").show();
        }
        else if(no==1) {
            $(".at5").show();
        }
        else if (no==2) { 
            $(".at6").show();
        }
    })
    $(".mob_sub5 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at4").show();
        }
        else if(no==1) {
            $(".at5").show();
        }
        else if (no==2) { 
            $(".at6").show();
        }
    })
    $(".mob_sub6 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at4").show();
        }
        else if(no==1) {
            $(".at5").show();
        }
        else if (no==2) { 
            $(".at6").show();
        }
    })
    $(".mob_sub7 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at7").show();
        }
        else if(no==1) {
            $(".at8").show();
        }
        else if (no==2) { 
            $(".at9").show();
        }
    })
    $(".mob_sub8 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at7").show();
        }
        else if(no==1) {
            $(".at8").show();
        }
        else if (no==2) { 
            $(".at9").show();
        }
    })
    $(".mob_sub9 li").on("click",function() {
        no=$(this).index();
        $("section").show();
        $(".at").hide();        
        if(no==0) {
            $(".at7").show();
        }
        else if(no==1) {
            $(".at8").show();
        }
        else if (no==2) { 
            $(".at9").show();
        }
    })

    // 메인화면
    // main2 view more 클릭하면 해당 콘텐츠 나타나기
    $(".main2_more").on("click",function() {
        $(".main_sub").hide();
        $(".main_wrap").hide();
        $("section").show();
        $(".at").hide();       
        $(".at1").show();
    })

    // main3 메뉴 li 클릭하면 해당 콘텐츠 나타나기
    $(".main3_menu li").on("click", function(){
        $(".main3_menu li").css("color","#ccc");
        no=$(this).index()+1;
        $(this).css({"color":"black","fontWeight":"bold"});
        if(no==1) { 
            for(i=0; i<3; i++) { 
                $(".main3_img"+(i+1)).css("background","url(img/"+mainA.main3_best1_img[i]+")").css("backgroundSize","100% 100%");
                $(".main3_title"+(i+1)).html(mainA.main3_best1_title[i]);
                $(".main3_info"+(i+1)).html(mainA.main3_best1_info[i]);
                $(".main3_price"+(i+1)).html(mainA.main3_best1_price[i]);
            }
        }
        else if(no==2) { 
            for(i=0; i<3; i++) {
                $(".main3_img"+(i+1)).css("background","url(img/"+mainA.main3_best2_img[i]+")").css("backgroundSize","100% 100%");
                $(".main3_title"+(i+1)).html(mainA.main3_best2_title[i]);
                $(".main3_info"+(i+1)).html(mainA.main3_best2_info[i]);
                $(".main3_price"+(i+1)).html(mainA.main3_best2_price[i]);
            }
        }
    })

    // main5 view more 클릭하면 해당 콘텐츠 나타나기
    $(".main5_more").on("click",function() {
        $(".main_sub").hide();
        $(".main_wrap").hide();
        $("section").show();
        $(".at").hide();       
        $(".at9").show();
    })

    // article - 4,5,6 에 서브메뉴 클릭하면 해당 콘텐츠 나타나기
    $(".at_shop_sub_menu li").on("click",function() {
        no=$(this).index();
        if(no==0) {
            $(".at").hide();
            $(".at4").show();
        }
        else if(no==1) {
            $(".at").hide();
            $(".at5").show();
        }
        else {
            $(".at").hide();
            $(".at6").show();
        }
    })

    // article - 4,5,6 에 sort 메뉴 클릭하면 해당 콘텐츠 나타나기
    $(".at_shop_sorts li").on("click",function() {
        $(".at").hide();
        no=$(this).index();
            if(no==3) {
                $(".at4").show();
                low_sort();
            }
            else if(no==4) {
                $(".at4").show();
                high_sort();
            }
            else
                alert("죄송합니다. 서비스 준비중입니다.");
                $(".at4").show();
    })
})

// article - 4,5,6 에 sort 낮은가격, 높은가격
function low_sort() {
    let mpt; // sort 할 가상공간
    for(i=0; i<pageA.at4_price.length; i++) { // 0 번째 일 때
        for(k=0; k<pageA.at4_price.length; k++) { // 0 1 2 3 4 5 번째와 비교
            if(pageA.at4_comp[i]<pageA.at4_comp[k]) {
                // 숫자 비교한 내용
                mpt=pageA.at4_comp[i];
                pageA.at4_comp[i]=pageA.at4_comp[k];
                pageA.at4_comp[k]=mpt;
                // 그림 위치 서로 바꾸기
                mpt=pageA.at4_img[i];
                pageA.at4_img[i]=pageA.at4_img[k];
                pageA.at4_img[k]=mpt;
                // 그림 위치 서로 바꾸기
                mpt=pageA.at4_title[i];
                pageA.at4_title[i]=pageA.at4_title[k];
                pageA.at4_title[k]=mpt;
                // 설명 위치 서로 바꾸기
                mpt=pageA.at4_info[i];
                pageA.at4_info[i]=pageA.at4_info[k];
                pageA.at4_info[k]=mpt;
                // 가격 위치 서로 바꾸기
                mpt=pageA.at4_price[i];
                pageA.at4_price[i]=pageA.at4_price[k];
                pageA.at4_price[k]=mpt;
            }
        }
    }
    // alert(pageA.at4_comp);
    // alert(pageA.at4_img);
    // alert(pageA.at4_title);
    // alert(pageA.at4_info);
    // alert(pageA.at4_price);
    init();
}
function high_sort() {
    let mpt; // sort 할 가상공간
    for(i=0; i<pageA.at4_price.length; i++) { // 0 번째 일 때
        for(k=0; k<pageA.at4_price.length; k++) { // 0 1 2 3 4 5 번째와 비교
            if(pageA.at4_comp[i]>pageA.at4_comp[k]) {
                // 숫자 비교한 내용
                mpt=pageA.at4_comp[i];
                pageA.at4_comp[i]=pageA.at4_comp[k];
                pageA.at4_comp[k]=mpt;
                // 그림 위치 서로 바꾸기
                mpt=pageA.at4_img[i];
                pageA.at4_img[i]=pageA.at4_img[k];
                pageA.at4_img[k]=mpt;
                // 그림 위치 서로 바꾸기
                mpt=pageA.at4_title[i];
                pageA.at4_title[i]=pageA.at4_title[k];
                pageA.at4_title[k]=mpt;
                // 설명 위치 서로 바꾸기
                mpt=pageA.at4_info[i];
                pageA.at4_info[i]=pageA.at4_info[k];
                pageA.at4_info[k]=mpt;
                // 가격 위치 서로 바꾸기
                mpt=pageA.at4_price[i];
                pageA.at4_price[i]=pageA.at4_price[k];
                pageA.at4_price[k]=mpt;
            }
        }
    }
    init();
}