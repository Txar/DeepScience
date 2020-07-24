const block = extendContent(GenericCrafter, "undulium-mixer", {
    load() {
        this.super$load();
        this.sprites = [];
        for (var i = 0; i < 11; i++) {
            this.sprites[i] = Core.atlas.find(this.name + (i + 1));
        }
    },
    draw(tile) {
        Draw.rect(this.sprites[Math.floor(Time.time() )%10], tile.drawx(), tile.drawy());
    }
});