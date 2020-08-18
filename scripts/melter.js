const melter = extendContent(Block, "melter", {
	load(){
		this.super$load();
		this.liquids = [];
		this.items = [];
		for(var i = 0; i < Vars.content.items().size; i++){
			var item = Vars.content.items().get(i);
			if(item == null) return;
			this.items.push(item);
			var liquid = new Liquid("icon-"+item.name, item.color);
			liquid.localizedName = "Molten " + item.localizedName;
			liquid.flammability = 0.1;
			liquid.temperature = 0.6;
			liquid.heatCapacity = 0.3;
			liquid.viscosity = 0.5;
			this.liquids.push(liquid);
		};
	}
});
