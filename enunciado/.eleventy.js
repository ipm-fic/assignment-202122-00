const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("vendor");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      output: "../doc"
    }
  }
};
