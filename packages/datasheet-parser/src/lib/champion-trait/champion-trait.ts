class championTrait {
    name: String;
    champions: Array<String>;
    description: String;

    constructor(name: String, champions: Array<String>, description: String) {
        this.name = name;
        this.champions = champions;
        this.description = description;
    }
}

export default championTrait;