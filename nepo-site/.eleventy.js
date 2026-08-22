module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  eleventyConfig.addCollection("articulos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/articulos/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("fecha", function (dateObj) {
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const d = new Date(dateObj);
    return `${d.getDate()} de ${meses[d.getMonth()]}, ${d.getFullYear()}`;
  });

  // El filtro "slice" de Nunjucks NO funciona como slice() de JavaScript.
  // Este filtro nuevo sí recorta el arreglo como esperamos (desde, hasta).
  eleventyConfig.addFilter("limit", function (arr, start, end) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(start, end);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
