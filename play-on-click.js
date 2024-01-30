AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema:{
    isPlane:{type:"boolean",default:false}
  },

  init:function(){
    this.videoEl=this.el.getAttribute("material").registerComponent
    this.onClick=this.onClick.bind(this)
  },

  play:function(){
    window.addEventListener("click", this.onClick)
  },

  onClick:function(evt){
    if(!this.videoEl){
        return;
    }
  }
});
