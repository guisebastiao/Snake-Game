const colision = () => {
    const head = positionSnake[positionSnake.length - 1];

    if(head.x <= -size || head.x >= canvasWidth || head.y <= -size || head.y >= canvasHeight){
        GameOver = true;
        if(localStorage.getItem("record") === null) localStorage.setItem("record", points);
        if(points > localStorage.getItem("record")) localStorage.setItem("record", points);
        recordOcorred.innerHTML = localStorage.getItem("record");
        pointOcorred.innerHTML = points;
        reset();
    }

    for(let i = 0; i < positionSnake.length - 3; i++){
        if(positionSnake[i].x === head.x && positionSnake[i].y === head.y){
            GameOver = true;
            if(localStorage.getItem("record") === null) localStorage.setItem("record", points);
            if(points > localStorage.getItem("record")) localStorage.setItem("record", points);
            recordOcorred.innerHTML = localStorage.getItem("record");
            pointOcorred.innerHTML = points;
            reset();
        }
    }
}

const reset = () => {
    while(positionSnake.length) positionSnake.pop();
    positionSnake.push( { x: 15, y: 15 } );
    positionSnake.push( { x: 15, y: 30 } );
    snake.diretion = "down";
    randomApple();
}