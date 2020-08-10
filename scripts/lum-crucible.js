const lumcruc = extendContent(GenericSmelter, "lum-crucible", {
  draw(tile){
    this.super$draw();
    Draw.color(tile.ent().liquids.current().color);
    Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
    Draw.color();
   }
});
