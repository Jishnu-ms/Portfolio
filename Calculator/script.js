function press(val)
{

    document.getElementById("dis").value+=val;

}
function C()
{
    document.getElementById("dis").value=""
}
function result()
{
    var text=document.getElementById("dis").value
    var res=eval(text)
    document.getElementById("dis").value=res
}