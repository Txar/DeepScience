const lootCollector = extendContent(CoreBlock, "loot-collector", {
  canBreak(tile){
    return true;
  }
});
