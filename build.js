var panda = require("panda-docs");

panda.make(["./manifest.json", "-t", "Cloud9 Documentation"], function(err) {
    if (err) console.error(err);
});