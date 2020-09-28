const lightSourceOfDoomWhyNotPotatoCarrot = extendContent(Block, "doom-light-source", {
  init(){
    this.super$init();
    this.consumes.power(4);
  },
  update(tile){
    tile.ent().setWorks(Mathf.round(tile.ent().power.status.getPowerBalance()*60)>0);
  }
});
lightSourceOfDoomWhyNotPotatoCarrot.entityType = prov(() => {
  const entity = extend(TileEntity, {
    getWorks(){
      return this._works;
     },
     setWorks(val){
      this._works = val;
     }
    });
    this.setWorks(false);
    return entity;
 });
  
