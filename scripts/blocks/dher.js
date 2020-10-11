const dherugo = extendContent(LiquidTurret, "dher", {
  load(){
    this.super$load() 
    this.baseRegion = Core.atlas.find(this.name + "-base");
  },
  generateIcons(){
		return [
			Core.atlas.find(this.name + "-base"),
			Core.atlas.find(this.name)
		];
	}
});