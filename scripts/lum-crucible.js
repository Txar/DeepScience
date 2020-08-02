const lumcruc = extendContent(GenericSmelter, "lum-crucible", {
  draw(tile){
    this.super$draw();
    Draw.color(liquids.current().color);
    Draw.rect(Core.atlas.find(this.name + "-liquid");
    Draw.color();
   }
});
