document.addEventListener("alpine:init", () => {
  Alpine.data("OurRecipesCarousel", () => ({
    splide: null,
    init() {
      this.splide = new Splide(".our-recipes-carousel", {
        type: "loop",
        perPage: 4,
        breakpoints: {
          1024: {
            perPage: 2,
          },
          760: {
            perPage: 1,
          },
        },
        gap: 24,
        focus: "center",
        perMove: 1,
      });
      this.splide.mount();
    },
  }));
});
