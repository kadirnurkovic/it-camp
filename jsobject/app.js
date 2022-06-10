const auto = {
    model: "Audi",
    maxSpeed: 260,
    currentSpeed: 0,
    drive: function(item){
        console.log(this.currentSpeed = this.currentSpeed + item);
        if(auto.currentSpeed > auto.maxSpeed){
            alert("Over the allowed speed.")
        }
    },
    brake: function(item){
        console.log(this.currentSpeed -= item);
    },
    stop: function(item){
        console.log(this.currentSpeed = item);
    }

}

auto.drive(270);







