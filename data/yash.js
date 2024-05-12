class Yash {
    constructor() {
        this.name = 'Yash Mistry';
        this.occupation = 'Full-stack Developer';
        this.hobbies = ['coding', 'gaming', 'reading memes', 'Guitar', 'ruibiks cube'];
        this.personalityTraits = ['ambitious', 'curious', 'caffeine-dependent'];
    }

    introduce() {
        console.log(`Hey, I'm ${this.name}! I'm a ${this.occupation}`);
        console.log(`People often describe me as ${this.personalityTraits.join(', ')}.`);
    }
}

const yash = new Yash();
yash.introduce();

