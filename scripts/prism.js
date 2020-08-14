//Thx to GlennFolker
//by ThePythonGuy <3
function getLinkedBlock(tile, block, pred){
    entity = tile.ent();
    if(entity == null){return 0;}
    prox = entity.proximity();
    count = 0;
    prox.each(pred, cons(other => count++));
    return count;
}
const prism = extendContent(Block, "prism", {
	load(){
		this.super$load();
		this.lightsource = Vars.content.getByName(ContentType.block, "deepscience-doom-light-source");
		this.laserRegion = Core.atlas.find("laser");
		this.laserEndRegion = Core.atlas.find("laser-end");
	},
	update(tile){
		entity = tile.ent();
		entity.setLinkedNum(getLinkedBlock(entity.tile, this.lightsource, boolf(tile => {return tile.block() == this.lightsource})));
		var target = Units.closestTarget(tile.getTeam(), tile.drawx(), tile.drawy(), 300);
		if(target!=null){
			target.damage(entity.getLinkedNum());
			Units.nearbyEnemies(tile.getTeam(), target.x-15, target.y-15, 30, 30, cons(e =>{
				e.damage(entity.getLinkedNum()/2);
			}));
		}
	},
	draw(tile){
		entity = tile.ent();
		this.super$draw(tile);
		Draw.color(Color.valueOf("ff0000").shiftHue(Time.time()*(entity.getLinkedNum()/2)));
		Lines.square(tile.drawx(), tile.drawy(), 20+Mathf.sinDeg(Time.time()*2*entity.getLinkedNum())*5, Time.time()+(Time.time()+Mathf.sinDeg(Time.time()*2*entity.getLinkedNum())*5)*entity.getLinkedNum());
		Draw.color();
		var target = Units.closestTarget(tile.getTeam(), tile.drawx(), tile.drawy(), 300);
		if(target!=null){
			Draw.color(Color.valueOf("ff0000").shiftHue(Time.time()*(entity.getLinkedNum()/2)));
			Drawf.laser(this.laserRegion, this.laserEndRegion, tile.drawx(), tile.drawy(), target.getX(), target.getY(), target.health/target.maxHealth()+0.5);
			Draw.color();
			Units.nearbyEnemies(tile.getTeam(), target.x-20, target.y-20, 40, 40, cons(e =>{
				if(e!=null){
					Draw.color(Color.valueOf("ff0000").shiftHue(Time.time()*(entity.getLinkedNum()/2)));
					Drawf.laser(this.laserRegion, this.laserEndRegion, target.getX(), target.getY(), e.x, e.y, e.health/e.maxHealth()+0.1);
					Draw.color();
				}
			}));
		}
	}
});
prism.entityType = prov(() => {
	const entity = extend(TileEntity, {
		getLinkedNum: function(){
			return this._lnum;
		},
		setLinkedNum: function(val){
			this._lnum = val;
		}
	});
	entity.setLinkedNum(0);
	return entity;
});


