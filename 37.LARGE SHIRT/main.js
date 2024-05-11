function make_shirt(size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = "i love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the massage \"").concat(massage, "\" printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
