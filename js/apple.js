let positionApple = [];

class Apple {
    constructor(){}

    colisionApple(){
        const head = positionSnake[positionSnake.length - 1];

        if(positionApple[0].x === head.x && positionApple[0].y === head.y){
            positionSnake.push({ x: positionApple[0].x, y: positionApple[0].y });
            points++
            randomApple();
        }
    }

    draw(){
        ctx.fillStyle = "#ec1c24";
        ctx.fillRect(positionApple[0].x, positionApple[0].y, size, size);
    }

    update(){
        this.colisionApple();
        this.draw();
    }
}

const randomApple = () => {
    const tamX = canvasWidth / size;
    const tamY = canvasHeight / size;
    const posX = Math.floor(Math.random() * size) * tamX;
    const posY = Math.floor(Math.random() * size) * tamY;
    positionApple.shift();
    positionApple.push({ x: posX, y: posY });
}

randomApple();
const apple = new Apple();