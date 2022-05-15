class KNumber {
    constructor (max = 50){
        this.max = max;
        this.operator = this.getRandomInt(4);
        this.x = this.getRandomInt();
        this.y = this.getRandomYInt();
        this.answer = '';
    }

    getRandomInt(max = this.max) {
        return Math.floor(Math.random() * max);
    }

    getRandomYInt() {
        let number = this.getRandomInt(10);
        switch (this.operator) {
            case 0: return number;
            case 1: return number;
            case 2: return number;
            case 3: 
                this.x = number * this.getRandomInt(10);
                if (this.x == 0 ) return this.getRandomYInt();
                return number > 0 ? number : this.getRandomYInt();
        }
    }

    getOperator() {
        let arr = ['+', '-', 'x', ':'];
        return arr[this.operator];
    }

    getResult() {
        switch (this.operator) {
            case 0: return this.x + this.y;
            case 1: return this.x - this.y;
            case 2: return this.x * this.y;
            case 3: return this.x / this.y;
        }
    }

    getShow() {
        if (this.check()) {
            return `${this.x} ${this.getOperator()} ${this.y} = ${this.getResult()}`;
        } else {
            return `${this.x} ${this.getOperator()} ${this.y} = <span>${this.answer}</span> ${this.getResult()}`;
        }
    }

    showQuestion() {
        return `${this.x} ${this.getOperator()} ${this.y} = ?`;
    }

    check() {
        return this.getResult() === this.answer;
    }

}

export default KNumber;