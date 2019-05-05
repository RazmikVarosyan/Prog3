class Hunter extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 15;
        this.multiply = 0;
    }
    getNewCoordinates() {
        for (var x = 0; x < matrix[0].length; x++) {
            this.directions.push([x, this.y]);
        }
    }
    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    move() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(0));
            var newCell1 = random(this.chooseCell(1));
            var concat = newCell.concat(newCell1);
            var random = random(concat);
            if (random) {
                var newX = random[0];
                var newY = random[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.eat();
                this.acted = true;

            }
        }
    }
    eat() {

        var xotakerner = this.chooseCell(2);
        var gishatichner = this.chooseCell(3);
        var finals = xotakerner.concat(gishatichner);
        for (var i in finals) {
            var verX = finals[i][0];
            var verY = finals[i][1];
            matrix[verY][verX] = 0;
        }
        this.energy++;


    }
    // mul(){
    //     var newCell = random(this.chooseCell([2,3]));
    //     if (newCell) {
    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = new Hunter(newX, newY, 4);
    //     }
    // }
    die() {
        matrix[this.y][this.x] = 0;
    }
}