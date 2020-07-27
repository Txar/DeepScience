const stomper = extendContent(PowerTurret, "stomper"){
  updateShooting(tile){
    Damage.damage(tile.getTeam(),tile.drawx(),tile.drawy(),150,50);
  }
}
