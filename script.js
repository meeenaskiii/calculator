function clic(val)
{
    document.getElementById("screen").value+=val
}
function clr(clr)
{
    document.getElementById('screen').value=""
}
function eqclic()
{
    var result=eval(document.getElementById("screen").value)
    document.getElementById("screen").value=result
}
