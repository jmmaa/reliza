//
import { StatId } from "./modules/utils";

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

export type Stat = [StatId, number];

export type StatMapBuilder = <I extends IntermediateConfig>(
  _: I,
) => Stat[];

export interface IntermediateConfig {
  "character.level": number;

  "character.STR": number;
  "character.DEX": number;
  "character.INT": number;
  "character.VIT": number;
  "character.AGI": number;

  "character.personalStat": "CRT" | "LUK" | "TEC" | "MTL" | "none";
  "character.personalStatValue": number;

  "character.mainweapon.type": MainWeaponType;
  "character.mainweapon.ATK": number;
  "character.mainweapon.refinement": number;
  "character.mainweapon.stability": number;
  "character.mainweapon.stats": StatMapBuilder;
  "character.mainweapon.crystals": StatMapBuilder[];

  "character.subweapon.type": SubWeaponType;
  "character.subweapon.ATK": number;
  "character.subweapon.DEF": number;
  "character.subweapon.refinement": number;
  "character.subweapon.stability": number;
  "character.subweapon.stats": StatMapBuilder;
  "character.subweapon.crystals": StatMapBuilder[];
  "character.subweapon.scrollCastTimeReduction": number;
  "character.subweapon.scrollMPReduction": number;

  "character.armor.DEF": number;
  "character.armor.refinement": number;
  "character.armor.type": ArmorType;
  "character.armor.stats": StatMapBuilder;
  "character.armor.crystals": StatMapBuilder[];

  "character.additionalGear.DEF": number;
  "character.additionalGear.refinement": number;
  "character.additionalGear.stats": StatMapBuilder;
  "character.additionalGear.crystals": StatMapBuilder[];

  "character.specialGear.DEF": number;
  "character.specialGear.stats": StatMapBuilder;
  "character.specialGear.crystals": StatMapBuilder[];

  "character.skills.bladeSkills.hardHit.level": number;
  "character.skills.bladeSkills.astute.level": number;
  "character.skills.bladeSkills.triggerSlash.level": number;
  "character.skills.bladeSkills.triggerSlash.isActive": boolean;
  "character.skills.bladeSkills.rampage.level": number;
  "character.skills.bladeSkills.rampage.isActive": boolean;
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
  "character.skills.shotSkills.twinStorm.isActive": boolean;
  "character.skills.shotSkills.twinStorm.onCooldown": boolean;
  "character.skills.shotSkills.retrogradeShot.level": number;
  "character.skills.shotSkills.moebaShot.level": number;
  "character.skills.shotSkills.paralysisShot.level": number;
  "character.skills.shotSkills.smokeDust.level": number;
  "character.skills.shotSkills.armBreak.level": number;
  "character.skills.shotSkills.parabolaCannon.level": number;
  "character.skills.shotSkills.shotMastery.level": number;
  "character.skills.shotSkills.samuraiArchery.level": number;
  "character.skills.shotSkills.samuraiArchery.isActive": boolean;
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
  "character.skills.magicSkills.qadal.timeActive": number;
  "character.skills.magicSkills.mPCharge.level": number;
  "character.skills.magicSkills.chainCast.level": number;
  "character.skills.magicSkills.chainCast.isActive": boolean;
  "character.skills.magicSkills.chainCast.stacks": number;
  "character.skills.magicSkills.powerWave.level": number;
  "character.skills.magicSkills.maximizer.level": number;
  "character.skills.magicSkills.rapidCharge.level": number;
  "character.skills.magicSkills.rapidCharge.isActive": boolean;
  "character.skills.magicSkills.rapidCharge.amountMPRecoveredFromMaximizer": number;
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
  "character.skills.supportSkills.quickMotion.isActive": boolean;
  "character.skills.supportSkills.manaRecharge.level": number;
  "character.skills.supportSkills.manaRecharge.isActive": boolean;
  "character.skills.supportSkills.magicBarrier.level": number;
  "character.skills.supportSkills.magicBarrier.isActive": boolean;
  "character.skills.supportSkills.immunity.level": number;
  "character.skills.supportSkills.immunity.isActive": boolean;
  "character.skills.supportSkills.fastReaction.level": number;
  "character.skills.supportSkills.fastReaction.isActive": boolean;

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
  "character.skills.mononofuSkills.tripleThrust.isActive": boolean;
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
  "character.skills.mononofuSkills.shukuchi.isActive": boolean;
  "character.skills.mononofuSkills.nukiuchiSennosen.level": number;
  "character.skills.mononofuSkills.twoHanded.level": number;
  "character.skills.mononofuSkills.meikyouShisui.level": number;
  "character.skills.mononofuSkills.meikyouShisui.isActive": boolean;
  "character.skills.mononofuSkills.kairikiRanshin.level": number;
  "character.skills.mononofuSkills.kairikiRanshin.isActive": boolean;
  "character.skills.mononofuSkills.dauntless.level": number;
  "character.skills.mononofuSkills.dauntless.isActive": boolean;
  "character.skills.mononofuSkills.dauntless.stacks": number;
  "character.skills.mononofuSkills.bouncingBlade.level": number;
  "character.skills.mononofuSkills.bouncingBlade.isActive": boolean;

  "character.skills.dualSwordSkills.dualSwordMastery.level": number;
  "character.skills.dualSwordSkills.twinSlash.level": number;
  "character.skills.dualSwordSkills.spinningSlash.level": number;
  "character.skills.dualSwordSkills.phantomSlash.level": number;
  "character.skills.dualSwordSkills.aerialCut.level": number;
  "character.skills.dualSwordSkills.crossParry.level": number;
  "character.skills.dualSwordSkills.crossParry.isActive": boolean;
  "character.skills.dualSwordSkills.crossParryIsParried": boolean;
  "character.skills.dualSwordSkills.chargingSlash.level": number;
  "character.skills.dualSwordSkills.shadowStep.level": number;
  "character.skills.dualSwordSkills.shadowStep.isActive": boolean;
  "character.skills.dualSwordSkills.shiningCross.level": number;
  "character.skills.dualSwordSkills.lunarMisfortune.level": number;
  "character.skills.dualSwordSkills.twinBusterBlade.level": number;
  "character.skills.dualSwordSkills.twinBusterBlade.isActive": number;
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
  "character.skills.magicBladeSkills.etherFlare.isActive": boolean;
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
  "character.skills.shieldSkills.protection.isActive": boolean;
  "character.skills.shieldSkills.aegis.level": number;
  "character.skills.shieldSkills.aegis.isActive": boolean;
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
  "character.skills.martialSkills.rush.isActive": boolean;
  "character.skills.martialSkills.asuraAura.level": number;
  "character.skills.martialSkills.asuraAura.isActive": boolean;
  "character.skills.martialSkills.flashBlink.level": number;
  "character.skills.martialSkills.martialMastery.level": number;
  "character.skills.martialSkills.martialDiscipline.level": number;
  "character.skills.martialSkills.chakra.level": number;
  "character.skills.martialSkills.chakra.isActive": boolean;
  "character.skills.martialSkills.energyControl.level": number;
  "character.skills.martialSkills.energyControl.isActive": boolean;
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
  "character.skills.bareHandSkills.earthShaker.isActive": boolean;

  "character.skills.hunterSkills.kick.level": number;
  "character.skills.hunterSkills.sunriseArrow.level": number;
  "character.skills.hunterSkills.magicArrow.level": number;
  "character.skills.hunterSkills.magicArrow.isActive": boolean;
  "character.skills.hunterSkills.satelliteArrow.level": number;
  "character.skills.hunterSkills.sleepTrap.level": number;
  "character.skills.hunterSkills.bearTrap.level": number;
  "character.skills.hunterSkills.landMine.level": number;
  "character.skills.hunterSkills.darkTrap.level": number;
  "character.skills.hunterSkills.homingShot.level": number;
  "character.skills.hunterSkills.detection.level": number;
  "character.skills.hunterSkills.detection.isActive": boolean;
  "character.skills.hunterSkills.cycloneArrow.level": number;
  "character.skills.hunterSkills.verticalAir.level": number;
  "character.skills.hunterSkills.hunterBowgun.level": number;
  "character.skills.hunterSkills.multipleHunt.level": number;
  "character.skills.hunterSkills.tripleAceShots.isActive": boolean;
  "character.skills.hunterSkills.wolfSniper.isActive": boolean;

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
  "character.skills.wizardSkills.advancedFamilia.isActive": number;
  "character.skills.wizardSkills.castMastery.level": number;
  "character.skills.wizardSkills.crystalLaser.level": number;
  "character.skills.wizardSkills.overlimit.level": number;
  "character.skills.wizardSkills.overlimit.isActive": boolean;
  "character.skills.wizardSkills.sorceryGuide.level": number;

  "character.skills.priestSkills.bless.level": number;
  "character.skills.priestSkills.gloria.level": number;
  "character.skills.priestSkills.enhancedBless.level": number;
  "character.skills.priestSkills.royalHeal.level": number;
  "character.skills.priestSkills.holyFist.level": number;
  "character.skills.priestSkills.holyLight.level": number;
  "character.skills.priestSkills.etherBarrier.level": number;
  "character.skills.priestSkills.etherBarrier.isActive": boolean;
  "character.skills.priestSkills.prayer.level": number;
  "character.skills.priestSkills.prayer.isActive": boolean;
  "character.skills.priestSkills.staffThrust.level": number;
  "character.skills.priestSkills.exorcism.level": number;
  "character.skills.priestSkills.holyBook.level": number;
  "character.skills.priestSkills.holyBook.isActive": boolean;
  "character.skills.priestSkills.nemesis.level": number;

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

  "character.consumables": Stat[]; // statmap for now
  "character.foodBuffs": Stat[]; // statmap for now

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

// export type Config = {
//   character: {
//     .level: number;

//     baseStat: {
//       basic: {
//         STR: number;
//         DEX: number;
//         INT: number;
//         VIT: number;
//         AGI: number;
//       };

//       personal: {
//         CRT: number;
//         TEC: number;
//         LUK: number;
//         MTL: number;
//       };
//     };

//     weapon: {
//       type: MainWeaponType;
//       ATK: number;
//       stability: number;
//       refinement: number;
//       stats: StatMapBuilder;
//       crystals: StatMapBuilder[];
//     };

//     subweapon: {
//       type: SubWeaponType;
//       ATK: number;
//       DEF: number;
//       refinement: number;
//       stability: number;
//       stats: StatMapBuilder;
//       crystals: StatMapBuilder[];
//       scrollCastTimeReduction: number;
//       scrollMPReduction: number;
//     };

//     armor: {
//       type: ArmorType;
//       DEF: number;
//       refinement: number;
//       stats: StatMapBuilder;
//       crystals: StatMapBuilder[];
//     };

//     additionalGear: {
//       DEF: number;
//       refinement: number;
//       stats: StatMapBuilder;
//       crystals: StatMapBuilder[];
//     };

//     specialGear: {
//       DEF: number;
//       stats: StatMapBuilder;
//       crystals: StatMapBuilder[];
//     };

//     skills.: {
//       bladeSkills.: {
//         hardHit: { .level: number };
//         astute: { .level: number };
//         triggerSlash: { .level: number };
//         rampage: { .level: number };
//         meteorBreaker: { .level: number };
//         shutOut: { .level: number };
//         lunarSlash: { .level: number };
//         sonicBlade: { .level: number };
//         spiralAir: { .level: number };
//         swordTempest: { .level: number };
//         busterBlade: { .level: number; isActive: boolean };
//         auraBlade: { .level: number };
//         swordMastery: { .level: number };
//         quickSlash: { .level: number };
//         swordTechniques: { .level: number };
//         warCry: { .level: number; isActive: boolean };
//         berserk: { .level: number; isActive: boolean };
//         gladiate: { .level: number };
//         swiftAttack: { .level: number };
//       };
//       shotSkills.: {
//         powerShot: { .level: number };
//         bullseye: { .level: number };
//         arrowRain: { .level: number };
//         snipe: { .level: number };
//         crossFire: { .level: number };
//         vanquisher: { .level: number };
//         twinStorm: { .level: number };
//         retrogradeShot: { .level: number };
//         moebaShot: { .level: number };
//         paralysisShot: { .level: number };
//         smokeDust: { .level: number };
//         armBreak: { .level: number };
//         parabolaCannon: { .level: number };
//         shotMastery: { .level: number };
//         samuraiArchery: { .level: number; stacks: number };
//         sneakAttack: { .level: number };
//         longRange: { .level: number };
//         quickDraw: { .level: number };
//         decoyShot: { .level: number };
//         fatalShot: { .level: number };
//       };
//       magicSkills.: {
//         magicArrows: { .level: number };
//         magicJavelin: { .level: number };
//         magicLances: { .level: number };
//         magicImpact: { .level: number };
//         magicFinale: { .level: number };
//         chronosShift: { .level: number };
//         magicWall: { .level: number };
//         magicBlast: { .level: number };
//         magicStorm: { .level: number };
//         magicBurst: { .level: number };
//         magicCannon: { .level: number };
//         magicCrash: { .level: number };
//         magicMastery: { .level: number };
//         magicKnife: { .level: number };
//         qadal: {
//           .level: number;
//           charge: number;
//           isActive: boolean;
//           timer: number;
//         };
//         MPCharge: { .level: number };
//         chainCast: { .level: number };
//         powerWave: { .level: number };
//         maximizer: { .level: number };
//         rapidCharge: { .level: number };
//         enchantedBarriers: { .level: number };
//         magicGuardianBeam: { .level: number };
//       };
//       survivalSkills.: {
//         playDead: { .level: number };
//         EXPGainUP: { .level: number };
//         dropRateUP: { .level: number };
//         safeRest: { .level: number };
//         HPBoost: { .level: number };
//         fightersHigh: { .level: number };
//         shortRest: { .level: number };
//         MPBoost: { .level: number };
//         soberAnalysis: { .level: number };
//       };
//       supportSkills.: {
//         firstAid: { .level: number };
//         miniHeal: { .level: number };
//         recovery: { .level: number };
//         sanctuary: { .level: number };
//         heal: { .level: number };
//         lifeRecovery: { .level: number };
//         braveAura: { .level: number; isActive: boolean };
//         highCycle: { .level: number; isActive: boolean };
//         quickMotion: { .level: number; isActive: boolean };
//         manaRecharge: { .level: number; isActive: boolean };
//         magicBarrier: { .level: number };
//         immunity: { .level: number };
//         fastReaction: { .level: number };
//       };
//       battleSkills.: {
//         magicUP: { .level: number };
//         concentrate: { .level: number };
//         attackUP: { .level: number };
//         whack: { .level: number };
//         defenseUP: { .level: number };
//         dodgeUP: { .level: number };
//         desperateResist: { .level: number };
//         criticalUP: { .level: number };
//         accuracyUP: { .level: number };
//         increasedEnergy: { .level: number };
//         intimidatingPower: { .level: number };
//         defenseMastery: { .level: number };
//         spellBurst: { .level: number };
//         secretChaseAttack: { .level: number };
//         superGrip: { .level: number };
//       };
//       mononofuSkills.: {
//         issen: { .level: number };
//         pulseBlade: { .level: number };
//         tripleThrust: { .level: number };
//         hassoHappa: { .level: number };
//         tenryuRansei: { .level: number };
//         kasumisetsuGetsuka: { .level: number };
//         garyouTensei: { .level: number };
//         shadowLessSlash: { .level: number };
//         pommelStrike: { .level: number };
//         magadachi: { .level: number };
//         zanteiSettetsu: { .level: number };
//         bushido: { .level: number };
//         shukuchi: { .level: number };
//         nukiuchiSennosen: { .level: number };
//         twoHanded: { .level: number };
//         meikyouShisui: { .level: number };
//         kairikiRanshin: { .level: number };
//         dauntless: { .level: number };
//         bouncingBlade: { .level: number };
//       };
//       dualSwordSkills.: {
//         dualSwordMastery: { .level: number };
//         twinSlash: { .level: number };
//         spinningSlash: { .level: number };
//         phantomSlash: { .level: number };
//         aerialCut: { .level: number };
//         crossParry: { .level: number };
//         chargingSlash: { .level: number };
//         shadowStep: { .level: number };
//         shiningCross: { .level: number };
//         lunarMisfortune: { .level: number };
//         twinBusterBlade: { .level: number };
//         reflex: { .level: number };
//         flashBlast: { .level: number; isActive: boolean };
//         stormReaper: { .level: number };
//         dualSwordControl: { .level: number };
//         godspeed: { .level: number };
//         saberAura: { .level: number };
//         crescentSaber: { .level: number };
//       };
//       magicBladeSkills.: {
//         magicWarriorMastery: { .level: number };
//         conversion: { .level: number; isActive: boolean };
//         resonance: {
//           .level: number;
//           isActive: boolean;
//           activeSet: "ATK/MATK" | "ASPD/CSPD" | "ACC/CRIT";
//         };
//         enchantedSpell: { .level: number };
//         dualBringer: { .level: number; isActive: boolean };
//         etherFlare: { .level: number; inflictedIgniteOnEnemey: boolean };
//         elementSlash: { .level: number };
//         enchantSword: { .level: number };
//         enchantedBurst: { .level: number };
//         unionSword: { .level: number };
//         siphonBarrier: { .level: number; isActive: boolean };
//         teleport: { .level: number };
//         siphonRecall: { .level: number };
//         floatDash: { .level: number };
//         magicSkin: { .level: number };
//       };
//       shieldSkills.: {
//         shieldMastery: { .level: number };
//         shieldBash: { .level: number };
//         shieldCannon: { .level: number };
//         guardStrike: { .level: number };
//         forceShield: { .level: number };
//         magicalShield: { .level: number };
//         shieldUppercut: { .level: number };
//         dualShields: { .level: number };
//         shieldRepair: { .level: number };
//         belagerung: { .level: number };
//         protection: { .level: number };
//         aegis: { .level: number };
//         guardian: { .level: number };
//       };
//       guardSkills.: {
//         heavyArmorMastery: { .level: number };
//         advancedGuard: { .level: number };
//         physicalGuard: { .level: number };
//         lightArmorMastery: { .level: number };
//         advancedEvasion: { .level: number };
//         mirageEvasion: { .level: number };
//       };
//       halberdSkills.: {
//         flashStab: { .level: number };
//         cannonSpear: { .level: number };
//         dragonTail: { .level: number };
//         diveImpact: { .level: number };
//         dragonTooth: { .level: number };
//         draconicCharge: { .level: number };
//         deadlySpear: { .level: number };
//         punishRay: { .level: number };
//         strikeStab: { .level: number };
//         chronosDivine: { .level: number };
//         infiniteDimension: { .level: number };
//         halberdMastery: { .level: number };
//         criticalSpear: { .level: number };
//         tornadoLance: { .level: number };
//         quickAura: { .level: number; isActive: boolean };
//         warCryOfStruggle: { .level: number };
//         godspeedWield: {
//           .level: number;
//           isActive: boolean;
//           stacks: number;
//         };
//         almightyWield: { .level: number };
//         busterLance: { .level: number };
//       };
//       martialSkills.: {
//         smash: { .level: number };
//         bash: { .level: number };
//         shellBreak: { .level: number };
//         heavySmash: { .level: number };
//         chariot: { .level: number };
//         abstractArms: { .level: number };
//         sonicWave: { .level: number };
//         earthbind: { .level: number };
//         tripleKick: { .level: number };
//         rush: { .level: number };
//         asuraAura: { .level: number };
//         flashBlink: { .level: number };
//         martialMastery: { .level: number };
//         martialDiscipline: { .level: number };
//         chakra: { .level: number };
//         energyControl: { .level: number };
//         aggravate: { .level: number };
//         strongChaseAttack: { .level: number };
//         slide: { .level: number };
//       };
//       crusherSkills.: {
//         forefistPunch: { .level: number };
//         goliathPunch: { .level: number };
//         godHand: { .level: number };
//         divineRigidBody: { .level: number };
//         breathWork: { .level: number };
//         floatingKick: { .level: number };
//         geyserKick: { .level: number };
//         combination: { .level: number };
//         annihilator: { .level: number };
//         terrablast: { .level: number };
//       };
//       assassinSkills.: {
//         assassinStab: { .level: number };
//         backstep: { .level: number };
//         arcaneStrike: { .level: number };
//         sicarius: { .level: number };
//         evasion: { .level: number };
//         serum: { .level: number };
//         foresight: { .level: number };
//         shadowWalk: { .level: number };
//         venomInjection: { .level: number };
//         corrossivePoison: { .level: number };
//         venomThief: { .level: number };
//         deathReception: { .level: number };
//       };
//       knightSkills.: {
//         assaultAttack: { .level: number };
//         parry: { .level: number };
//         pDefense: { .level: number };
//         fareth: { .level: number };
//         provoke: { .level: number };
//         rageSword: { .level: number };
//         bindingStrike: { .level: number };
//         knightWill: { .level: number };
//         sonicThrust: { .level: number };
//         revenir: { .level: number };
//         knightStance: { .level: number };
//         knightRemedy: { .level: number };
//       };
//       ninjaSkills.: {
//         ninjutsu: { .level: number };
//         ninjaSpirit: { .level: number };
//         ninjutsuDrillI: { .level: number };
//         ninjutsuDrillII: { .level: number };
//       };
//       hunterSkills.: {
//         kick: { .level: number };
//         sunriseArrow: { .level: number };
//         magicArrow: { .level: number };
//         satelliteArrow: { .level: number };
//         sleepTrap: { .level: number };
//         bearTrap: { .level: number };
//         landMine: { .level: number };
//         darkTrap: { .level: number };
//         homingShot: { .level: number };
//         detection: { .level: number };
//         cycloneArrow: { .level: number };
//         verticalAir: { .level: number };
//         hunterBowgun: { .level: number };
//         multipleHunt: { .level: number };
//       };
//       priestSkills.: {
//         bless: { .level: number };
//         gloria: { .level: number };
//         enhancedBless: { .level: number };
//         royalHeal: { .level: number };
//         holyFist: { .level: number };
//         holyLight: { .level: number };
//         etherBarrier: { .level: number };
//         prayer: { .level: number; isActive: boolean };
//         staffThrust: { .level: number };
//         exorcism: { .level: number };
//         holyBook: { .level: number };
//         nemesis: { .level: number };
//       };

//       bareHandSkills.: {
//         unarmedMastery: { .level: number };
//         qiCharge: { .level: number };
//         lionRage: { .level: number };
//         ultimaLionRage: { .level: number };
//         ravingStorm: { .level: number };
//         ultimaRavingStorm: { .level: number };
//         internalElixir: { .level: number };
//         clashOfEnmity: { .level: number };
//         miracleComeback: { .level: number };
//         ultimaQiCharge: { .level: number };
//         hiddenTalent: { .level: number };
//         earthShaker: { .level: number };
//       };

//       wizardSkills.: {
//         familia: { .level: number; isActive: boolean };
//         lightning: { .level: number };
//         blizzard: { .level: number };
//         meteorStrike: { .level: number };
//         imperialRay: { .level: number };
//         manaCrystal: { .level: number };
//         stoneBarrier: { .level: number };
//         advancedFamilia: { .level: number };
//         castMastery: { .level: number };
//         crystalLaser: { .level: number };
//         overlimit: { .level: number; isActive: boolean };
//         sorceryGuide: { .level: number };
//       };
//     };

//     regislets: {
//       zeroStance: { .level: number };
//       maxHPBoost: { .level: number };
//       maxMPBoost: { .level: number };
//       magicAttackBoost: { .level: number };
//       physicalAttackBoost: { .level: number };
//       magicDefenseBoost: { .level: number };
//       physicalDefenseBoost: { .level: number };
//       attackSpeedBoost: { .level: number };
//       magicSpeedBoost: { .level: number };
//       dodgeBoost: { .level: number };
//       accuracyBoost: { .level: number };
//       focusResonance: { .level: number };
//       speedResonance: { .level: number };
//       powerResonance: { .level: number };
//     };

//     consumables: StatMapBuilder; // Stat type is assumed to be defined elsewhere
//     foodBuffs: StatMapBuilder; // Stat type is assumed to be defined elsewhere

//     ailments: {
//       weaken: { isActive: boolean };
//       flinch: { isActive: boolean };
//       tumble: { isActive: boolean };
//       stun: { isActive: boolean };
//       knockback: { isActive: boolean };
//       poison: { isActive: boolean };
//       paralysis: { isActive: boolean };
//       blindness: { isActive: boolean };
//       ignition: { isActive: boolean };
//       freeze: { isActive: boolean };
//       armorBreak: { isActive: boolean };
//       slow: { isActive: boolean };
//       stop: { isActive: boolean };
//       fear: { isActive: boolean };
//       dizzy: { isActive: boolean };
//       lethargy: { isActive: boolean };
//       silence: { isActive: boolean };
//       bleed: { isActive: boolean };
//       fatigue: { isActive: boolean };
//       dazzled: { isActive: boolean };
//     };
//   };
// };

// // utils

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];

export type RecursivePartial<T> = {
  [P in keyof T]?: T extends (infer L)[] ? L
  : RecursivePartial<T[P]> | undefined;
};
