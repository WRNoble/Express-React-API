const emperorModel = mongoose.model("Emperor", emperorSchema);

//created a new instance of emperor schema
let bobRoss = new emperorModel({
    name: "Bob Ross",
    birth: "October 35, 650",
    birthProvidence: "Happy Tree Land",
    rise: "middle-aged women",
    reignStart: " 1000",
    dynasty: "Happy Mistakes",
    causeOfDeath: "NA"
})

bobRoss.save();