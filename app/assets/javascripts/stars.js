$(function(){
  $(document).on("click",".ground__btn",function(){
    var color_list = ["red","blue","green","yellow","purple","white","pink","orange"];
    var color_number = Math.floor(Math.random() * Math.floor(7));
    var color = color_list[color_number];
    var top  = Math.ceil( Math.random()*70 );
    var left = Math.ceil( Math.random()*100 );
    var size = Math.ceil( Math.random()*150 );
    let class = `
    <div class = "star" style = "background-color: ${color}; top: ${top}%; left: ${left}%; height: ${size}px; width: ${size}px;"></div>
    `
    $(".stars").append(class);
  });
  $(document).on("click",".ground__delete",function(){
    $(".stars").children().remove().fadeOut(700);
  });
});