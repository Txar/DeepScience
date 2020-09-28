const graphiteBullet = extend(BulletType, {
    hit(b, x, y){
        this.super$hit(b, b.x, b.y);
        b.owner.incExp(0.5);
    }
});
graphiteBullet.ammoMultiplier = 3;
graphiteBullet.hitSize = 7;
graphiteBullet.lifetime = 180;
graphiteBullet.damage = 28;
graphiteBullet.speed = 3.4;
graphiteBullet.pierce = false;
graphiteBullet.despawnEffect = Fx.none;
graphiteBullet.keepVelocity = false;
graphiteBullet.hittable = false;

const thoriumBullet = extend(BulletType, {
    hit(b, x, y){
        this.super$hit(b, b.x, b.y);
        b.owner.incExp(0.5);
    }
});
thoriumBullet.ammoMultiplier = 3;
thoriumBullet.hitSize = 7;
thoriumBullet.lifetime = 24;
thoriumBullet.damage = 46;
thoriumBullet.speed = 3.35;
thoriumBullet.pierce = true;
thoriumBullet.despawnEffect = Fx.none;
thoriumBullet.keepVelocity = false;
thoriumBullet.hittable = false;

const leader = extendContent(ItemTurret, "leader", {});
leader.ammo(Items.graphite, graphiteBullet, Items.thorium, thoriumBullet);
leader.shots = 4;
leader.reload = 40;