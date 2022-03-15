function Vector2(x:number, y:number) {
	this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}


const version = "0.2.0";
const build = "2022.03-7";

function start() {
    console.log("-----------------------------------------------------------");
    console.log("           Gamedev.js v"+version+" - Build "+ build);
    console.log("-----------------------------------------------------------");
}


export { Vector2, start };