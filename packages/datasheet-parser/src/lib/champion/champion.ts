class Champion {
    name: String;
    cost: Number;
    traits: Array<String>;
    description: String;
constructor(name: String, cost: Number, traits: Array<String>, description: String) {
        this.name = name;
        this.cost = cost;
        this.traits = traits;
        this.description = description;
    }
}
export default Champion;