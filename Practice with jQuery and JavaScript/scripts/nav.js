let a;

$(document).ready(function() {

    a = document.getElementsByTagName('a');

    function addBorder() {
      this.classList.add("border");
    }

    function removeBorder() {
      this.classList.remove("border");
    }

for(var i = 0; i < a.length; i++)
{
  a[i].onmouseover = addBorder;
  a[i].onmouseout = removeBorder;
}

})
