class person {
    constructor(name){
        this.name = name;
    }
}

    function sayMyname(){
        return `this is my  ${this.name}`;
    };

module.exports = {
    Person,
};