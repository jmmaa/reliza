import type { IntermediateConfig, Stat, Entries } from "../../types";

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * ((100 + percent) / 100)) + flat;

export const sum = (first: number, second: number) => first + second;

export const product = (first: number, second: number) => first * second;

export const get =
  <M extends {}, K extends keyof M>(key: K) =>
  (map: M) =>
    map[key];

export const floor = Math.floor;

export const max = Math.max;

export const min = Math.min;

export const concat = <V>(first: V[], second: V[]) => first.concat(second);

export const entries = <T extends {}>(o: T) =>
  Object.entries(o) as Entries<T>;

export const flattenedStats = (config: IntermediateConfig) =>
  ([] as Stat[])
    .concat(config["character.mainweapon.stats"](config))
    .concat(
      config["character.mainweapon.crystals"].reduce(
        (arr, next) => arr.concat(next(config)),
        [] as Stat[],
      ),
    )
    .concat(
      isUsingStatAccessibleSubweapon(config) ?
        config["character.subweapon.stats"](config)
      : [],
    )
    .concat(
      isUsingStatAccessibleSubweapon(config) ?
        config["character.subweapon.crystals"].reduce(
          (arr, next) => arr.concat(next(config)),
          [] as Stat[],
        )
      : [],
    )
    .concat(config["character.additionalGear.stats"](config))
    .concat(
      config["character.additionalGear.crystals"].reduce(
        (arr, next) => arr.concat(next(config)),
        [] as Stat[],
      ),
    )
    .concat(config["character.armor.stats"](config))
    .concat(
      config["character.armor.crystals"].reduce(
        (arr, next) => arr.concat(next(config)),
        [] as Stat[],
      ),
    )
    .concat(config["character.specialGear.stats"](config))
    .concat(
      config["character.specialGear.crystals"].reduce(
        (arr, next) => arr.concat(next(config)),
        [] as Stat[],
      ),
    );

//  -- data accessors --

export const isDualWielder = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "one-handed-sword" &&
  config["character.subweapon.type"] === "one-handed-sword" &&
  config["character.skills.dualSwordSkills.dualSwordMastery.level"] > 0;

export const isMainOHS = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "one-handed-sword";

export const isMainTHS = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "two-handed-sword";

export const isUsingStatAccessibleSubweapon = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "arrow" ||
  config["character.subweapon.type"] === "dagger" ||
  config["character.subweapon.type"] === "ninjutsu-scroll" ||
  config["character.subweapon.type"] === "shield";

// default
export const defaultIntermediateConfig: IntermediateConfig = {
  "character.level": 0,

  "character.STR": 0,
  "character.DEX": 0,
  "character.INT": 0,
  "character.VIT": 0,
  "character.AGI": 0,

  "character.personalStat": "none",
  "character.personalStatValue": 0,

  "character.mainweapon.type": "bare-hand",
  "character.mainweapon.ATK": 0,
  "character.mainweapon.refinement": 0,
  "character.mainweapon.stability": 0,
  "character.mainweapon.stats": (_) => [],
  "character.mainweapon.crystals": [],

  "character.subweapon.type": "none",
  "character.subweapon.ATK": 0,
  "character.subweapon.DEF": 0,
  "character.subweapon.refinement": 0,
  "character.subweapon.stability": 0,
  "character.subweapon.stats": (_) => [],
  "character.subweapon.crystals": [],
  "character.subweapon.scrollCastTimeReduction": 0,
  "character.subweapon.scrollMPReduction": 0,

  "character.armor.DEF": 0,
  "character.armor.refinement": 0,
  "character.armor.type": "none",
  "character.armor.stats": (_) => [],
  "character.armor.crystals": [],

  "character.additionalGear.DEF": 0,
  "character.additionalGear.refinement": 0,
  "character.additionalGear.stats": (_) => [],
  "character.additionalGear.crystals": [],

  "character.specialGear.DEF": 0,
  "character.specialGear.stats": (_) => [],
  "character.specialGear.crystals": [],

  "character.skills.bladeSkills.hardHit.level": 0,
  "character.skills.bladeSkills.astute.level": 0,
  "character.skills.bladeSkills.triggerSlash.level": 0,
  "character.skills.bladeSkills.triggerSlash.isActive": false,
  "character.skills.bladeSkills.rampage.level": 0,
  "character.skills.bladeSkills.rampage.isActive": false,
  "character.skills.bladeSkills.meteorBreaker.level": 0,
  "character.skills.bladeSkills.shutOut.level": 0,
  "character.skills.bladeSkills.lunarSlash.level": 0,
  "character.skills.bladeSkills.sonicBlade.level": 0,
  "character.skills.bladeSkills.spiralAir.level": 0,
  "character.skills.bladeSkills.swordTempest.level": 0,
  "character.skills.bladeSkills.busterBlade.level": 0,
  "character.skills.bladeSkills.busterBlade.isActive": false,
  "character.skills.bladeSkills.auraBlade.level": 0,
  "character.skills.bladeSkills.swordMastery.level": 0,
  "character.skills.bladeSkills.quickSlash.level": 0,
  "character.skills.bladeSkills.swordTechniques.level": 0,
  "character.skills.bladeSkills.warCry.level": 0,
  "character.skills.bladeSkills.warCry.isActive": false,
  "character.skills.bladeSkills.berserk.level": 0,
  "character.skills.bladeSkills.berserk.isActive": false,
  "character.skills.bladeSkills.gladiate.level": 0,
  "character.skills.bladeSkills.swiftAttack.level": 0,

  "character.skills.shotSkills.powerShot.level": 0,
  "character.skills.shotSkills.bullseye.level": 0,
  "character.skills.shotSkills.arrowRain.level": 0,
  "character.skills.shotSkills.snipe.level": 0,
  "character.skills.shotSkills.crossFire.level": 0,
  "character.skills.shotSkills.vanquisher.level": 0,
  "character.skills.shotSkills.twinStorm.level": 0,
  "character.skills.shotSkills.twinStorm.isActive": false,
  "character.skills.shotSkills.twinStorm.onCooldown": false,
  "character.skills.shotSkills.retrogradeShot.level": 0,
  "character.skills.shotSkills.moebaShot.level": 0,
  "character.skills.shotSkills.paralysisShot.level": 0,
  "character.skills.shotSkills.smokeDust.level": 0,
  "character.skills.shotSkills.armBreak.level": 0,
  "character.skills.shotSkills.parabolaCannon.level": 0,
  "character.skills.shotSkills.shotMastery.level": 0,
  "character.skills.shotSkills.samuraiArchery.level": 0,
  "character.skills.shotSkills.samuraiArchery.isActive": false,
  "character.skills.shotSkills.samuraiArchery.stacks": 0,
  "character.skills.shotSkills.sneakAttack.level": 0,
  "character.skills.shotSkills.longRange.level": 0,
  "character.skills.shotSkills.quickDraw.level": 0,
  "character.skills.shotSkills.decoyShot.level": 0,
  "character.skills.shotSkills.fatalShot.level": 0,

  "character.skills.magicSkills.magicArrows.level": 0,
  "character.skills.magicSkills.magicJavelin.level": 0,
  "character.skills.magicSkills.magicLances.level": 0,
  "character.skills.magicSkills.magicImpact.level": 0,
  "character.skills.magicSkills.magicFinale.level": 0,
  "character.skills.magicSkills.chronosShift.level": 0,
  "character.skills.magicSkills.magicWall.level": 0,
  "character.skills.magicSkills.magicBlast.level": 0,
  "character.skills.magicSkills.magicStorm.level": 0,
  "character.skills.magicSkills.magicBurst.level": 0,
  "character.skills.magicSkills.magicCannon.level": 0,
  "character.skills.magicSkills.magicCrash.level": 0,
  "character.skills.magicSkills.magicMastery.level": 0,
  "character.skills.magicSkills.magicKnife.level": 0,
  "character.skills.magicSkills.qadal.level": 0,
  "character.skills.magicSkills.qadal.charge": 0,
  "character.skills.magicSkills.qadal.isActive": false,
  "character.skills.magicSkills.qadal.timeActive": 0,
  "character.skills.magicSkills.mPCharge.level": 0,
  "character.skills.magicSkills.chainCast.level": 0,
  "character.skills.magicSkills.chainCast.isActive": false,
  "character.skills.magicSkills.chainCast.stacks": 0,
  "character.skills.magicSkills.powerWave.level": 0,
  "character.skills.magicSkills.maximizer.level": 0,
  "character.skills.magicSkills.rapidCharge.level": 0,
  "character.skills.magicSkills.rapidCharge.isActive": false,
  "character.skills.magicSkills.rapidCharge.amountMPRecoveredFromMaximizer": 0,
  "character.skills.magicSkills.enchantedBarriers.level": 0,
  "character.skills.magicSkills.magicGuardianBeam.level": 0,

  "character.skills.survivalSkills.playDead.level": 0,
  "character.skills.survivalSkills.EXPGainUP.level": 0,
  "character.skills.survivalSkills.dropRateUP.level": 0,
  "character.skills.survivalSkills.safeRest.level": 0,
  "character.skills.survivalSkills.HPBoost.level": 0,
  "character.skills.survivalSkills.fightersHigh.level": 0,
  "character.skills.survivalSkills.shortRest.level": 0,
  "character.skills.survivalSkills.MPBoost.level": 0,
  "character.skills.survivalSkills.soberAnalysis.level": 0,

  "character.skills.supportSkills.firstAid.level": 0,
  "character.skills.supportSkills.miniHeal.level": 0,
  "character.skills.supportSkills.recovery.level": 0,
  "character.skills.supportSkills.sanctuary.level": 0,
  "character.skills.supportSkills.heal.level": 0,
  "character.skills.supportSkills.lifeRecovery.level": 0,
  "character.skills.supportSkills.braveAura.level": 0,
  "character.skills.supportSkills.braveAura.isActive": false,
  "character.skills.supportSkills.highCycle.level": 0,
  "character.skills.supportSkills.highCycle.isActive": false,
  "character.skills.supportSkills.quickMotion.level": 0,
  "character.skills.supportSkills.quickMotion.isActive": false,
  "character.skills.supportSkills.manaRecharge.level": 0,
  "character.skills.supportSkills.manaRecharge.isActive": false,
  "character.skills.supportSkills.magicBarrier.level": 0,
  "character.skills.supportSkills.magicBarrier.isActive": false,
  "character.skills.supportSkills.immunity.level": 0,
  "character.skills.supportSkills.immunity.isActive": false,
  "character.skills.supportSkills.fastReaction.level": 0,
  "character.skills.supportSkills.fastReaction.isActive": false,

  "character.skills.battleSkills.magicUP.level": 0,
  "character.skills.battleSkills.concentrate.level": 0,
  "character.skills.battleSkills.attackUP.level": 0,
  "character.skills.battleSkills.whack.level": 0,
  "character.skills.battleSkills.defenseUP.level": 0,
  "character.skills.battleSkills.dodgeUP.level": 0,
  "character.skills.battleSkills.desperateResist.level": 0,
  "character.skills.battleSkills.criticalUP.level": 0,
  "character.skills.battleSkills.accuracyUP.level": 0,
  "character.skills.battleSkills.increasedEnergy.level": 0,
  "character.skills.battleSkills.intimidatingPower.level": 0,
  "character.skills.battleSkills.defenseMastery.level": 0,
  "character.skills.battleSkills.spellBurst.level": 0,
  "character.skills.battleSkills.secretChaseAttack.level": 0,
  "character.skills.battleSkills.superGrip.level": 0,

  "character.skills.mononofuSkills.issen.level": 0,
  "character.skills.mononofuSkills.pulseBlade.level": 0,
  "character.skills.mononofuSkills.tripleThrust.level": 0,
  "character.skills.mononofuSkills.tripleThrust.isActive": false,
  "character.skills.mononofuSkills.hassoHappa.level": 0,
  "character.skills.mononofuSkills.tenryuRansei.level": 0,
  "character.skills.mononofuSkills.kasumisetsuGetsuka.level": 0,
  "character.skills.mononofuSkills.garyouTensei.level": 0,
  "character.skills.mononofuSkills.shadowLessSlash.level": 0,
  "character.skills.mononofuSkills.pommelStrike.level": 0,
  "character.skills.mononofuSkills.magadachi.level": 0,
  "character.skills.mononofuSkills.zanteiSettetsu.level": 0,
  "character.skills.mononofuSkills.bushido.level": 0,
  "character.skills.mononofuSkills.shukuchi.level": 0,
  "character.skills.mononofuSkills.shukuchi.isActive": false,
  "character.skills.mononofuSkills.nukiuchiSennosen.level": 0,
  "character.skills.mononofuSkills.twoHanded.level": 0,
  "character.skills.mononofuSkills.meikyouShisui.level": 0,
  "character.skills.mononofuSkills.meikyouShisui.isActive": false,
  "character.skills.mononofuSkills.kairikiRanshin.level": 0,
  "character.skills.mononofuSkills.kairikiRanshin.isActive": false,
  "character.skills.mononofuSkills.dauntless.level": 0,
  "character.skills.mononofuSkills.dauntless.isActive": false,
  "character.skills.mononofuSkills.dauntless.stacks": 0,
  "character.skills.mononofuSkills.bouncingBlade.level": 0,
  "character.skills.mononofuSkills.bouncingBlade.isActive": false,

  "character.skills.dualSwordSkills.dualSwordMastery.level": 0,
  "character.skills.dualSwordSkills.twinSlash.level": 0,
  "character.skills.dualSwordSkills.spinningSlash.level": 0,
  "character.skills.dualSwordSkills.phantomSlash.level": 0,
  "character.skills.dualSwordSkills.aerialCut.level": 0,
  "character.skills.dualSwordSkills.crossParry.level": 0,
  "character.skills.dualSwordSkills.crossParry.isActive": false,
  "character.skills.dualSwordSkills.crossParryIsParried": false,
  "character.skills.dualSwordSkills.chargingSlash.level": 0,
  "character.skills.dualSwordSkills.shadowStep.level": 0,
  "character.skills.dualSwordSkills.shadowStep.isActive": false,
  "character.skills.dualSwordSkills.shiningCross.level": 0,
  "character.skills.dualSwordSkills.lunarMisfortune.level": 0,
  "character.skills.dualSwordSkills.twinBusterBlade.level": 0,
  "character.skills.dualSwordSkills.twinBusterBlade.isActive": 0,
  "character.skills.dualSwordSkills.reflex.level": 0,
  "character.skills.dualSwordSkills.flashBlast.level": 0,
  "character.skills.dualSwordSkills.flashBlast.isActive": false,
  "character.skills.dualSwordSkills.stormReaper.level": 0,
  "character.skills.dualSwordSkills.dualSwordControl.level": 0,
  "character.skills.dualSwordSkills.godspeed.level": 0,
  "character.skills.dualSwordSkills.saberAura.level": 0,
  "character.skills.dualSwordSkills.crescentSaber.level": 0,

  "character.skills.magicBladeSkills.magicWarriorMastery.level": 0,
  "character.skills.magicBladeSkills.conversion.level": 0,
  "character.skills.magicBladeSkills.conversion.isActive": false,
  "character.skills.magicBladeSkills.resonance.level": 0,
  "character.skills.magicBladeSkills.resonance.isActive": false,
  "character.skills.magicBladeSkills.resonance.activeSet": "ATK/MATK",
  "character.skills.magicBladeSkills.enchantedSpell.level": 0,
  "character.skills.magicBladeSkills.dualBringer.level": 0,
  "character.skills.magicBladeSkills.dualBringer.isActive": false,
  "character.skills.magicBladeSkills.etherFlare.level": 0,
  "character.skills.magicBladeSkills.etherFlare.isActive": false,
  "character.skills.magicBladeSkills.elementSlash.level": 0,
  "character.skills.magicBladeSkills.enchantSword.level": 0,
  "character.skills.magicBladeSkills.enchantedBurst.level": 0,
  "character.skills.magicBladeSkills.unionSword.level": 0,
  "character.skills.magicBladeSkills.siphonBarrier.level": 0,
  "character.skills.magicBladeSkills.siphonBarrier.isActive": false,
  "character.skills.magicBladeSkills.teleport.level": 0,
  "character.skills.magicBladeSkills.siphonRecall.level": 0,
  "character.skills.magicBladeSkills.floatDash.level": 0,
  "character.skills.magicBladeSkills.magicSkin.level": 0,

  "character.skills.shieldSkills.shieldMastery.level": 0,
  "character.skills.shieldSkills.shieldBash.level": 0,
  "character.skills.shieldSkills.shieldCannon.level": 0,
  "character.skills.shieldSkills.guardStrike.level": 0,
  "character.skills.shieldSkills.forceShield.level": 0,
  "character.skills.shieldSkills.magicalShield.level": 0,
  "character.skills.shieldSkills.shieldUppercut.level": 0,
  "character.skills.shieldSkills.dualShields.level": 0,
  "character.skills.shieldSkills.shieldRepair.level": 0,
  "character.skills.shieldSkills.belagerung.level": 0,
  "character.skills.shieldSkills.protection.level": 0,
  "character.skills.shieldSkills.protection.isActive": false,
  "character.skills.shieldSkills.aegis.level": 0,
  "character.skills.shieldSkills.aegis.isActive": false,
  "character.skills.shieldSkills.guardian.level": 0,

  "character.skills.guardSkills.heavyArmorMastery.level": 0,
  "character.skills.guardSkills.advancedGuard.level": 0,
  "character.skills.guardSkills.physicalGuard.level": 0,
  "character.skills.guardSkills.lightArmorMastery.level": 0,
  "character.skills.guardSkills.advancedEvasion.level": 0,
  "character.skills.guardSkills.mirageEvasion.level": 0,

  "character.skills.halberdSkills.flashStab.level": 0,
  "character.skills.halberdSkills.cannonSpear.level": 0,
  "character.skills.halberdSkills.dragonTail.level": 0,
  "character.skills.halberdSkills.diveImpact.level": 0,
  "character.skills.halberdSkills.dragonTooth.level": 0,
  "character.skills.halberdSkills.draconicCharge.level": 0,
  "character.skills.halberdSkills.deadlySpear.level": 0,
  "character.skills.halberdSkills.punishRay.level": 0,
  "character.skills.halberdSkills.strikeStab.level": 0,
  "character.skills.halberdSkills.chronosDivine.level": 0,
  "character.skills.halberdSkills.infiniteDimension.level": 0,
  "character.skills.halberdSkills.halberdMastery.level": 0,
  "character.skills.halberdSkills.criticalSpear.level": 0,
  "character.skills.halberdSkills.tornadoLance.level": 0,
  "character.skills.halberdSkills.quickAura.level": 0,
  "character.skills.halberdSkills.quickAura.isActive": false,
  "character.skills.halberdSkills.warCryOfStruggle.level": 0,
  "character.skills.halberdSkills.godspeedWield.level": 0,
  "character.skills.halberdSkills.godspeedWield.isActive": false,
  "character.skills.halberdSkills.godspeedWield.stacks": 0,
  "character.skills.halberdSkills.almightyWield.level": 0,
  "character.skills.halberdSkills.busterLance.level": 0,

  "character.skills.martialSkills.smash.level": 0,
  "character.skills.martialSkills.bash.level": 0,
  "character.skills.martialSkills.shellBreak.level": 0,
  "character.skills.martialSkills.heavySmash.level": 0,
  "character.skills.martialSkills.chariot.level": 0,
  "character.skills.martialSkills.abstractArms.level": 0,
  "character.skills.martialSkills.sonicWave.level": 0,
  "character.skills.martialSkills.earthbind.level": 0,
  "character.skills.martialSkills.tripleKick.level": 0,
  "character.skills.martialSkills.rush.level": 0,
  "character.skills.martialSkills.rush.isActive": false,
  "character.skills.martialSkills.asuraAura.level": 0,
  "character.skills.martialSkills.asuraAura.isActive": false,
  "character.skills.martialSkills.flashBlink.level": 0,
  "character.skills.martialSkills.martialMastery.level": 0,
  "character.skills.martialSkills.martialDiscipline.level": 0,
  "character.skills.martialSkills.chakra.level": 0,
  "character.skills.martialSkills.chakra.isActive": false,
  "character.skills.martialSkills.energyControl.level": 0,
  "character.skills.martialSkills.energyControl.isActive": false,
  "character.skills.martialSkills.aggravate.level": 0,
  "character.skills.martialSkills.strongChaseAttack.level": 0,
  "character.skills.martialSkills.slide.level": 0,

  "character.skills.bareHandSkills.unarmedMastery.level": 0,
  "character.skills.bareHandSkills.qiCharge.level": 0,
  "character.skills.bareHandSkills.lionRage.level": 0,
  "character.skills.bareHandSkills.ultimaLionRage.level": 0,
  "character.skills.bareHandSkills.ravingStorm.level": 0,
  "character.skills.bareHandSkills.ultimaRavingStorm.level": 0,
  "character.skills.bareHandSkills.internalElixir.level": 0,
  "character.skills.bareHandSkills.clashOfEnmity.level": 0,
  "character.skills.bareHandSkills.miracleComeback.level": 0,
  "character.skills.bareHandSkills.ultimaQiCharge.level": 0,
  "character.skills.bareHandSkills.hiddenTalent.level": 0,
  "character.skills.bareHandSkills.earthShaker.level": 0,
  "character.skills.bareHandSkills.earthShaker.isActive": false,

  "character.skills.hunterSkills.kick.level": 0,
  "character.skills.hunterSkills.sunriseArrow.level": 0,
  "character.skills.hunterSkills.magicArrow.level": 0,
  "character.skills.hunterSkills.magicArrow.isActive": false,
  "character.skills.hunterSkills.satelliteArrow.level": 0,
  "character.skills.hunterSkills.sleepTrap.level": 0,
  "character.skills.hunterSkills.bearTrap.level": 0,
  "character.skills.hunterSkills.landMine.level": 0,
  "character.skills.hunterSkills.darkTrap.level": 0,
  "character.skills.hunterSkills.homingShot.level": 0,
  "character.skills.hunterSkills.detection.level": 0,
  "character.skills.hunterSkills.detection.isActive": false,
  "character.skills.hunterSkills.cycloneArrow.level": 0,
  "character.skills.hunterSkills.verticalAir.level": 0,
  "character.skills.hunterSkills.hunterBowgun.level": 0,
  "character.skills.hunterSkills.multipleHunt.level": 0,
  "character.skills.hunterSkills.tripleAceShots.isActive": false,
  "character.skills.hunterSkills.wolfSniper.isActive": false,

  "character.skills.ninjaSkills.ninjutsu.level": 0,
  "character.skills.ninjaSkills.ninjaSpirit.level": 0,
  "character.skills.ninjaSkills.ninjutsuDrillI.level": 0,
  "character.skills.ninjaSkills.ninjutsuDrillII.level": 0,

  "character.skills.wizardSkills.familia.level": 0,
  "character.skills.wizardSkills.familia.isActive": false,
  "character.skills.wizardSkills.lightning.level": 0,
  "character.skills.wizardSkills.blizzard.level": 0,
  "character.skills.wizardSkills.meteorStrike.level": 0,
  "character.skills.wizardSkills.imperialRay.level": 0,
  "character.skills.wizardSkills.manaCrystal.level": 0,
  "character.skills.wizardSkills.stoneBarrier.level": 0,
  "character.skills.wizardSkills.advancedFamilia.level": 0,
  "character.skills.wizardSkills.advancedFamilia.isActive": 0,
  "character.skills.wizardSkills.castMastery.level": 0,
  "character.skills.wizardSkills.crystalLaser.level": 0,
  "character.skills.wizardSkills.overlimit.level": 0,
  "character.skills.wizardSkills.overlimit.isActive": false,
  "character.skills.wizardSkills.sorceryGuide.level": 0,

  "character.skills.priestSkills.bless.level": 0,
  "character.skills.priestSkills.gloria.level": 0,
  "character.skills.priestSkills.enhancedBless.level": 0,
  "character.skills.priestSkills.royalHeal.level": 0,
  "character.skills.priestSkills.holyFist.level": 0,
  "character.skills.priestSkills.holyLight.level": 0,
  "character.skills.priestSkills.etherBarrier.level": 0,
  "character.skills.priestSkills.etherBarrier.isActive": false,
  "character.skills.priestSkills.prayer.level": 0,
  "character.skills.priestSkills.prayer.isActive": false,
  "character.skills.priestSkills.staffThrust.level": 0,
  "character.skills.priestSkills.exorcism.level": 0,
  "character.skills.priestSkills.holyBook.level": 0,
  "character.skills.priestSkills.holyBook.isActive": false,
  "character.skills.priestSkills.nemesis.level": 0,

  "character.regislets.zeroStance.level": 0,
  "character.regislets.maxHPBoost.level": 0,
  "character.regislets.maxMPBoost.level": 0,
  "character.regislets.magicAttackBoost.level": 0,
  "character.regislets.physicalAttackBoost.level": 0,
  "character.regislets.magicDefenseBoost.level": 0,
  "character.regislets.physicalDefenseBoost.level": 0,
  "character.regislets.attackSpeedBoost.level": 0,
  "character.regislets.magicSpeedBoost.level": 0,
  "character.regislets.dodgeBoost.level": 0,
  "character.regislets.accuracyBoost.level": 0,
  "character.regislets.focusResonance.level": 0,
  "character.regislets.speedResonance.level": 0,
  "character.regislets.powerResonance.level": 0,

  "character.consumables": [],
  "character.foodBuffs": [],

  "character.ailments.weaken.isActive": false,
  "character.ailments.flinch.isActive": false,
  "character.ailments.tumble.isActive": false,
  "character.ailments.stun.isActive": false,
  "character.ailments.knockback.isActive": false,
  "character.ailments.poison.isActive": false,
  "character.ailments.paralysis.isActive": false,
  "character.ailments.blindness.isActive": false,
  "character.ailments.ignition.isActive": false,
  "character.ailments.freeze.isActive": false,
  "character.ailments.armorBreak.isActive": false,
  "character.ailments.slow.isActive": false,
  "character.ailments.stop.isActive": false,
  "character.ailments.fear.isActive": false,
  "character.ailments.dizzy.isActive": false,
  "character.ailments.lethargy.isActive": false,
  "character.ailments.silence.isActive": false,
  "character.ailments.bleed.isActive": false,
  "character.ailments.fatigue.isActive": false,
  "character.ailments.dazzled.isActive": false,

  // target
  "target.level": 0,
  "target.physicalResistance": 0,
  "target.magicResistance": 0,
  "target.weaponResistance": 0,
  "target.DEF": 0,
  "target.MDEF": 0,
  "target.element": "neutral",
  "target.ailments.weaken.isActive": false,
  "target.ailments.flinch.isActive": false,
  "target.ailments.tumble.isActive": false,
  "target.ailments.stun.isActive": false,
  "target.ailments.knockback.isActive": false,
  "target.ailments.poison.isActive": false,
  "target.ailments.paralysis.isActive": false,
  "target.ailments.blindness.isActive": false,
  "target.ailments.ignition.isActive": false,
  "target.ailments.freeze.isActive": false,
  "target.ailments.armorBreak.isActive": false,
  "target.ailments.slow.isActive": false,
  "target.ailments.stop.isActive": false,
  "target.ailments.fear.isActive": false,
  "target.ailments.dizzy.isActive": false,
  "target.ailments.lethargy.isActive": false,
  "target.ailments.silence.isActive": false,
  "target.ailments.bleed.isActive": false,
  "target.ailments.fatigue.isActive": false,
  "target.ailments.dazzled.isActive": false,

  "target.distanceFromPlayer": 0,
  "target.proration": 0,

  // damage instance

  "damage.base": 0,
  "damage.constant": 0,
  "damage.pierce": 0,
  "damage.flatUnsheatheAttack": 0,
  "damage.criticalDamageModifier": 100,
  "damage.elementDamageModifier": 100,
  "damage.innateSkillDamageModifier": 100,
  "damage.percentUnsheatheAttack": 100,
  "damage.stability": 100,
  "damage.skillDamageModifier": 100,
  "damage.distanceDependentDamageModifier": 100,
  "damage.lastDamageModifier": 100,
  "damage.comboRelatedDamageModifier": 100,
  "damage.baseDropGemDamageModifier": 100,
  "damage.ultimaLionRageDamageModifier": 100,
  "damage.isGuarded": false,
  "damage.isGrazed:": false,
};

export const createIntermediateConfig = (
  config: Partial<IntermediateConfig>,
): Partial<IntermediateConfig> & IntermediateConfig => ({
  ...defaultIntermediateConfig,
  ...(config as Partial<IntermediateConfig>),
});

export enum StatId {
  flatSTR,
  percentSTR,

  flatINT,
  percentINT,

  flatDEX,
  percentDEX,

  flatVIT,
  percentVIT,

  flatAGI,
  percentAGI,

  flatWeaponATK,
  percentWeaponATK,

  flatMATK,
  percentMATK,

  flatATK,
  percentATK,

  flatASPD,
  percentASPD,

  flatCSPD,
  percentCSPD,

  flatCriticalRate,
  percentCriticalRate,

  flatCriticalDamage,
  percentCriticalDamage,

  flatMaxHP,
  percentMaxHP,

  flatMaxMP,
  percentMaxMP,

  flatAccuracy,
  percentAccuracy,

  flatDodge,
  percentDodge,

  flatDEF,
  percentDEF,

  flatMDEF,
  percentMDEF,

  flatUnsheatheAttack,
  percentUnsheatheAttack,

  flatAttackMPRecovery,
  percentAttackMPRecovery,

  flatNaturalHPRegen,
  percentNaturalHPRegen,
  flatNaturalMPRegen,
  percentNaturalMPRegen,

  stability,

  magicPierce,
  physicalPierce,

  longRangeDamage,
  shortRangeDamage,

  motionSpeed,

  ATKUPSTR,
  ATKUPINT,
  ATKUPDEX,
  ATKUPVIT,
  ATKUPAGI,

  MATKUPSTR,
  MATKUPINT,
  MATKUPDEX,
  MATKUPVIT,
  MATKUPAGI,

  ATKDOWNSTR,
  ATKDOWNINT,
  ATKDOWNDEX,
  ATKDOWNVIT,
  ATKDOWNAGI,

  MATKDOWNSTR,
  MATKDOWNINT,
  MATKDOWNDEX,
  MATKDOWNVIT,
  MATKDOWNAGI,

  magicResistance,
  physicalResistance,

  lightResistance,
  darkResistance,

  fireResistance,
  waterResistance,
  earthResistance,
  windResistance,

  neutralResistance,
  ailmentResistance,

  damageToDark,
  damageToLight,
  damageToEarth,
  damageToWater,
  damageToFire,
  damageToWind,

  aggro,

  tumbleUnavailable,
  flinchUnavailable,
  stunUnavailable,

  darkElement,
  lightElement,
  earthElement,
  waterElement,
  fireElement,
  windElement,

  guardPower,
  guardRecharge,
  guardBreak,

  evasionRecharge,
  anticipate,

  itemCooldown,
  invincibleAid,

  absoluteAccuracy,
  absoluteDodge,

  physicalBarrier,
  magicBarrier,
  fractionalBarrier,
  barrierCooldown,

  additionalMelee,
  additionalMagic,
}
