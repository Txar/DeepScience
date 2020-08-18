const melter = extendContent(Block, "melter", {
	load(){
		this.super$load();
		this.liquids = [];
		this.items = [];
		for(var i = 0; i < Vars.content.items().size; i++){
			var item = Vars.content.items().get(i);
			if(item == null) return;
			this.items.push(item);
			var liquid = new Liquid(item.localizedName, item.color);
			//liquid.region = Core.atlas.find("cryofluid");
			liquid.flammability = 0.2;
			liquid.temperature = 1;
			liquid.heatCapacity = 0;
			liquid.viscosity = 1;
			this.liquids.push(liquid);
		};
	}
});
