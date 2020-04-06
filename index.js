let closedFlag = true 
let setTop 
let setOpacity
let setButtonClass 
let showCloseIcon

$(document).ready(function () {
    $(".open-call, #closeIcon").on("click", function (e) {
      e.preventDefault();
      closedFlag ? setTop = '40px' : setTop = '-100px'
      closedFlag ? setOpacity = '0.6' : setOpacity = '0'
      closedFlag ? setButtonClass = 'closed' : setButtonClass = 'opened'
      closedFlag ? showCloseIcon = '0.7' : showCloseIcon = '0'
      
      $("#closeIcon").toggle(1000)
 
      $("#link1").animate({
            width: "toggle",
            height: "toggle",
            top:`${setTop}`,
            // left: '150px'
            opacity:`${setOpacity}`
        
        },700);
        $("#link2").animate({
            width: "toggle",
            height: "toggle",
            top:`${setTop}`,
            // left: '150px'
            opacity:`${setOpacity}`
        
        },700);
        $("#link3").animate({
            width: "toggle",
            height: "toggle",
            top:`${setTop}`,
            // left: '-150px'
            opacity:`${setOpacity}`
        
        },700);

        closedFlag = !closedFlag
        // $(".open-call").toggleClass(`${setButtonClass}`);
    });

    
    // $(".close-call").click(function () {
    //   $(".wrap").animate({ 
    //     width: "toggle",
    //     height: "toggle",
    //     top:'0px',
    //     left: '0px'
    //     // opacity:'0.7'
    //  }, 700);
    //  $(".open-call").toggleClass("closed");

    // });
  });
  