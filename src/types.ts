//

export type OneHandedSword = "one-handed-sword";

export type TwoHandedSword = "two-handed-sword";

export type Bow = "bow";

export type Bowgun = "bowgun";

export type Staff = "staff";

export type MagicDevice = "magic-device";

export type Halberd = "halberd";

export type Katana = "katana";

export type Knuckle = "knuckle";

export type BareHand = "bare-hand";

export type MainWeaponType =
  | OneHandedSword
  | TwoHandedSword
  | Bow
  | Bowgun
  | Staff
  | MagicDevice
  | Halberd
  | Katana
  | Knuckle
  | BareHand;

export type NinjutsuScroll = "ninjutsu-scroll";

export type Arrow = "arrow";

export type Shield = "shield";

export type Dagger = "dagger";

export type None = "none";

export type SubWeaponType =
  | OneHandedSword
  | Katana
  | Knuckle
  | MagicDevice
  | NinjutsuScroll
  | Arrow
  | Shield
  | Dagger
  | None;

export type Light = "light";

export type Heavy = "heavy";

export type Normal = "normal";

export type ArmorType = Light | Heavy | Normal | None;

export type Fire = "fire";

export type Water = "water";

export type Earth = "earth";

export type Wind = "wind";

export type Dark = "dark";

export type Neutral = "neutral";

export type ElementType =
  | Light
  | Dark
  | Fire
  | Water
  | Wind
  | Earth
  | Neutral;

export interface StatMap {
  flatSTR: number;
  percentSTR: number;

  flatINT: number;
  percentINT: number;

  flatDEX: number;
  percentDEX: number;

  flatVIT: number;
  percentVIT: number;

  flatAGI: number;
  percentAGI: number;

  flatWeaponATK: number;
  percentWeaponATK: number;

  flatMATK: number;
  percentMATK: number;

  flatATK: number;
  percentATK: number;

  flatASPD: number;
  percentASPD: number;

  flatCSPD: number;
  percentCSPD: number;

  flatCriticalRate: number;
  percentCriticalRate: number;

  flatCriticalDamage: number;
  percentCriticalDamage: number;

  flatMaxHP: number;
  percentMaxHP: number;

  flatMaxMP: number;
  percentMaxMP: number;

  flatAccuracy: number;
  percentAccuracy: number;

  flatDodge: number;
  percentDodge: number;

  flatDEF: number;
  percentDEF: number;

  flatMDEF: number;
  percentMDEF: number;

  flatUnsheatheAttack: number;
  percentUnsheatheAttack: number;

  flatAttackMPRecovery: number;
  percentAttackMPRecovery: number;

  stability: number;

  magicPierce: number;
  physicalPierce: number;

  longRangeDamage: number;
  shortRangeDamage: number;

  motionSpeed: number;

  ATKUPSTR: number;
  ATKUPINT: number;
  ATKUPDEX: number;
  ATKUPVIT: number;
  ATKUPAGI: number;

  MATKUPSTR: number;
  MATKUPINT: number;
  MATKUPDEX: number;
  MATKUPVIT: number;
  MATKUPAGI: number;

  ATKDOWNSTR: number;
  ATKDOWNINT: number;
  ATKDOWNDEX: number;
  ATKDOWNVIT: number;
  ATKDOWNAGI: number;

  MATKDOWNSTR: number;
  MATKDOWNINT: number;
  MATKDOWNDEX: number;
  MATKDOWNVIT: number;
  MATKDOWNAGI: number;

  physicalResistance: number;
  magicResistance: number;

  lightResistance: number;
  darkResistance: number;

  fireResistance: number;
  waterResistance: number;
  earthResistance: number;
  windResistance: number;

  neutralResistance: number;

  ailmentResistance: number;

  damageToFire: number;
  damageToEarth: number;
  damageToWater: number;
  damageToWind: number;
  damageToDark: number;
  damageToLight: number;

  aggro: number;

  guardPower: number;
  guardRecharge: number;

  evasionRecharge: number;

  itemCooldown: number;
  invincibleAid: number;

  element: ElementType;
  tumbleUnavailable: boolean;
  flinchUnavailable: boolean;
  stunUnavailable: boolean;
}

export interface Config {
  "character.level": number;

  "character.STR": number;
  "character.DEX": number;
  "character.INT": number;
  "character.VIT": number;
  "character.AGI": number;

  "character.CRT": number;
  "character.MTL": number;
  "character.TEC": number;
  "character.LUK": number;

  "character.mainweapon.type": MainWeaponType;
  "character.mainweapon.ATK": number;
  "character.mainweapon.refinement": number;
  "character.mainweapon.stability": number;
  "character.mainweapon.stats": StatMap[];
  "character.mainweapon.crystals": StatMap[][];

  "character.subweapon.type": SubWeaponType;
  "character.subweapon.ATK": number;
  "character.subweapon.DEF": number;
  "character.subweapon.refinement": number;
  "character.subweapon.stability": number;
  "character.subweapon.stats": StatMap[];
  "character.subweapon.crystals": StatMap[][];
  "character.subweapon.scrollCastTimeReduction": number;
  "character.subweapon.scrollMPReduction": number;

  "character.armor.DEF": number;
  "character.armor.refinement": number;
  "character.armor.type": ArmorType;
  "character.armor.stats": StatMap[];
  "character.armor.crystals": StatMap[][];

  "character.additionalGear.DEF": number;
  "character.additionalGear.refinement": number;
  "character.additionalGear.stats": StatMap[];
  "character.additionalGear.crystals": StatMap[][];

  "character.specialGear.DEF": number;
  "character.specialGear.stats": StatMap[];
  "character.specialGear.crystals": StatMap[][];

  "character.skills.bladeSkills.hardHit.level": number;
  "character.skills.bladeSkills.astute.level": number;
  "character.skills.bladeSkills.triggerSlash.level": number;
  "character.skills.bladeSkills.rampage.level": number;
  "character.skills.bladeSkills.meteorBreaker.level": number;
  "character.skills.bladeSkills.shutOut.level": number;
  "character.skills.bladeSkills.lunarSlash.level": number;
  "character.skills.bladeSkills.sonicBlade.level": number;
  "character.skills.bladeSkills.spiralAir.level": number;
  "character.skills.bladeSkills.swordTempest.level": number;
  "character.skills.bladeSkills.busterBlade.level": number;
  "character.skills.bladeSkills.busterBlade.isActive": boolean;
  "character.skills.bladeSkills.auraBlade.level": number;
  "character.skills.bladeSkills.swordMastery.level": number;
  "character.skills.bladeSkills.quickSlash.level": number;
  "character.skills.bladeSkills.swordTechniques.level": number;
  "character.skills.bladeSkills.warCry.level": number;
  "character.skills.bladeSkills.warCry.isActive": boolean;
  "character.skills.bladeSkills.berserk.level": number;
  "character.skills.bladeSkills.berserk.isActive": boolean;
  "character.skills.bladeSkills.gladiate.level": number;
  "character.skills.bladeSkills.swiftAttack.level": number;

  "character.skills.shotSkills.powerShot.level": number;
  "character.skills.shotSkills.bullseye.level": number;
  "character.skills.shotSkills.arrowRain.level": number;
  "character.skills.shotSkills.snipe.level": number;
  "character.skills.shotSkills.crossFire.level": number;
  "character.skills.shotSkills.vanquisher.level": number;
  "character.skills.shotSkills.twinStorm.level": number;
  "character.skills.shotSkills.retrogradeShot.level": number;
  "character.skills.shotSkills.moebaShot.level": number;
  "character.skills.shotSkills.paralysisShot.level": number;
  "character.skills.shotSkills.smokeDust.level": number;
  "character.skills.shotSkills.armBreak.level": number;
  "character.skills.shotSkills.parabolaCannon.level": number;
  "character.skills.shotSkills.shotMastery.level": number;
  "character.skills.shotSkills.samuraiArchery.level": number;
  "character.skills.shotSkills.samuraiArchery.stacks": number;
  "character.skills.shotSkills.sneakAttack.level": number;
  "character.skills.shotSkills.longRange.level": number;
  "character.skills.shotSkills.quickDraw.level": number;
  "character.skills.shotSkills.decoyShot.level": number;
  "character.skills.shotSkills.fatalShot.level": number;

  "character.skills.magicSkills.magicArrows.level": number;
  "character.skills.magicSkills.magicJavelin.level": number;
  "character.skills.magicSkills.magicLances.level": number;
  "character.skills.magicSkills.magicImpact.level": number;
  "character.skills.magicSkills.magicFinale.level": number;
  "character.skills.magicSkills.chronosShift.level": number;
  "character.skills.magicSkills.magicWall.level": number;
  "character.skills.magicSkills.magicBlast.level": number;
  "character.skills.magicSkills.magicStorm.level": number;
  "character.skills.magicSkills.magicBurst.level": number;
  "character.skills.magicSkills.magicCannon.level": number;
  "character.skills.magicSkills.magicCrash.level": number;
  "character.skills.magicSkills.magicMastery.level": number;
  "character.skills.magicSkills.magicKnife.level": number;
  "character.skills.magicSkills.qadal.level": number;
  "character.skills.magicSkills.qadal.charge": number;
  "character.skills.magicSkills.qadal.isActive": boolean;
  "character.skills.magicSkills.qadal.timer": number;
  "character.skills.magicSkills.MPCharge.level": number;
  "character.skills.magicSkills.chainCast.level": number;
  "character.skills.magicSkills.powerWave.level": number;
  "character.skills.magicSkills.maximizer.level": number;
  "character.skills.magicSkills.rapidCharge.level": number;
  "character.skills.magicSkills.enchantedBarriers.level": number;
  "character.skills.magicSkills.magicGuardianBeam.level": number;

  "character.skills.survivalSkills.playDead.level": number;
  "character.skills.survivalSkills.EXPGainUP.level": number;
  "character.skills.survivalSkills.dropRateUP.level": number;
  "character.skills.survivalSkills.safeRest.level": number;
  "character.skills.survivalSkills.HPBoost.level": number;
  "character.skills.survivalSkills.fightersHigh.level": number;
  "character.skills.survivalSkills.shortRest.level": number;
  "character.skills.survivalSkills.MPBoost.level": number;
  "character.skills.survivalSkills.soberAnalysis.level": number;

  "character.skills.supportSkills.firstAid.level": number;
  "character.skills.supportSkills.miniHeal.level": number;
  "character.skills.supportSkills.recovery.level": number;
  "character.skills.supportSkills.sanctuary.level": number;
  "character.skills.supportSkills.heal.level": number;
  "character.skills.supportSkills.lifeRecovery.level": number;
  "character.skills.supportSkills.braveAura.level": number;
  "character.skills.supportSkills.braveAura.isActive": boolean;
  "character.skills.supportSkills.highCycle.level": number;
  "character.skills.supportSkills.highCycle.isActive": boolean;
  "character.skills.supportSkills.quickMotion.level": number;
  "character.skills.supportSkills.quickMotion.isActive": number;
  "character.skills.supportSkills.manaRecharge.level": number;
  "character.skills.supportSkills.manaRecharge.isActive": boolean;
  "character.skills.supportSkills.magicBarrier.level": number;
  "character.skills.supportSkills.immunity.level": number;
  "character.skills.supportSkills.fastReaction.level": number;

  "character.skills.battleSkills.magicUP.level": number;
  "character.skills.battleSkills.concentrate.level": number;
  "character.skills.battleSkills.attackUP.level": number;
  "character.skills.battleSkills.whack.level": number;
  "character.skills.battleSkills.defenseUP.level": number;
  "character.skills.battleSkills.dodgeUP.level": number;
  "character.skills.battleSkills.desperateResist.level": number;
  "character.skills.battleSkills.criticalUP.level": number;
  "character.skills.battleSkills.accuracyUP.level": number;
  "character.skills.battleSkills.increasedEnergy.level": number;
  "character.skills.battleSkills.intimidatingPower.level": number;
  "character.skills.battleSkills.defenseMastery.level": number;
  "character.skills.battleSkills.spellBurst.level": number;
  "character.skills.battleSkills.secretChaseAttack.level": number;
  "character.skills.battleSkills.superGrip.level": number;

  "character.skills.mononofuSkills.issen.level": number;
  "character.skills.mononofuSkills.pulseBlade.level": number;
  "character.skills.mononofuSkills.tripleThrust.level": number;
  "character.skills.mononofuSkills.hassoHappa.level": number;
  "character.skills.mononofuSkills.tenryuRansei.level": number;
  "character.skills.mononofuSkills.kasumisetsuGetsuka.level": number;
  "character.skills.mononofuSkills.garyouTensei.level": number;
  "character.skills.mononofuSkills.shadowLessSlash.level": number;
  "character.skills.mononofuSkills.pommelStrike.level": number;
  "character.skills.mononofuSkills.magadachi.level": number;
  "character.skills.mononofuSkills.zanteiSettetsu.level": number;
  "character.skills.mononofuSkills.bushido.level": number;
  "character.skills.mononofuSkills.shukuchi.level": number;
  "character.skills.mononofuSkills.nukiuchiSennosen.level": number;
  "character.skills.mononofuSkills.twoHanded.level": number;
  "character.skills.mononofuSkills.meikyouShisui.level": number;
  "character.skills.mononofuSkills.kairikiRanshin.level": number;
  "character.skills.mononofuSkills.dauntless.level": number;
  "character.skills.mononofuSkills.bouncingBlade.level": number;

  "character.skills.dualSwordSkills.dualSwordMastery.level": number;
  "character.skills.dualSwordSkills.twinSlash.level": number;
  "character.skills.dualSwordSkills.spinningSlash.level": number;
  "character.skills.dualSwordSkills.phantomSlash.level": number;
  "character.skills.dualSwordSkills.aerialCut.level": number;
  "character.skills.dualSwordSkills.crossParry.level": number;
  "character.skills.dualSwordSkills.chargingSlash.level": number;
  "character.skills.dualSwordSkills.shadowStep.level": number;
  "character.skills.dualSwordSkills.shiningCross.level": number;
  "character.skills.dualSwordSkills.lunarMisfortune.level": number;
  "character.skills.dualSwordSkills.twinBusterBlade.level": number;
  "character.skills.dualSwordSkills.reflex.level": number;
  "character.skills.dualSwordSkills.flashBlast.level": number;
  "character.skills.dualSwordSkills.flashBlast.isActive": boolean;
  "character.skills.dualSwordSkills.stormReaper.level": number;
  "character.skills.dualSwordSkills.dualSwordControl.level": number;
  "character.skills.dualSwordSkills.godspeed.level": number;
  "character.skills.dualSwordSkills.saberAura.level": number;
  "character.skills.dualSwordSkills.crescentSaber.level": number;

  "character.skills.magicBladeSkills.magicWarriorMastery.level": number;
  "character.skills.magicBladeSkills.conversion.level": number;
  "character.skills.magicBladeSkills.conversion.isActive": boolean;
  "character.skills.magicBladeSkills.resonance.level": number;
  "character.skills.magicBladeSkills.resonance.isActive": boolean;
  "character.skills.magicBladeSkills.resonance.activeSet":
    | "ATK/MATK"
    | "ASPD/CSPD"
    | "ACC/CRIT";
  "character.skills.magicBladeSkills.enchantedSpell.level": number;
  "character.skills.magicBladeSkills.dualBringer.level": number;
  "character.skills.magicBladeSkills.dualBringer.isActive": boolean;
  "character.skills.magicBladeSkills.etherFlare.level": number;
  "character.skills.magicBladeSkills.etherFlare.inflictedIgniteOnEnemey": boolean;
  "character.skills.magicBladeSkills.elementSlash.level": number;
  "character.skills.magicBladeSkills.enchantSword.level": number;
  "character.skills.magicBladeSkills.enchantedBurst.level": number;
  "character.skills.magicBladeSkills.unionSword.level": number;
  "character.skills.magicBladeSkills.siphonBarrier.level": number;
  "character.skills.magicBladeSkills.siphonBarrier.isActive": boolean;
  "character.skills.magicBladeSkills.teleport.level": number;
  "character.skills.magicBladeSkills.siphonRecall.level": number;
  "character.skills.magicBladeSkills.floatDash.level": number;
  "character.skills.magicBladeSkills.magicSkin.level": number;

  "character.skills.shieldSkills.shieldMastery.level": number;
  "character.skills.shieldSkills.shieldBash.level": number;
  "character.skills.shieldSkills.shieldCannon.level": number;
  "character.skills.shieldSkills.guardStrike.level": number;
  "character.skills.shieldSkills.forceShield.level": number;
  "character.skills.shieldSkills.magicalShield.level": number;
  "character.skills.shieldSkills.shieldUppercut.level": number;
  "character.skills.shieldSkills.dualShields.level": number;
  "character.skills.shieldSkills.shieldRepair.level": number;
  "character.skills.shieldSkills.belagerung.level": number;
  "character.skills.shieldSkills.protection.level": number;
  "character.skills.shieldSkills.aegis.level": number;
  "character.skills.shieldSkills.guardian.level": number;

  "character.skills.guardSkills.heavyArmorMastery.level": number;
  "character.skills.guardSkills.advancedGuard.level": number;
  "character.skills.guardSkills.physicalGuard.level": number;
  "character.skills.guardSkills.lightArmorMastery.level": number;
  "character.skills.guardSkills.advancedEvasion.level": number;
  "character.skills.guardSkills.mirageEvasion.level": number;

  "character.skills.halberdSkills.flashStab.level": number;
  "character.skills.halberdSkills.cannonSpear.level": number;
  "character.skills.halberdSkills.dragonTail.level": number;
  "character.skills.halberdSkills.diveImpact.level": number;
  "character.skills.halberdSkills.dragonTooth.level": number;
  "character.skills.halberdSkills.draconicCharge.level": number;
  "character.skills.halberdSkills.deadlySpear.level": number;
  "character.skills.halberdSkills.punishRay.level": number;
  "character.skills.halberdSkills.strikeStab.level": number;
  "character.skills.halberdSkills.chronosDivine.level": number;
  "character.skills.halberdSkills.infiniteDimension.level": number;
  "character.skills.halberdSkills.halberdMastery.level": number;
  "character.skills.halberdSkills.criticalSpear.level": number;
  "character.skills.halberdSkills.tornadoLance.level": number;
  "character.skills.halberdSkills.quickAura.level": number;
  "character.skills.halberdSkills.quickAura.isActive": boolean;
  "character.skills.halberdSkills.warCryOfStruggle.level": number;
  "character.skills.halberdSkills.godspeedWield.level": number;
  "character.skills.halberdSkills.godspeedWield.isActive": boolean;
  "character.skills.halberdSkills.godspeedWield.stacks": number;
  "character.skills.halberdSkills.almightyWield.level": number;
  "character.skills.halberdSkills.busterLance.level": number;

  "character.skills.martialSkills.smash.level": number;
  "character.skills.martialSkills.bash.level": number;
  "character.skills.martialSkills.shellBreak.level": number;
  "character.skills.martialSkills.heavySmash.level": number;
  "character.skills.martialSkills.chariot.level": number;
  "character.skills.martialSkills.abstractArms.level": number;
  "character.skills.martialSkills.sonicWave.level": number;
  "character.skills.martialSkills.earthbind.level": number;
  "character.skills.martialSkills.tripleKick.level": number;
  "character.skills.martialSkills.rush.level": number;
  "character.skills.martialSkills.asuraAura.level": number;
  "character.skills.martialSkills.flashBlink.level": number;
  "character.skills.martialSkills.martialMastery.level": number;
  "character.skills.martialSkills.martialDiscipline.level": number;
  "character.skills.martialSkills.chakra.level": number;
  "character.skills.martialSkills.energyControl.level": number;
  "character.skills.martialSkills.aggravate.level": number;
  "character.skills.martialSkills.strongChaseAttack.level": number;
  "character.skills.martialSkills.slide.level": number;

  "character.skills.bareHandSkills.unarmedMastery.level": number;
  "character.skills.bareHandSkills.qiCharge.level": number;
  "character.skills.bareHandSkills.lionRage.level": number;
  "character.skills.bareHandSkills.ultimaLionRage.level": number;
  "character.skills.bareHandSkills.ravingStorm.level": number;
  "character.skills.bareHandSkills.ultimaRavingStorm.level": number;
  "character.skills.bareHandSkills.internalElixir.level": number;
  "character.skills.bareHandSkills.clashOfEnmity.level": number;
  "character.skills.bareHandSkills.miracleComeback.level": number;
  "character.skills.bareHandSkills.ultimaQiCharge.level": number;
  "character.skills.bareHandSkills.hiddenTalent.level": number;
  "character.skills.bareHandSkills.earthShaker.level": number;

  "character.skills.hunterSkills.kick.level": number;
  "character.skills.hunterSkills.sunriseArrow.level": number;
  "character.skills.hunterSkills.magicArrow.level": number;
  "character.skills.hunterSkills.satelliteArrow.level": number;
  "character.skills.hunterSkills.sleepTrap.level": number;
  "character.skills.hunterSkills.bearTrap.level": number;
  "character.skills.hunterSkills.landMine.level": number;
  "character.skills.hunterSkills.darkTrap.level": number;
  "character.skills.hunterSkills.homingShot.level": number;
  "character.skills.hunterSkills.detection.level": number;
  "character.skills.hunterSkills.cycloneArrow.level": number;
  "character.skills.hunterSkills.verticalAir.level": number;
  "character.skills.hunterSkills.hunterBowgun.level": number;
  "character.skills.hunterSkills.multipleHunt.level": number;

  "character.skills.ninjaSkills.ninjutsu.level": number;
  "character.skills.ninjaSkills.ninjaSpirit.level": number;
  "character.skills.ninjaSkills.ninjutsuDrillI.level": number;
  "character.skills.ninjaSkills.ninjutsuDrillII.level": number;

  "character.skills.wizardSkills.familia.level": number;
  "character.skills.wizardSkills.familia.isActive": boolean;
  "character.skills.wizardSkills.lightning.level": number;
  "character.skills.wizardSkills.blizzard.level": number;
  "character.skills.wizardSkills.meteorStrike.level": number;
  "character.skills.wizardSkills.imperialRay.level": number;
  "character.skills.wizardSkills.manaCrystal.level": number;
  "character.skills.wizardSkills.stoneBarrier.level": number;
  "character.skills.wizardSkills.advancedFamilia.level": number;
  "character.skills.wizardSkills.castMastery.level": number;
  "character.skills.wizardSkills.crystalLaser.level": number;
  "character.skills.wizardSkills.overlimit.level": number;
  "character.skills.wizardSkills.overlimit.isActive": boolean;
  "character.skills.wizardSkills.sorceryGuide.level": number;

  "character.regislets.zeroStance.level": number;
  "character.regislets.maxHPBoost.level": number;
  "character.regislets.maxMPBoost.level": number;
  "character.regislets.magicAttackBoost.level": number;
  "character.regislets.physicalAttackBoost.level": number;
  "character.regislets.magicDefenseBoost.level": number;
  "character.regislets.physicalDefenseBoost.level": number;
  "character.regislets.attackSpeedBoost.level": number;
  "character.regislets.magicSpeedBoost.level": number;
  "character.regislets.dodgeBoost.level": number;
  "character.regislets.accuracyBoost.level": number;
  "character.regislets.focusResonance.level": number;
  "character.regislets.speedResonance.level": number;
  "character.regislets.powerResonance.level": number;

  "character.consumables": StatMap[]; // statmap for now
  "character.foodBuffs": StatMap[]; // statmap for now

  "character.ailments.weaken.isActive": boolean;
  "character.ailments.flinch.isActive": boolean;
  "character.ailments.tumble.isActive": boolean;
  "character.ailments.stun.isActive": boolean;
  "character.ailments.knockback.isActive": boolean;
  "character.ailments.poison.isActive": boolean;
  "character.ailments.paralysis.isActive": boolean;
  "character.ailments.blindness.isActive": boolean;
  "character.ailments.ignition.isActive": boolean;
  "character.ailments.freeze.isActive": boolean;
  "character.ailments.armorBreak.isActive": boolean;
  "character.ailments.slow.isActive": boolean;
  "character.ailments.stop.isActive": boolean;
  "character.ailments.fear.isActive": boolean;
  "character.ailments.dizzy.isActive": boolean;
  "character.ailments.lethargy.isActive": boolean;
  "character.ailments.silence.isActive": boolean;
  "character.ailments.bleed.isActive": boolean;
  "character.ailments.fatigue.isActive": boolean;
  "character.ailments.dazzled.isActive": boolean;

  // target
  "target.level": number;
  "target.physicalResistance": number;
  "target.magicResistance": number;
  "target.weaponResistance": number;
  "target.DEF": number;
  "target.MDEF": number;
  "target.element": ElementType;
  "target.ailments.weaken.isActive": boolean;
  "target.ailments.flinch.isActive": boolean;
  "target.ailments.tumble.isActive": boolean;
  "target.ailments.stun.isActive": boolean;
  "target.ailments.knockback.isActive": boolean;
  "target.ailments.poison.isActive": boolean;
  "target.ailments.paralysis.isActive": boolean;
  "target.ailments.blindness.isActive": boolean;
  "target.ailments.ignition.isActive": boolean;
  "target.ailments.freeze.isActive": boolean;
  "target.ailments.armorBreak.isActive": boolean;
  "target.ailments.slow.isActive": boolean;
  "target.ailments.stop.isActive": boolean;
  "target.ailments.fear.isActive": boolean;
  "target.ailments.dizzy.isActive": boolean;
  "target.ailments.lethargy.isActive": boolean;
  "target.ailments.silence.isActive": boolean;
  "target.ailments.bleed.isActive": boolean;
  "target.ailments.fatigue.isActive": boolean;
  "target.ailments.dazzled.isActive": boolean;

  "target.distanceFromPlayer": number;
  "target.proration": number;

  // damage instance

  "damage.base": number;
  "damage.constant": number;
  "damage.pierce": number;
  "damage.flatUnsheatheAttack": number;
  "damage.criticalDamageModifier": number;
  "damage.elementDamageModifier": number;
  "damage.innateSkillDamageModifier": number;
  "damage.percentUnsheatheAttack": number;
  "damage.stability": number;
  "damage.skillDamageModifier": number;
  "damage.distanceDependentDamageModifier": number;
  "damage.lastDamageModifier": number;
  "damage.comboRelatedDamageModifier": number;
  "damage.baseDropGemDamageModifier": number;
  "damage.ultimaLionRageDamageModifier": number;
  "damage.isGuarded": boolean;
  "damage.isGrazed:": boolean;
}

// target

export interface Target {
  level: number;
  physicalResistance: number;
  magicResistance: number;
  weaponResistance: number;
  DEF: number;
  MDEF: number;
  element: ElementType;
  isAffectedByArmorBreak: boolean;
  isAffectedByWeaken: boolean;
  distanceFromPlayer: number;
  proration: number;
}

// utils

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
