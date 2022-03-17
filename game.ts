const functions = require('./modules/functions');
var colors = require('colors');


colors.enable();
if (require.main != module) {
    console.log("\n\n      ", colors.bgGreen("/@-------------------------------------@\\"));
    console.log("      ", colors.bgBlue("|   Game.js v" + require('./package.json').version+ " - Build " + require('./package.json').build, " |"));
    console.log("      ", colors.bgRed("\\@-------------------------------------@/"));
}

export { functions }
