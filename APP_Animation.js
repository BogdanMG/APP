class Animation {
   constructor(selector,isMultiselector){
   	   if(isMultiselector){
         this.selector = document.querySelectorAll(selector);
   	   }else{
   	   	this.selector = document.querySelector(selector);
   	   }
   	   
   }

   start(options,props){
     this.selector.animate(props,options);
   }

  


   play(selector){
   	this.selector.play();
   }

   stop(selector){
   	this.selector.stop();
   }

   velocity(speed){
     this.selector.playbackRate = speed;
   }

   reverse(selector){
      this.selector.reverse();
   }

   getAnim(selector){
      this.selector.getAnimation();
   }




};

module.exports = {
	Animation,
}