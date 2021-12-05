var canvas= document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")
color="red"
width_of_the_line=1
var MouseEvent=""
var last_position_of_x,last_position_of_y
window. addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft; mouse_y = e.clientY - canvas.offsetTop;
    color=document.getElementById("color").value
    width_of_the_line=document.getElementById("width").value
MouseEvent="mousedown"
}
window. addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_position_of_x=e.clientX -canvas.offsetLeft
    current_position_of_y=e.clientY -canvas.offsetTop
    if (MouseEvent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth= width_of_the_line
        ctx.moveTo (last_position_of_x,last_position_of_y)
        ctx.lineTo(current_position_of_x,current_position_of_y)
        ctx.arc(current_position_of_x,current_position_of_y,20,0,2*Math.PI)
        ctx.stroke()

        
    }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
    
}
window. addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
    MouseEvent="mouseup"
}
window. addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    MouseEvent="mouseleave"
}
function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}