namespace Canvas_Test {
    console.log("Es lädt");
    window.addEventListener("load", handleload)

    function handleload(){

   
    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    console.log(crc2) 
}
}