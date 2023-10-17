const background = () => {
    const greenLight = "#aad751";
    const greenDark = "#a2d149";
    let replacement = false;

    for(let x = 0; x <= canvasWidth; x += size){
        for(let y = 0; y <= canvasHeight; y += size){
            if(replacement === false){
                ctx.fillStyle = greenLight;
                replacement = true;
            } else {
                ctx.fillStyle = greenDark;
                replacement = false;
            }

            ctx.fillRect(x, y, size, size);
        }
    }
}