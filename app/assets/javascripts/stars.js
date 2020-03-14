$(function(){
  $(document).on("click",".ground__btn",function(){
    var color_list = ["red","blue","green","yellow","purple","white","pink","orange"];
    var color_number = Math.ceil( Math.random()*9 );
    var color = color_list[color_number];
    var top  = Math.ceil( Math.random()*70 );
    var left = Math.ceil( Math.random()*100 );
    var size = Math.ceil( Math.random()*100 );
    let star = `
    <div class = "star" style = "background-color: ${color}; top: ${top}%; left: ${left}%; height: ${size}px; width: ${size}px;"></div>
    `
    $(".stars").append(star);
  });
  $(document).on("click",".ground__delete",function(){
    $(".stars").children().remove().fadeOut(700);
  });
});