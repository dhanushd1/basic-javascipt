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
        let that=this;
        that.lang.forEach((lang)=>{
            console.log(that.video+"-"+lang.toUpperCase())
        }
        );

    },

};
channal.showvideos();

// example of another way of using this
// .call //call and apply are same
// .apply
// .bind