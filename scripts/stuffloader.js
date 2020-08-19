/*this.global.liquids = [];
this.global.items = [];
for(var i = 0; i < Vars.content.items().size; i++){
	var item = Vars.content.items().get(i);
	if(item == null) continue;
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
	var liquidd = Vars.content.liquids().get(i);
	if(liquidd == null || liquidd in this.global.liquids) continue;
	var item = new Item(liquidd.icon(Cicon.medium).name, liquidd.color);
	item.localizedName = "Solid " + liquidd.localizedName;
	item.color = liquidd.color;
	item.hardness = 0.3;
	item.cost = 2;
	this.global.items.push(item);
};
print("Items Loaded");
print(this.global.items);*/
print("Test [accent] TEST []");
