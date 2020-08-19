const melter = extendContent(GenericCrafter, "melter", {
	load(){
		this.super$load();
		this.liquids = [];
		this.items = [];
		for(var i = 0; i < Vars.content.items().size; i++){
			var item = Vars.content.items().get(i);
			if(item == null) return;
			this.items.push(item);
			var liquid = new Liquid(item.icon(Cicon.medium).name, item.color);
			liquid.localizedName = "Molten " + item.localizedName;
			liquid.flammability = 0.1;
			liquid.temperature = 0.6;
			liquid.heatCapacity = 0.3;
			liquid.viscosity = 0.5;
			this.liquids.push(liquid);
		};
	},
	update(tile){
		entity = tile.ent();
		if(entity.cons.valid()){
            entity.progress += this.getProgressIncrease(entity, this.craftTime);
            entity.totalProgress += entity.delta();
           	entity.warmup = Mathf.lerpDelta(entity.warmup, 1, 0.02);
			if(Mathf.chance(Time.delta() * this.updateEffectChance)){
                Effects.effect(this.updateEffect, entity.x + Mathf.range(this.size * 4), entity.y + Mathf.range(this.size * 4));
            }
        }else{
			entity.warmup = Mathf.lerp(entity.warmup, 0, 0.02);
        }
        if(entity.progress >= 1){
            entity.cons.trigger();
            if(entity.items.total()>0){
            	entity.liquids.add(Vars.content.getByName(ContentType.liquid, entity.items.first().icon(Cicon.medium).name))
            	this.tryDumpLiquid(tile, Vars.content.getByName(ContentType.liquid, entity.items.first().icon(Cicon.medium).name));
            	entity.items.remove(entity.items.first(), 1);
            }
            Effects.effect(craftEffect, tile.drawx(), tile.drawy());
            entity.progress = 0;
        }
    }
});
melter.meltTimer = melter.timers++;
