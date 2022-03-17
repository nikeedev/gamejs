const functions = require('./modules/functions');


if (require.main != module) {
    console.log("\n\n-----------------------------------------------------------");
    console.log("          Game.js v" + require('./package.json').version+ " - Build " + require('./package.json').build);
    console.log("-----------------------------------------------------------\n\n");
}

export { functions }
