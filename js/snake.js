const positionSnake = [
    { x: 15, y: 15 },
    { x: 15, y: 30 },
];

let diretion = "down";

class Snake {
    constructor(position, diretion){
        this.position = position;
        this.diretion = diretion;
    }

    moviment(){
        let head = positionSnake[positionSnake.length - 1];

        if(this.diretion === "up") positionSnake.push({ x: head.x = head.x, y: head.y -= size });
        if(this.diretion === "down") positionSnake.push({ x: head.x = head.x, y: head.y += size });
        if(this.diretion === "left") positionSnake.push({ x: head.x -= size, y: head.y = head.y });
        if(this.diretion === "right") positionSnake.push({ x: head.x += size, y: head.y = head.y });

        positionSnake.shift();
    }

    draw(){
        ctx.fillStyle = "#4f78f8";
        positionSnake.forEach(pos => {
            ctx.fillRect(pos.x, pos.y, size, size);
        });
    }

    update(){
        this.moviment();
        this.draw();
    }
}

const snake = new Snake(positionSnake, diretion);