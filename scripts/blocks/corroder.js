const doomspokogierka = extendContent(ItemTurret, "corroder", {
  load(){
    this.super$load() 
    this.baseRegion = Core.atlas.find(this.name + "-base");
  },
  //draw(tile){
    //Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
  //},
  generateIcons(){
		return [
			Core.atlas.find(this.name + "-base"),
			Core.atlas.find(this.name)
		];
	}
});