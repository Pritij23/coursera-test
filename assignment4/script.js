(function(){
    var names=["yaakov","john","jen","jason","paul","frank","larry","jim"];
    for(var i=0;i<names.length;i++){
        var firstletter=names[i].charAt(0).toLowerCase();
        if (firstletter==='j'){
            byespeaker.speak(names[i]);
        }else{
            hellospeaker.speak(names[i]);
        }
    }
})();