// method=obj
// function=global(window,global)

const channal={
    title:"cyber",
    video:"javascript",
    lang:["tamil","malayam","telugu"],
    subscribe(){
        console.log(this);

    },
    showvideos(){
        this.lang.forEach(function(lang){
            console.log(this.video+"-"+lang.toUpperCase())
        },this);

    },

};
channal.showvideos();