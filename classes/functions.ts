function Vector2(x:number, y:number) {
	this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}


const version = "0.1.4";
const build = "2022.03-4";

function start() {
    console.log("-----------------------------------------------------------");
    console.log(" Javascript Game Framework v"+version+" - Build "+ build);
    console.log("-----------------------------------------------------------");
}


export { Vector2, version, build, start };