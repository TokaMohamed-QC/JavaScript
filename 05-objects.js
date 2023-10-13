const cookie = {
    "name" : "cookie",
    "issugarfree" : false,
    "+Yummy" : true,
   //  eatCookie: function(){
    //     console.log("I'm Eating" + this.name)
    // }
};


class Cookie{
    constructor(name, issugarfree){
        this.name = name;
        this.issugarfree = issugarfree;
    }

    eatcookie(){
        console.log("I'm Eating" + this.name)
    }
}

const myCookie = new Cookie("Iced Oatmeal", false)
cookie.name("choclateCookie")
cookie.issugarfree = true;
console.log(cookie["+Yummy"])
console.log(cookie);