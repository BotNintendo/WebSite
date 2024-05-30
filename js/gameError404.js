function mario() {
    setViewport(10, 20, 30, 40);
}

function setViewport(x, y, width, height) {


    // Load the image
    const img = new Image();
    img.src = './img/Test.png'; // Replace 'your_image_url.jpg' with the URL of your image

    // When the image is loaded, draw it on the canvas and cut
    
    img.onload = function () {
        let w = document.body.offsetWidth/10;
        const canvas = document.getElementById('mario');
        //for (let i = 0; i < w; i++) 
        {
            const cutCanvas = document.getElementById('mario');
            const cutCtx = cutCanvas.getContext('2d', { willReadFrequently: true });
            
            cutCtx.drawImage(img, 0, 0);
            // cutCtx.drawImage(img, 0, 0, 55, 65, 0, 0, 7, 25);
            
                        /*  ctx.drawImage(image,
                    70, 20,   // Start at 70/20 pixels from the left and the top of the image (crop),
                    50, 50,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
                    0, 0,     // Place the result at 0, 0 in the canvas,
                    100, 100); // With as width / height: 100 * 100 (scale) */
                        //cutCanvas.width = cutCanvas.width / 2;

            // const imageData = cutCtx.getImageData(0, 0, 20, 35);
            // cutCtx.putImageData(imageData, i * 10, 0);
            // cutCtx.putImageData(imageData, i * 10, 35);
            const imageData = cutCtx.getImageData(0, 0, 43, 63);
            cutCtx.putImageData(imageData, 10, 35);

            
        }

    }
}


document.addEventListener('DOMContentLoaded', async function () {
    setViewport(document.getElementById("mario"), 0, 0, 10, 10);
});