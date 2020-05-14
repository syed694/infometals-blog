module.exports = function(config) {

    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/vendor");
    
    return  {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  
};