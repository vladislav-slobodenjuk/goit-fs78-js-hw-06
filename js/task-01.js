const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log("\n"); // empty line just for enhancement

categoriesEl.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
  console.log("\n");
});
