let i=0;
        let j=0;
        document.getElementById("need").onclick=function(){
            let DIV=document.createElement("div");
            DIV.className="itemDIV";
            DIV.id="DIV"+i;
            let remove=document.createElement("p");
            remove.innerText="remove";
            remove.className="remove";
           let flag=1;
            let VALUE=document.getElementById("input").value;
            let NEW_element=document.createElement("input");
            NEW_element.type="checkbox";
            NEW_element.className="needItems";
            NEW_element.value=VALUE;
            let NEW_label=document.createElement("label");
            NEW_label.className="needItemslabel";
            NEW_label.innerText=VALUE;
            let needArray=document.getElementsByClassName("needItemslabel");
            let haveArray=document.getElementsByClassName("haveItemsLabel");
            if(document.getElementById("input").value!="")
            {
                for(let I=0; I<needArray.length; I++)
                {
                    if(needArray[I].innerText==VALUE)
                    {
                        flag=0;
                        break;
                    }
                }

                for(let I=0; I<haveArray.length; I++)
                {
                    if(haveArray[I].innerText==VALUE)
                    {
                        flag=0;
                        break;
                    }
                }
                if(flag==1){
                    document.getElementById("needDIV").appendChild(DIV);
                    document.getElementById("DIV"+i).appendChild(NEW_element);
                    document.getElementById("DIV"+i).appendChild(NEW_label);
                    document.getElementById("DIV"+i).appendChild(remove);
                   i=i+1;
                }
            }
        }
        document.getElementById("have").onclick=function(){
            let DIV=document.createElement("div");
            DIV.className="itemDIV";
            DIV.id="div"+j;
            let remove=document.createElement("p");
            remove.innerText="remove";
            remove.className="remove";
            let flag=1;
            let VALUE=document.getElementById("input").value;
            let NEW_element=document.createElement("input");
            NEW_element.type="checkbox";
            NEW_element.className="haveItems";
            NEW_element.checked=true;
            NEW_element.value=VALUE;
            let NEW_label=document.createElement("label");
            NEW_label.className="haveItemsLabel";
            NEW_label.innerText=VALUE;
            let needArray=document.getElementsByClassName("needItemslabel");
            let haveArray=document.getElementsByClassName("haveItemsLabel");
            if(document.getElementById("input").value!="")
            {
                for(let I=0; I<needArray.length; I++)
                {
                    if(needArray[I].innerText==VALUE)
                    {
                        flag=0;
                        break;
                    }
                }
                for(let I=0; I<haveArray.length; I++)
                {
                    if(haveArray[I].innerText==VALUE)
                    {
                        flag=0;
                        break;
                    }
                }
                if(flag==1){
                    document.getElementById("haveDIV").appendChild(DIV);
                    document.getElementById("div"+j).appendChild(NEW_element);
                    document.getElementById("div"+j).appendChild(NEW_label);
                    document.getElementById("div"+j).appendChild(remove);
                    j=j+1;
                }
            }
        }
        document.getElementById("haveContiner").onclick=function(e){
             if(e.target.className ==  'haveItems') {
                e.target.className = 'needItems'
                document.getElementById("needDIV").appendChild( e.target.parentElement);
            }
            if(e.target.className == 'remove')
            {
                document.getElementById("haveDIV").removeChild(e.target.parentElement);
            }
        }

        document.getElementById("needContiner").onclick=function(e){
            if(e.target.className ==  'needItems') {
                e.target.className = 'haveItems'
                document.getElementById("haveDIV").appendChild( e.target.parentElement);
            }
            if(e.target.className == 'remove')
            {
                document.getElementById("needDIV").removeChild(e.target.parentElement);
            }
        }