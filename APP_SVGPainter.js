 ///////////////////////////////////////////////////////
 class SVG {

    constructor(elem){
            this.elem = document.createElement('elem'); 
        }
//////Базові ф-ї для всіх елеметів
    insertIn(tagName){
     tagName.appendChild(this.elem);
    }
      
    setSize(width, height){
        this.elem.setAttribute("width=",width);
        this.elem.setAttribute("height=",height);
    }

    setViewBox(value){
       this.elem.setAttribute("viewBox=",value);
    }

    destroySVG(){
       document.removeElement(this.elem);
    }

////////////////////////////////////


drawRect(attr){
    if(this.elem instanceof SVGRectElement){
        this.elem.setAttribute("fill=",attr.fill);
        this.elem.setAttribute("stroke=",attr.stroke);
        this.elem.setAttribute("stroke-width=",attr.stroke-width);
    } else{
        return;
    }
    
}

drawCircle(attr){
    if(this.elem instanceof SVGCircleElement){
        this.elem.setAttribute("cx=",attr.cx);
        this.elem.setAttribute("cy=",attr.cy);
        this.elem.setAttribute("r=",attr.r);
        this.elem.setAttribute("fill=",attr.fill);
        this.elem.setAttribute("stroke=",attr.stroke);
        this.elem.setAttribute("stroke-width=",attr.stroke-width);
        
    }else{
        return;
    }
}


drawElipse(attr){
    if(this.elem instanceof SVGElipseElement){
        this.elem.setAttribute("cx=",attr.cx);
        this.elem.setAttribute("cy=",attr.cy);
        this.elem.setAttribute("rx=",attr.rx);
        this.elem.setAttribute("ry=",attr.ry);
        this.elem.setAttribute("fill=",attr.fill);
        this.elem.setAttribute("stroke=",attr.stroke);
        this.elem.setAttribute("stroke-width=",attr.stroke-width);
    }else{
        return;
    }
}



drawLine(attr){
    if(this.elem instanceof SVGLineElement){
       this.elem.setAttribute("x1",attr.x1);
       this.elem.setAttribute("x2",attr.x2);
       this.elem.setAttribute("y1",attr.y1);
       this.elem.setAttribute("y2",attr.y2);
       this.elem.setAttribute("stroke=",attr.stroke);
       this.elem.setAttribute("stroke-width=",attr.stroke-width);
    }else{
        return;
    }
}


drawPolygon(attr){
    if(this.elem instanceof SVGPoligonElement){
       this.elem.setAttribute("points=",attr.points); 
       this.elem.setAttribute("fill=",attr.fill);
       this.elem.setAttribute("stroke=",attr.stroke);
       this.elem.setAttribute("stroke-width=",attr.stroke-width);
    }else{
        return;
    }
}


drawPolyline(attr){
    if(this.elem instanceof SVGPolylineElement){
       this.elem.setAttribute("points=",attr.points); 
       this.elem.setAttribute("fill=",attr.fill);
       this.elem.setAttribute("stroke=",attr.stroke);
       this.elem.setAttribute("stroke-width=",attr.stroke-width);
    }else{
        return;
    }
}



drawPath(d,attr){
    if(this.elem instanceof SVGPathElement){
      this.elem.setAttribute("d=",d);  
      this.elem.setAttribute("fill=",attr.fill);
      this.elem.setAttribute("stroke=",attr.stroke);
      this.elem.setAttribute("stroke-width=",attr.stroke-width);
      this.elem.setAttribute("stroke-linecap=",attr.stroke-linecap); 
      this.elem.setAttribute("stroke-dasharray",attr.stroke-dasharray); 


    }
}


drawText(text,attr){
    if(this.elem instanceof SVGTextElement){
       this.elem.textContent(text);
       this.elem.setAttribute("x=",attr.x);
       this.elem.setAttribute("y=",attr.y);
       this.elem.setAttribute("font-size=",attr.font-size);
       this.elem.setAttribute("font-weight=",attr.font-weight);
       this.elem.setAttribute("font-family=",attr.font-family);
       this.elem.setAttribute("fill=",attr.fill);
       this.elem.setAttribute("transform=",attr.transform);
       this.elem.setAttribute("stroke=",attr.stroke);
       this.elem.setAttribute("stroke-width=",attr.stroke-width);
    }else{
        return;
    }

}


addRadGradient(attr){
    if(this.elem instanceof SVGLinearGradientElement){
         this.elem.setAttribute("id=",attr.id);
         this.elem.setAttribute("cx=",attr.cx);
         this.elem.setAttribute("cy=",attr.cy);
         this.elem.setAttribute("r=",attr.r);
         this.elem.setAttribute("fx=",attr.fx);
         this.elem.setAttribute("fy=",attr.fy);



    }else{
        return;
    }
           
}


addLinGradient(attr){
    if(this.elem instanceof SVGRadialGradientElement){
         this.elem.setAttribute("id=",attr.id);
         this.elem.setAttribute("x1=",attr.x1);
         this.elem.setAttribute("x2=",attr.x2);
         this.elem.setAttribute("y1=",attr.y1);
         this.elem.setAttribute("y2=",attr.y2); 
    }else{
        return;
    }

}

offset(attr){
    if(this.elem instanceof SVGLinearGradientElement || this.elem instanceof SVGRadialGradientElement){
        let stop = document.createElement(stop);
        stop.setAttribute("offset=",attr.offset);
        stop.setAttribute("stop-color=",attr.stop-color);
        stop.setAttribute("stop-opacity=",attr.stop-opacity);
        this.elem.appendChild(stop);

    }
}



createGroup(id,elements){
    if(this.elem instanceof SVGGroupElement){
         this.elem.setAttribute("id=",id);
              for(let i = 0; i < elements.length; i++){
                  this.elem.appendChild(elements[i]);
          }
               }else{
                     return;
      }

}


useSvg(id,x,y,transform){
      this.elem.setAttribute("x=",x);
      this.elem.setAttribute("y=",x);
      this.elem.setAttribute("xlink:href=",id);
      this.elem.setAttribute("transform=",transform);

}

};
module.exports = {
    SVG,
}
////////////////////////////////////////////////////////

