function firstThing(callback1) {
    function secondThing(callback1, callback2) {
        function thridThing(callback1, callback2, callback3) {
            return callback3("result3");
        }

        thridThing(callback1, callback2, (result3)=>{
            return callback2(result3);
        }); 
    }

    secondThing(callback1, (result1)=>{
        return callback1(result1);
    })
}

firstThing((result)=> {
    console.log(result);
})