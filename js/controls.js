const controls = () => {
    const keyPressed = (btn) => {
        switch(btn.keyCode){
            case 87 || 38:
                if(snake.diretion != "down") snake.diretion = "up";
                break;
            case 83 || 40:
                if(snake.diretion != "up") snake.diretion = "down";
                break;
            case 65 || 37:
                if(snake.diretion != "right") snake.diretion = "left";
                break;
            case 68 || 39:
                if(snake.diretion != "left") snake.diretion = "right";
                break;
            case 38:
                if(snake.diretion != "down") snake.diretion = "up";
                break;
            case 40:
                if(snake.diretion != "up") snake.diretion = "down";
                break;
            case 37:
                if(snake.diretion != "right") snake.diretion = "left";
                break;
            case 39:
                if(snake.diretion != "left") snake.diretion = "right";
                break;
        }
    }

    document.addEventListener("keydown", keyPressed);
}