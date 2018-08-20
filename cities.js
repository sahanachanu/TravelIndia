
if(window.location.href == "WEBPAGE.html")
{
    document.getElementById("MenuBarHome").classList.add("MenuBarActive");
}

var allSpan = document.getElementsByTagName('SPAN');
for(var i = 0; i < allSpan.length; i++){
    allSpan[i].onclick=function(){
        if(this.parentNode){

            //console.log(this.childNodes[0].nextSibling.nodeValue);
            var childList = this.parentNode.getElementsByTagName('div');
           
            for(var j = 0; j< childList.length;j++){
                var ChildId = childList[j].id;
                var currentState = childList[j].style.display;
                if(currentState=="none")
                    {
                   
                                childList[j].style.display="block";
                                this.childNodes[0].src='assets/images/minus.png';
                                this.childNodes[0].alt='Collapse';   
                       
                      }
                else
                    {
                                childList[j].style.display="none";
                                   this.childNodes[0].src='assets/images/add.png';
                                this.childNodes[0].alt='Expand';
                    }
                }
        }
    }
}
