const tracker = extendContent(ItemTurret, "tracker", {
	turnToTarget(){}, 
	shouldTurn(){},
	update(tile){
		tile.entity.rotation = Angles.mouseAngle(tile.drawx(),tile.drawy());
		if(Vars.player.isShooting){
			this.updateShooting();
		}
	}
}); 
