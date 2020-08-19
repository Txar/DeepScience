this.global.liquids = [];
this.global.items = [];
for(var i = 0; i < Vars.content.items().size; i++){
	var item = Vars.content.items().get(i);
	if(item == null) return;
	this.global.items.push(item);
	var liquid = new Liquid(item.icon(Cicon.medium).name, item.color);
	liquid.localizedName = "Molten " + item.localizedName;
	liquid.flammability = 0.1;
	liquid.temperature = 0.6;
	liquid.heatCapacity = 0.3;
	liquid.viscosity = 0.5;
	this.global.liquids.push(liquid);
};
print("Liquids Loaded");
print(this.global.liquids);
for(var i = 0; i < Vars.content.liquids().size; i++){
	var liquid = Vars.content.liquids().get(i);
	if(liquid == null || liquid in this.global.liquids) return;
	var item = new Item(liquid.icon(Cicon.medium).name, liquid.color);
	item.localizedName = "Solid " + liquid.localizedName;
	item.color = liquid.color;
	item.hardness = 0.3;
	item.cost = 2;
	this.global.items.push(item);
};
print("Items Loaded");
print(this.global.items);
