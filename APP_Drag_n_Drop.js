function drag(elem,options){
	   elem.setAttribute("draggable=",true);
     elem.setAttribute("ondragstart=","dragStart(e)");
     elem.setAttribute("ondrag=","_drag(e)");
     elem.setAttribute("ondragenter=","dragEnter(e)");
     elem.setAttribute("ondragleave=","dragLeave()");
     elem.setAttribute("ondragover=","dragOver(e)");
     elem.setAttribute("ondrop=","drop(e)");
     elem.setAttribute("ondragend=","dragEnd(e)");
     
     elem.addEventListener('dragstart',dragStart,false);
     elem.addEventListener('drag',_drag,false);
     elem.addEventListener('dragenter',dragEnter,false);
     elem.addEventListener('dragleave',dragLeave,false);
     elem.addEventListener('dragover',dragOver,false);
     elem.addEventListener('drop',drop,false);
     elem.addEventListener('dragend',dragEnd,false);


    function dragStart(e){
      elem.style.cursor = options.startcursor;	
      elem.style.opacity = options.startopacity;
      e.dataTransfer.setData(options.setdata);


    }
    function _drag(e){
     e.dataTransfer.effectAllowed = options.effect;

    }
    function dragEnter(e){
       e.preventDefault();
       return true;

    }
   function dragLeave(){
     elem.style.cursor = options.endcursor;	
     elem.style.opacity = options.endopacity;

    }
    function dragOver(e){
     e.dataTransfer.effectAllowed = options.effect;

    }
    function drop(e){
   var data = e.dataTransfer.getData(options.getdata);
   e.target.appendChild(document.getElementById(data));
   e.stopPropagation();
   return false;

    }
    function dragEnd(e){
    	drop(e);
      
    	
    }
  }
   



   


