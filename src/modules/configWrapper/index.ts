import type {
  RecursivePartial,
  IntermediateConfig,
  Config,
  Stat,
} from "../../types";

export const createIntermediateConfig = (
  config: RecursivePartial<Config>,
): IntermediateConfig => {
  return {
    "character.level": config.character?.level || 0,

    "character.STR": config.character?.baseStat?.basic?.STR || 1,
    "character.DEX": config.character?.baseStat?.basic?.DEX || 1,
    "character.INT": config.character?.baseStat?.basic?.INT || 1,
    "character.VIT": config.character?.baseStat?.basic?.VIT || 1,
    "character.AGI": config.character?.baseStat?.basic?.AGI || 1,

    "character.CRT": config.character?.baseStat?.personal?.CRT || 0,
    "character.TEC": config.character?.baseStat?.personal?.TEC || 0,
    "character.LUK": config.character?.baseStat?.personal?.LUK || 0,
    "character.MTL": config.character?.baseStat?.personal?.MTL || 0,

    "character.mainweapon.type":
      config.character?.weapon?.type || "bare-hand",
    "character.mainweapon.ATK": config.character?.weapon?.ATK || 0,
    "character.mainweapon.refinement":
      config.character?.weapon?.refinement || 0,
    "character.mainweapon.stability":
      config.character?.weapon?.stability || 0,
    "character.mainweapon.stats":
      (config.character?.weapon?.stats as Stat[]) || [],
    "character.mainweapon.crystals":
      (config.character?.weapon?.crystals as Stat[][]) || [],

    "character.subweapon.type":
      config.character?.subweapon?.type || "none",
    "character.subweapon.ATK": config.character?.subweapon?.ATK || 0,
    "character.subweapon.DEF": config.character?.subweapon?.DEF || 0,
    "character.subweapon.refinement":
      config.character?.subweapon?.refinement || 0,
    "character.subweapon.stability":
      config.character?.subweapon?.stability || 0,
    "character.subweapon.stats":
      (config.character?.subweapon?.stats as Stat[]) || [],
    "character.subweapon.crystals":
      (config.character?.subweapon?.crystals as Stat[][]) || [],
    "character.subweapon.scrollCastTimeReduction":
      config.character?.subweapon?.scrollCastTimeReduction || 0,
    "character.subweapon.scrollMPReduction":
      config.character?.subweapon?.scrollMPReduction || 0,

    "character.armor.DEF": config.character?.armor?.DEF || 0,
    "character.armor.refinement": config.character?.armor?.refinement || 0,
    "character.armor.type": config.character?.armor?.type || "none",
    "character.armor.stats":
      (config.character?.armor?.stats as Stat[]) || [],
    "character.armor.crystals":
      (config.character?.armor?.crystals as Stat[][]) || [],

    "character.additionalGear.DEF":
      config.character?.additionalGear?.DEF || 0,
    "character.additionalGear.refinement":
      config.character?.additionalGear?.refinement || 0,
    "character.additionalGear.stats":
      (config.character?.additionalGear?.stats as Stat[]) || [],
    "character.additionalGear.crystals":
      (config.character?.additionalGear?.crystals as Stat[][]) || [],

    "character.specialGear.DEF": config.character?.specialGear?.DEF || 0,
    "character.specialGear.stats":
      (config.character?.specialGear?.stats as Stat[]) || [],
    "character.specialGear.crystals":
      (config.character?.specialGear?.crystals as Stat[][]) || [],

    "character.skills.bladeSkills.hardHit.level":
      config.character?.skills?.bladeSkills?.hardHit?.level || 0,
    "character.skills.bladeSkills.astute.level":
      config.character?.skills?.bladeSkills?.astute?.level || 0,
    "character.skills.bladeSkills.triggerSlash.level":
      config.character?.skills?.bladeSkills?.triggerSlash?.level || 0,
    "character.skills.bladeSkills.rampage.level":
      config.character?.skills?.bladeSkills?.rampage?.level || 0,
    "character.skills.bladeSkills.meteorBreaker.level":
      config.character?.skills?.bladeSkills?.meteorBreaker?.level || 0,
    "character.skills.bladeSkills.shutOut.level":
      config.character?.skills?.bladeSkills?.shutOut?.level || 0,
    "character.skills.bladeSkills.lunarSlash.level":
      config.character?.skills?.bladeSkills?.lunarSlash?.level || 0,
    "character.skills.bladeSkills.sonicBlade.level":
      config.character?.skills?.bladeSkills?.sonicBlade?.level || 0,
    "character.skills.bladeSkills.spiralAir.level":
      config.character?.skills?.bladeSkills?.spiralAir?.level || 0,
    "character.skills.bladeSkills.swordTempest.level":
      config.character?.skills?.bladeSkills?.swordTempest?.level || 0,
    "character.skills.bladeSkills.busterBlade.level":
      config.character?.skills?.bladeSkills?.busterBlade?.level || 0,
    "character.skills.bladeSkills.busterBlade.isActive":
      config.character?.skills?.bladeSkills?.busterBlade?.isActive ||
      false,
    "character.skills.bladeSkills.auraBlade.level":
      config.character?.skills?.bladeSkills?.auraBlade?.level || 0,
    "character.skills.bladeSkills.swordMastery.level":
      config.character?.skills?.bladeSkills?.swordMastery?.level || 0,
    "character.skills.bladeSkills.quickSlash.level":
      config.character?.skills?.bladeSkills?.quickSlash?.level || 0,
    "character.skills.bladeSkills.swordTechniques.level":
      config.character?.skills?.bladeSkills?.swordTechniques?.level || 0,
    "character.skills.bladeSkills.warCry.level":
      config.character?.skills?.bladeSkills?.warCry?.level || 0,
    "character.skills.bladeSkills.warCry.isActive":
      config.character?.skills?.bladeSkills?.warCry?.isActive || false,
    "character.skills.bladeSkills.berserk.level":
      config.character?.skills?.bladeSkills?.berserk?.level || 0,
    "character.skills.bladeSkills.berserk.isActive":
      config.character?.skills?.bladeSkills?.berserk?.isActive || false,
    "character.skills.bladeSkills.gladiate.level":
      config.character?.skills?.bladeSkills?.gladiate?.level || 0,
    "character.skills.bladeSkills.swiftAttack.level":
      config.character?.skills?.bladeSkills?.swiftAttack?.level || 0,

    "character.skills.shotSkills.powerShot.level":
      config.character?.skills?.shotSkills?.powerShot?.level || 0,
    "character.skills.shotSkills.bullseye.level":
      config.character?.skills?.shotSkills?.bullseye?.level || 0,
    "character.skills.shotSkills.arrowRain.level":
      config.character?.skills?.shotSkills?.arrowRain?.level || 0,
    "character.skills.shotSkills.snipe.level":
      config.character?.skills?.shotSkills?.snipe?.level || 0,
    "character.skills.shotSkills.crossFire.level":
      config.character?.skills?.shotSkills?.crossFire?.level || 0,
    "character.skills.shotSkills.vanquisher.level":
      config.character?.skills?.shotSkills?.vanquisher?.level || 0,
    "character.skills.shotSkills.twinStorm.level":
      config.character?.skills?.shotSkills?.twinStorm?.level || 0,
    "character.skills.shotSkills.retrogradeShot.level":
      config.character?.skills?.shotSkills?.retrogradeShot?.level || 0,
    "character.skills.shotSkills.moebaShot.level":
      config.character?.skills?.shotSkills?.moebaShot?.level || 0,
    "character.skills.shotSkills.paralysisShot.level":
      config.character?.skills?.shotSkills?.paralysisShot?.level || 0,
    "character.skills.shotSkills.smokeDust.level":
      config.character?.skills?.shotSkills?.smokeDust?.level || 0,
    "character.skills.shotSkills.armBreak.level":
      config.character?.skills?.shotSkills?.armBreak?.level || 0,
    "character.skills.shotSkills.parabolaCannon.level":
      config.character?.skills?.shotSkills?.parabolaCannon?.level || 0,
    "character.skills.shotSkills.shotMastery.level":
      config.character?.skills?.shotSkills?.shotMastery?.level || 0,
    "character.skills.shotSkills.samuraiArchery.level":
      config.character?.skills?.shotSkills?.samuraiArchery?.level || 0,
    "character.skills.shotSkills.samuraiArchery.stacks":
      config.character?.skills?.shotSkills?.samuraiArchery?.stacks || 0,
    "character.skills.shotSkills.sneakAttack.level":
      config.character?.skills?.shotSkills?.sneakAttack?.level || 0,
    "character.skills.shotSkills.longRange.level":
      config.character?.skills?.shotSkills?.longRange?.level || 0,
    "character.skills.shotSkills.quickDraw.level":
      config.character?.skills?.shotSkills?.quickDraw?.level || 0,
    "character.skills.shotSkills.decoyShot.level":
      config.character?.skills?.shotSkills?.decoyShot?.level || 0,
    "character.skills.shotSkills.fatalShot.level":
      config.character?.skills?.shotSkills?.fatalShot?.level || 0,

    "character.skills.magicSkills.magicArrows.level":
      config.character?.skills?.magicSkills?.magicArrows?.level || 0,
    "character.skills.magicSkills.magicJavelin.level":
      config.character?.skills?.magicSkills?.magicJavelin?.level || 0,
    "character.skills.magicSkills.magicLances.level":
      config.character?.skills?.magicSkills?.magicLances?.level || 0,
    "character.skills.magicSkills.magicImpact.level":
      config.character?.skills?.magicSkills?.magicImpact?.level || 0,
    "character.skills.magicSkills.magicFinale.level":
      config.character?.skills?.magicSkills?.magicFinale?.level || 0,
    "character.skills.magicSkills.chronosShift.level":
      config.character?.skills?.magicSkills?.chronosShift?.level || 0,
    "character.skills.magicSkills.magicWall.level":
      config.character?.skills?.magicSkills?.magicWall?.level || 0,
    "character.skills.magicSkills.magicBlast.level":
      config.character?.skills?.magicSkills?.magicBlast?.level || 0,
    "character.skills.magicSkills.magicStorm.level":
      config.character?.skills?.magicSkills?.magicStorm?.level || 0,
    "character.skills.magicSkills.magicBurst.level":
      config.character?.skills?.magicSkills?.magicBurst?.level || 0,
    "character.skills.magicSkills.magicCannon.level":
      config.character?.skills?.magicSkills?.magicCannon?.level || 0,
    "character.skills.magicSkills.magicCrash.level":
      config.character?.skills?.magicSkills?.magicCrash?.level || 0,
    "character.skills.magicSkills.magicMastery.level":
      config.character?.skills?.magicSkills?.magicMastery?.level || 0,
    "character.skills.magicSkills.magicKnife.level":
      config.character?.skills?.magicSkills?.magicKnife?.level || 0,
    "character.skills.magicSkills.qadal.level":
      config.character?.skills?.magicSkills?.qadal?.level || 0,
    "character.skills.magicSkills.qadal.charge":
      config.character?.skills?.magicSkills?.qadal?.charge || 0,
    "character.skills.magicSkills.qadal.isActive":
      config.character?.skills?.magicSkills?.qadal?.isActive || false,
    "character.skills.magicSkills.qadal.timer":
      config.character?.skills?.magicSkills?.qadal?.timer || 0,
    "character.skills.magicSkills.MPCharge.level":
      config.character?.skills?.magicSkills?.MPCharge?.level || 0,
    "character.skills.magicSkills.chainCast.level":
      config.character?.skills?.magicSkills?.chainCast?.level || 0,
    "character.skills.magicSkills.powerWave.level":
      config.character?.skills?.magicSkills?.powerWave?.level || 0,
    "character.skills.magicSkills.maximizer.level":
      config.character?.skills?.magicSkills?.maximizer?.level || 0,
    "character.skills.magicSkills.rapidCharge.level":
      config.character?.skills?.magicSkills?.rapidCharge?.level || 0,
    "character.skills.magicSkills.enchantedBarriers.level":
      config.character?.skills?.magicSkills?.enchantedBarriers?.level || 0,
    "character.skills.magicSkills.magicGuardianBeam.level":
      config.character?.skills?.magicSkills?.magicGuardianBeam?.level || 0,

    "character.skills.survivalSkills.playDead.level":
      config.character?.skills?.survivalSkills?.playDead?.level || 0,
    "character.skills.survivalSkills.EXPGainUP.level":
      config.character?.skills?.survivalSkills?.EXPGainUP?.level || 0,
    "character.skills.survivalSkills.dropRateUP.level":
      config.character?.skills?.survivalSkills?.dropRateUP?.level || 0,
    "character.skills.survivalSkills.safeRest.level":
      config.character?.skills?.survivalSkills?.safeRest?.level || 0,
    "character.skills.survivalSkills.HPBoost.level":
      config.character?.skills?.survivalSkills?.HPBoost?.level || 0,
    "character.skills.survivalSkills.fightersHigh.level":
      config.character?.skills?.survivalSkills?.fightersHigh?.level || 0,
    "character.skills.survivalSkills.shortRest.level":
      config.character?.skills?.survivalSkills?.shortRest?.level || 0,
    "character.skills.survivalSkills.MPBoost.level":
      config.character?.skills?.survivalSkills?.MPBoost?.level || 0,
    "character.skills.survivalSkills.soberAnalysis.level":
      config.character?.skills?.survivalSkills?.soberAnalysis?.level || 0,

    "character.skills.supportSkills.firstAid.level":
      config.character?.skills?.supportSkills?.firstAid?.level || 0,
    "character.skills.supportSkills.miniHeal.level":
      config.character?.skills?.supportSkills?.miniHeal?.level || 0,
    "character.skills.supportSkills.recovery.level":
      config.character?.skills?.supportSkills?.recovery?.level || 0,
    "character.skills.supportSkills.sanctuary.level":
      config.character?.skills?.supportSkills?.sanctuary?.level || 0,
    "character.skills.supportSkills.heal.level":
      config.character?.skills?.supportSkills?.heal?.level || 0,
    "character.skills.supportSkills.lifeRecovery.level":
      config.character?.skills?.supportSkills?.lifeRecovery?.level || 0,
    "character.skills.supportSkills.braveAura.level":
      config.character?.skills?.supportSkills?.braveAura?.level || 0,
    "character.skills.supportSkills.braveAura.isActive":
      config.character?.skills?.supportSkills?.braveAura?.isActive ||
      false,
    "character.skills.supportSkills.highCycle.level":
      config.character?.skills?.supportSkills?.highCycle?.level || 0,
    "character.skills.supportSkills.highCycle.isActive":
      config.character?.skills?.supportSkills?.highCycle?.isActive ||
      false,
    "character.skills.supportSkills.quickMotion.level":
      config.character?.skills?.supportSkills?.quickMotion?.level || 0,
    "character.skills.supportSkills.quickMotion.isActive":
      config.character?.skills?.supportSkills?.quickMotion?.isActive ||
      false,
    "character.skills.supportSkills.manaRecharge.level":
      config.character?.skills?.supportSkills?.manaRecharge?.level || 0,
    "character.skills.supportSkills.manaRecharge.isActive":
      config.character?.skills?.supportSkills?.manaRecharge?.isActive ||
      false,
    "character.skills.supportSkills.magicBarrier.level":
      config.character?.skills?.supportSkills?.magicBarrier?.level || 0,
    "character.skills.supportSkills.immunity.level":
      config.character?.skills?.supportSkills?.immunity?.level || 0,
    "character.skills.supportSkills.fastReaction.level":
      config.character?.skills?.supportSkills?.fastReaction?.level || 0,

    "character.skills.battleSkills.magicUP.level":
      config.character?.skills?.battleSkills?.magicUP?.level || 0,
    "character.skills.battleSkills.concentrate.level":
      config.character?.skills?.battleSkills?.concentrate?.level || 0,
    "character.skills.battleSkills.attackUP.level":
      config.character?.skills?.battleSkills?.attackUP?.level || 0,
    "character.skills.battleSkills.whack.level":
      config.character?.skills?.battleSkills?.whack?.level || 0,
    "character.skills.battleSkills.defenseUP.level":
      config.character?.skills?.battleSkills?.defenseUP?.level || 0,
    "character.skills.battleSkills.dodgeUP.level":
      config.character?.skills?.battleSkills?.dodgeUP?.level || 0,
    "character.skills.battleSkills.desperateResist.level":
      config.character?.skills?.battleSkills?.desperateResist?.level || 0,
    "character.skills.battleSkills.criticalUP.level":
      config.character?.skills?.battleSkills?.criticalUP?.level || 0,
    "character.skills.battleSkills.accuracyUP.level":
      config.character?.skills?.battleSkills?.accuracyUP?.level || 0,
    "character.skills.battleSkills.increasedEnergy.level":
      config.character?.skills?.battleSkills?.increasedEnergy?.level || 0,
    "character.skills.battleSkills.intimidatingPower.level":
      config.character?.skills?.battleSkills?.intimidatingPower?.level ||
      0,
    "character.skills.battleSkills.defenseMastery.level":
      config.character?.skills?.battleSkills?.defenseMastery?.level || 0,
    "character.skills.battleSkills.spellBurst.level":
      config.character?.skills?.battleSkills?.spellBurst?.level || 0,
    "character.skills.battleSkills.secretChaseAttack.level":
      config.character?.skills?.battleSkills?.secretChaseAttack?.level ||
      0,
    "character.skills.battleSkills.superGrip.level":
      config.character?.skills?.battleSkills?.superGrip?.level || 0,

    "character.skills.mononofuSkills.issen.level":
      config.character?.skills?.mononofuSkills?.issen?.level || 0,
    "character.skills.mononofuSkills.pulseBlade.level":
      config.character?.skills?.mononofuSkills?.pulseBlade?.level || 0,
    "character.skills.mononofuSkills.tripleThrust.level":
      config.character?.skills?.mononofuSkills?.tripleThrust?.level || 0,
    "character.skills.mononofuSkills.hassoHappa.level":
      config.character?.skills?.mononofuSkills?.hassoHappa?.level || 0,
    "character.skills.mononofuSkills.tenryuRansei.level":
      config.character?.skills?.mononofuSkills?.tenryuRansei?.level || 0,
    "character.skills.mononofuSkills.kasumisetsuGetsuka.level":
      config.character?.skills?.mononofuSkills?.kasumisetsuGetsuka
        ?.level || 0,
    "character.skills.mononofuSkills.garyouTensei.level":
      config.character?.skills?.mononofuSkills?.garyouTensei?.level || 0,
    "character.skills.mononofuSkills.shadowLessSlash.level":
      config.character?.skills?.mononofuSkills?.shadowLessSlash?.level ||
      0,
    "character.skills.mononofuSkills.pommelStrike.level":
      config.character?.skills?.mononofuSkills?.pommelStrike?.level || 0,
    "character.skills.mononofuSkills.magadachi.level":
      config.character?.skills?.mononofuSkills?.magadachi?.level || 0,
    "character.skills.mononofuSkills.zanteiSettetsu.level":
      config.character?.skills?.mononofuSkills?.zanteiSettetsu?.level || 0,
    "character.skills.mononofuSkills.bushido.level":
      config.character?.skills?.mononofuSkills?.bushido?.level || 0,
    "character.skills.mononofuSkills.shukuchi.level":
      config.character?.skills?.mononofuSkills?.shukuchi?.level || 0,
    "character.skills.mononofuSkills.nukiuchiSennosen.level":
      config.character?.skills?.mononofuSkills?.nukiuchiSennosen?.level ||
      0,
    "character.skills.mononofuSkills.twoHanded.level":
      config.character?.skills?.mononofuSkills?.twoHanded?.level || 0,
    "character.skills.mononofuSkills.meikyouShisui.level":
      config.character?.skills?.mononofuSkills?.meikyouShisui?.level || 0,
    "character.skills.mononofuSkills.kairikiRanshin.level":
      config.character?.skills?.mononofuSkills?.kairikiRanshin?.level || 0,
    "character.skills.mononofuSkills.dauntless.level":
      config.character?.skills?.mononofuSkills?.dauntless?.level || 0,
    "character.skills.mononofuSkills.bouncingBlade.level":
      config.character?.skills?.mononofuSkills?.bouncingBlade?.level || 0,

    "character.skills.dualSwordSkills.dualSwordMastery.level":
      config.character?.skills?.dualSwordSkills?.dualSwordMastery?.level ||
      0,
    "character.skills.dualSwordSkills.twinSlash.level":
      config.character?.skills?.dualSwordSkills?.twinSlash?.level || 0,
    "character.skills.dualSwordSkills.spinningSlash.level":
      config.character?.skills?.dualSwordSkills?.spinningSlash?.level || 0,
    "character.skills.dualSwordSkills.phantomSlash.level":
      config.character?.skills?.dualSwordSkills?.phantomSlash?.level || 0,
    "character.skills.dualSwordSkills.aerialCut.level":
      config.character?.skills?.dualSwordSkills?.aerialCut?.level || 0,
    "character.skills.dualSwordSkills.crossParry.level":
      config.character?.skills?.dualSwordSkills?.crossParry?.level || 0,
    "character.skills.dualSwordSkills.chargingSlash.level":
      config.character?.skills?.dualSwordSkills?.chargingSlash?.level || 0,
    "character.skills.dualSwordSkills.shadowStep.level":
      config.character?.skills?.dualSwordSkills?.shadowStep?.level || 0,
    "character.skills.dualSwordSkills.shiningCross.level":
      config.character?.skills?.dualSwordSkills?.shiningCross?.level || 0,
    "character.skills.dualSwordSkills.lunarMisfortune.level":
      config.character?.skills?.dualSwordSkills?.lunarMisfortune?.level ||
      0,
    "character.skills.dualSwordSkills.twinBusterBlade.level":
      config.character?.skills?.dualSwordSkills?.twinBusterBlade?.level ||
      0,
    "character.skills.dualSwordSkills.reflex.level":
      config.character?.skills?.dualSwordSkills?.reflex?.level || 0,
    "character.skills.dualSwordSkills.flashBlast.level":
      config.character?.skills?.dualSwordSkills?.flashBlast?.level || 0,
    "character.skills.dualSwordSkills.flashBlast.isActive":
      config.character?.skills?.dualSwordSkills?.flashBlast?.isActive ||
      false,
    "character.skills.dualSwordSkills.stormReaper.level":
      config.character?.skills?.dualSwordSkills?.stormReaper?.level || 0,
    "character.skills.dualSwordSkills.dualSwordControl.level":
      config.character?.skills?.dualSwordSkills?.dualSwordControl?.level ||
      0,
    "character.skills.dualSwordSkills.godspeed.level":
      config.character?.skills?.dualSwordSkills?.godspeed?.level || 0,
    "character.skills.dualSwordSkills.saberAura.level":
      config.character?.skills?.dualSwordSkills?.saberAura?.level || 0,
    "character.skills.dualSwordSkills.crescentSaber.level":
      config.character?.skills?.dualSwordSkills?.crescentSaber?.level || 0,

    "character.skills.magicBladeSkills.magicWarriorMastery.level":
      config.character?.skills?.magicBladeSkills?.magicWarriorMastery
        ?.level || 0,
    "character.skills.magicBladeSkills.conversion.level":
      config.character?.skills?.magicBladeSkills?.conversion?.level || 0,
    "character.skills.magicBladeSkills.conversion.isActive":
      config.character?.skills?.magicBladeSkills?.conversion?.isActive ||
      false,
    "character.skills.magicBladeSkills.resonance.level":
      config.character?.skills?.magicBladeSkills?.resonance?.level || 0,
    "character.skills.magicBladeSkills.resonance.isActive":
      config.character?.skills?.magicBladeSkills?.resonance?.isActive ||
      false,
    "character.skills.magicBladeSkills.resonance.activeSet":
      config.character?.skills?.magicBladeSkills?.resonance?.activeSet ||
      "ATK/MATK",
    "character.skills.magicBladeSkills.enchantedSpell.level":
      config.character?.skills?.magicBladeSkills?.enchantedSpell?.level ||
      0,
    "character.skills.magicBladeSkills.dualBringer.level":
      config.character?.skills?.magicBladeSkills?.dualBringer?.level || 0,
    "character.skills.magicBladeSkills.dualBringer.isActive":
      config.character?.skills?.magicBladeSkills?.dualBringer?.isActive ||
      false,
    "character.skills.magicBladeSkills.etherFlare.level":
      config.character?.skills?.magicBladeSkills?.etherFlare?.level || 0,
    "character.skills.magicBladeSkills.etherFlare.inflictedIgniteOnEnemey":
      config.character?.skills?.magicBladeSkills?.etherFlare
        ?.inflictedIgniteOnEnemey || false,
    "character.skills.magicBladeSkills.elementSlash.level":
      config.character?.skills?.magicBladeSkills?.elementSlash?.level || 0,
    "character.skills.magicBladeSkills.enchantSword.level":
      config.character?.skills?.magicBladeSkills?.enchantSword?.level || 0,
    "character.skills.magicBladeSkills.enchantedBurst.level":
      config.character?.skills?.magicBladeSkills?.enchantedBurst?.level ||
      0,
    "character.skills.magicBladeSkills.unionSword.level":
      config.character?.skills?.magicBladeSkills?.unionSword?.level || 0,
    "character.skills.magicBladeSkills.siphonBarrier.level":
      config.character?.skills?.magicBladeSkills?.siphonBarrier?.level ||
      0,
    "character.skills.magicBladeSkills.siphonBarrier.isActive":
      config.character?.skills?.magicBladeSkills?.siphonBarrier
        ?.isActive || false,
    "character.skills.magicBladeSkills.teleport.level":
      config.character?.skills?.magicBladeSkills?.teleport?.level || 0,
    "character.skills.magicBladeSkills.siphonRecall.level":
      config.character?.skills?.magicBladeSkills?.siphonRecall?.level || 0,
    "character.skills.magicBladeSkills.floatDash.level":
      config.character?.skills?.magicBladeSkills?.floatDash?.level || 0,
    "character.skills.magicBladeSkills.magicSkin.level":
      config.character?.skills?.magicBladeSkills?.magicSkin?.level || 0,

    "character.skills.shieldSkills.shieldMastery.level":
      config.character?.skills?.shieldSkills?.shieldMastery?.level || 0,
    "character.skills.shieldSkills.shieldBash.level":
      config.character?.skills?.shieldSkills?.shieldBash?.level || 0,
    "character.skills.shieldSkills.shieldCannon.level":
      config.character?.skills?.shieldSkills?.shieldCannon?.level || 0,
    "character.skills.shieldSkills.guardStrike.level":
      config.character?.skills?.shieldSkills?.guardStrike?.level || 0,
    "character.skills.shieldSkills.forceShield.level":
      config.character?.skills?.shieldSkills?.forceShield?.level || 0,
    "character.skills.shieldSkills.magicalShield.level":
      config.character?.skills?.shieldSkills?.magicalShield?.level || 0,
    "character.skills.shieldSkills.shieldUppercut.level":
      config.character?.skills?.shieldSkills?.shieldUppercut?.level || 0,
    "character.skills.shieldSkills.dualShields.level":
      config.character?.skills?.shieldSkills?.dualShields?.level || 0,
    "character.skills.shieldSkills.shieldRepair.level":
      config.character?.skills?.shieldSkills?.shieldRepair?.level || 0,
    "character.skills.shieldSkills.belagerung.level":
      config.character?.skills?.shieldSkills?.belagerung?.level || 0,
    "character.skills.shieldSkills.protection.level":
      config.character?.skills?.shieldSkills?.protection?.level || 0,
    "character.skills.shieldSkills.aegis.level":
      config.character?.skills?.shieldSkills?.aegis?.level || 0,
    "character.skills.shieldSkills.guardian.level":
      config.character?.skills?.shieldSkills?.guardian?.level || 0,

    "character.skills.guardSkills.heavyArmorMastery.level":
      config.character?.skills?.guardSkills?.heavyArmorMastery?.level || 0,
    "character.skills.guardSkills.advancedGuard.level":
      config.character?.skills?.guardSkills?.advancedGuard?.level || 0,
    "character.skills.guardSkills.physicalGuard.level":
      config.character?.skills?.guardSkills?.physicalGuard?.level || 0,
    "character.skills.guardSkills.lightArmorMastery.level":
      config.character?.skills?.guardSkills?.lightArmorMastery?.level || 0,
    "character.skills.guardSkills.advancedEvasion.level":
      config.character?.skills?.guardSkills?.advancedEvasion?.level || 0,
    "character.skills.guardSkills.mirageEvasion.level":
      config.character?.skills?.guardSkills?.mirageEvasion?.level || 0,

    "character.skills.halberdSkills.flashStab.level":
      config.character?.skills?.halberdSkills?.flashStab?.level || 0,
    "character.skills.halberdSkills.cannonSpear.level":
      config.character?.skills?.halberdSkills?.cannonSpear?.level || 0,
    "character.skills.halberdSkills.dragonTail.level":
      config.character?.skills?.halberdSkills?.dragonTail?.level || 0,
    "character.skills.halberdSkills.diveImpact.level":
      config.character?.skills?.halberdSkills?.diveImpact?.level || 0,
    "character.skills.halberdSkills.dragonTooth.level":
      config.character?.skills?.halberdSkills?.dragonTooth?.level || 0,
    "character.skills.halberdSkills.draconicCharge.level":
      config.character?.skills?.halberdSkills?.draconicCharge?.level || 0,
    "character.skills.halberdSkills.deadlySpear.level":
      config.character?.skills?.halberdSkills?.deadlySpear?.level || 0,
    "character.skills.halberdSkills.punishRay.level":
      config.character?.skills?.halberdSkills?.punishRay?.level || 0,
    "character.skills.halberdSkills.strikeStab.level":
      config.character?.skills?.halberdSkills?.strikeStab?.level || 0,
    "character.skills.halberdSkills.chronosDivine.level":
      config.character?.skills?.halberdSkills?.chronosDivine?.level || 0,
    "character.skills.halberdSkills.infiniteDimension.level":
      config.character?.skills?.halberdSkills?.infiniteDimension?.level ||
      0,
    "character.skills.halberdSkills.halberdMastery.level":
      config.character?.skills?.halberdSkills?.halberdMastery?.level || 0,
    "character.skills.halberdSkills.criticalSpear.level":
      config.character?.skills?.halberdSkills?.criticalSpear?.level || 0,
    "character.skills.halberdSkills.tornadoLance.level":
      config.character?.skills?.halberdSkills?.tornadoLance?.level || 0,
    "character.skills.halberdSkills.quickAura.level":
      config.character?.skills?.halberdSkills?.quickAura?.level || 0,
    "character.skills.halberdSkills.quickAura.isActive":
      config.character?.skills?.halberdSkills?.quickAura?.isActive ||
      false,
    "character.skills.halberdSkills.warCryOfStruggle.level":
      config.character?.skills?.halberdSkills?.warCryOfStruggle?.level ||
      0,
    "character.skills.halberdSkills.godspeedWield.level":
      config.character?.skills?.halberdSkills?.godspeedWield?.level || 0,
    "character.skills.halberdSkills.godspeedWield.isActive":
      config.character?.skills?.halberdSkills?.godspeedWield?.isActive ||
      false,
    "character.skills.halberdSkills.godspeedWield.stacks":
      config.character?.skills?.halberdSkills?.godspeedWield?.stacks || 0,
    "character.skills.halberdSkills.almightyWield.level":
      config.character?.skills?.halberdSkills?.almightyWield?.level || 0,
    "character.skills.halberdSkills.busterLance.level":
      config.character?.skills?.halberdSkills?.busterLance?.level || 0,

    "character.skills.martialSkills.smash.level":
      config.character?.skills?.martialSkills?.smash?.level || 0,
    "character.skills.martialSkills.bash.level":
      config.character?.skills?.martialSkills?.bash?.level || 0,
    "character.skills.martialSkills.shellBreak.level":
      config.character?.skills?.martialSkills?.shellBreak?.level || 0,
    "character.skills.martialSkills.heavySmash.level":
      config.character?.skills?.martialSkills?.heavySmash?.level || 0,
    "character.skills.martialSkills.chariot.level":
      config.character?.skills?.martialSkills?.chariot?.level || 0,
    "character.skills.martialSkills.abstractArms.level":
      config.character?.skills?.martialSkills?.abstractArms?.level || 0,
    "character.skills.martialSkills.sonicWave.level":
      config.character?.skills?.martialSkills?.sonicWave?.level || 0,
    "character.skills.martialSkills.earthbind.level":
      config.character?.skills?.martialSkills?.earthbind?.level || 0,
    "character.skills.martialSkills.tripleKick.level":
      config.character?.skills?.martialSkills?.tripleKick?.level || 0,
    "character.skills.martialSkills.rush.level":
      config.character?.skills?.martialSkills?.rush?.level || 0,
    "character.skills.martialSkills.asuraAura.level":
      config.character?.skills?.martialSkills?.asuraAura?.level || 0,
    "character.skills.martialSkills.flashBlink.level":
      config.character?.skills?.martialSkills?.flashBlink?.level || 0,
    "character.skills.martialSkills.martialMastery.level":
      config.character?.skills?.martialSkills?.martialMastery?.level || 0,
    "character.skills.martialSkills.martialDiscipline.level":
      config.character?.skills?.martialSkills?.martialDiscipline?.level ||
      0,
    "character.skills.martialSkills.chakra.level":
      config.character?.skills?.martialSkills?.chakra?.level || 0,
    "character.skills.martialSkills.energyControl.level":
      config.character?.skills?.martialSkills?.energyControl?.level || 0,
    "character.skills.martialSkills.aggravate.level":
      config.character?.skills?.martialSkills?.aggravate?.level || 0,
    "character.skills.martialSkills.strongChaseAttack.level":
      config.character?.skills?.martialSkills?.strongChaseAttack?.level ||
      0,
    "character.skills.martialSkills.slide.level":
      config.character?.skills?.martialSkills?.slide?.level || 0,
    "character.skills.bareHandSkills.unarmedMastery.level":
      config.character?.skills?.bareHandSkills?.unarmedMastery?.level || 0,
    "character.skills.bareHandSkills.qiCharge.level":
      config.character?.skills?.bareHandSkills?.qiCharge?.level || 0,
    "character.skills.bareHandSkills.lionRage.level":
      config.character?.skills?.bareHandSkills?.lionRage?.level || 0,
    "character.skills.bareHandSkills.ultimaLionRage.level":
      config.character?.skills?.bareHandSkills?.ultimaLionRage?.level || 0,
    "character.skills.bareHandSkills.ravingStorm.level":
      config.character?.skills?.bareHandSkills?.ravingStorm?.level || 0,
    "character.skills.bareHandSkills.ultimaRavingStorm.level":
      config.character?.skills?.bareHandSkills?.ultimaRavingStorm?.level ||
      0,
    "character.skills.bareHandSkills.internalElixir.level":
      config.character?.skills?.bareHandSkills?.internalElixir?.level || 0,
    "character.skills.bareHandSkills.clashOfEnmity.level":
      config.character?.skills?.bareHandSkills?.clashOfEnmity?.level || 0,
    "character.skills.bareHandSkills.miracleComeback.level":
      config.character?.skills?.bareHandSkills?.miracleComeback?.level ||
      0,
    "character.skills.bareHandSkills.ultimaQiCharge.level":
      config.character?.skills?.bareHandSkills?.ultimaQiCharge?.level || 0,
    "character.skills.bareHandSkills.hiddenTalent.level":
      config.character?.skills?.bareHandSkills?.hiddenTalent?.level || 0,
    "character.skills.bareHandSkills.earthShaker.level":
      config.character?.skills?.bareHandSkills?.earthShaker?.level || 0,

    "character.skills.hunterSkills.kick.level":
      config.character?.skills?.hunterSkills?.kick?.level || 0,
    "character.skills.hunterSkills.sunriseArrow.level":
      config.character?.skills?.hunterSkills?.sunriseArrow?.level || 0,
    "character.skills.hunterSkills.magicArrow.level":
      config.character?.skills?.hunterSkills?.magicArrow?.level || 0,
    "character.skills.hunterSkills.satelliteArrow.level":
      config.character?.skills?.hunterSkills?.satelliteArrow?.level || 0,
    "character.skills.hunterSkills.sleepTrap.level":
      config.character?.skills?.hunterSkills?.sleepTrap?.level || 0,
    "character.skills.hunterSkills.bearTrap.level":
      config.character?.skills?.hunterSkills?.bearTrap?.level || 0,
    "character.skills.hunterSkills.landMine.level":
      config.character?.skills?.hunterSkills?.landMine?.level || 0,
    "character.skills.hunterSkills.darkTrap.level":
      config.character?.skills?.hunterSkills?.darkTrap?.level || 0,
    "character.skills.hunterSkills.homingShot.level":
      config.character?.skills?.hunterSkills?.homingShot?.level || 0,
    "character.skills.hunterSkills.detection.level":
      config.character?.skills?.hunterSkills?.detection?.level || 0,
    "character.skills.hunterSkills.cycloneArrow.level":
      config.character?.skills?.hunterSkills?.cycloneArrow?.level || 0,
    "character.skills.hunterSkills.verticalAir.level":
      config.character?.skills?.hunterSkills?.verticalAir?.level || 0,
    "character.skills.hunterSkills.hunterBowgun.level":
      config.character?.skills?.hunterSkills?.hunterBowgun?.level || 0,
    "character.skills.hunterSkills.multipleHunt.level":
      config.character?.skills?.hunterSkills?.multipleHunt?.level || 0,

    "character.skills.ninjaSkills.ninjutsu.level":
      config.character?.skills?.ninjaSkills?.ninjutsu?.level || 0,
    "character.skills.ninjaSkills.ninjaSpirit.level":
      config.character?.skills?.ninjaSkills?.ninjaSpirit?.level || 0,
    "character.skills.ninjaSkills.ninjutsuDrillI.level":
      config.character?.skills?.ninjaSkills?.ninjutsuDrillI?.level || 0,
    "character.skills.ninjaSkills.ninjutsuDrillII.level":
      config.character?.skills?.ninjaSkills?.ninjutsuDrillII?.level || 0,

    "character.skills.wizardSkills.familia.level":
      config.character?.skills?.wizardSkills?.familia?.level || 0,
    "character.skills.wizardSkills.familia.isActive":
      config.character?.skills?.wizardSkills?.familia?.isActive || false,
    "character.skills.wizardSkills.lightning.level":
      config.character?.skills?.wizardSkills?.lightning?.level || 0,
    "character.skills.wizardSkills.blizzard.level":
      config.character?.skills?.wizardSkills?.blizzard?.level || 0,
    "character.skills.wizardSkills.meteorStrike.level":
      config.character?.skills?.wizardSkills?.meteorStrike?.level || 0,
    "character.skills.wizardSkills.imperialRay.level":
      config.character?.skills?.wizardSkills?.imperialRay?.level || 0,
    "character.skills.wizardSkills.manaCrystal.level":
      config.character?.skills?.wizardSkills?.manaCrystal?.level || 0,
    "character.skills.wizardSkills.stoneBarrier.level":
      config.character?.skills?.wizardSkills?.stoneBarrier?.level || 0,
    "character.skills.wizardSkills.advancedFamilia.level":
      config.character?.skills?.wizardSkills?.advancedFamilia?.level || 0,
    "character.skills.wizardSkills.castMastery.level":
      config.character?.skills?.wizardSkills?.castMastery?.level || 0,
    "character.skills.wizardSkills.crystalLaser.level":
      config.character?.skills?.wizardSkills?.crystalLaser?.level || 0,
    "character.skills.wizardSkills.overlimit.level":
      config.character?.skills?.wizardSkills?.overlimit?.level || 0,
    "character.skills.wizardSkills.overlimit.isActive":
      config.character?.skills?.wizardSkills?.overlimit?.isActive || false,
    "character.skills.wizardSkills.sorceryGuide.level":
      config.character?.skills?.wizardSkills?.sorceryGuide?.level || 0,

    "character.skills.priestSkills.prayer.level":
      config.character?.skills?.priestSkills?.prayer?.level || 0,
    "character.skills.priestSkills.prayer.isActive":
      config.character?.skills?.priestSkills?.prayer?.isActive || false,

    "character.regislets.zeroStance.level":
      config.character?.regislets?.zeroStance?.level || 0,
    "character.regislets.maxHPBoost.level":
      config.character?.regislets?.maxHPBoost?.level || 0,
    "character.regislets.maxMPBoost.level":
      config.character?.regislets?.maxMPBoost?.level || 0,
    "character.regislets.magicAttackBoost.level":
      config.character?.regislets?.magicAttackBoost?.level || 0,
    "character.regislets.physicalAttackBoost.level":
      config.character?.regislets?.physicalAttackBoost?.level || 0,
    "character.regislets.magicDefenseBoost.level":
      config.character?.regislets?.magicDefenseBoost?.level || 0,
    "character.regislets.physicalDefenseBoost.level":
      config.character?.regislets?.physicalDefenseBoost?.level || 0,
    "character.regislets.attackSpeedBoost.level":
      config.character?.regislets?.attackSpeedBoost?.level || 0,
    "character.regislets.magicSpeedBoost.level":
      config.character?.regislets?.magicSpeedBoost?.level || 0,
    "character.regislets.dodgeBoost.level":
      config.character?.regislets?.dodgeBoost?.level || 0,
    "character.regislets.accuracyBoost.level":
      config.character?.regislets?.accuracyBoost?.level || 0,
    "character.regislets.focusResonance.level":
      config.character?.regislets?.focusResonance?.level || 0,
    "character.regislets.speedResonance.level":
      config.character?.regislets?.speedResonance?.level || 0,
    "character.regislets.powerResonance.level":
      config.character?.regislets?.powerResonance?.level || 0,

    "character.consumables":
      (config.character?.consumables as Stat[]) || [], // stat for now
    "character.foodBuffs": (config.character?.foodBuffs as Stat[]) || [], // stat for now

    "character.ailments.weaken.isActive":
      config.character?.ailments?.weaken?.isActive || false,
    "character.ailments.flinch.isActive":
      config.character?.ailments?.flinch?.isActive || false,
    "character.ailments.tumble.isActive":
      config.character?.ailments?.tumble?.isActive || false,
    "character.ailments.stun.isActive":
      config.character?.ailments?.stun?.isActive || false,
    "character.ailments.knockback.isActive":
      config.character?.ailments?.knockback?.isActive || false,
    "character.ailments.poison.isActive":
      config.character?.ailments?.poison?.isActive || false,
    "character.ailments.paralysis.isActive":
      config.character?.ailments?.paralysis?.isActive || false,
    "character.ailments.blindness.isActive":
      config.character?.ailments?.blindness?.isActive || false,
    "character.ailments.ignition.isActive":
      config.character?.ailments?.ignition?.isActive || false,
    "character.ailments.freeze.isActive":
      config.character?.ailments?.freeze?.isActive || false,
    "character.ailments.armorBreak.isActive":
      config.character?.ailments?.armorBreak?.isActive || false,
    "character.ailments.slow.isActive":
      config.character?.ailments?.slow?.isActive || false,
    "character.ailments.stop.isActive":
      config.character?.ailments?.stop?.isActive || false,
    "character.ailments.fear.isActive":
      config.character?.ailments?.fear?.isActive || false,
    "character.ailments.dizzy.isActive":
      config.character?.ailments?.dizzy?.isActive || false,
    "character.ailments.lethargy.isActive":
      config.character?.ailments?.lethargy?.isActive || false,
    "character.ailments.silence.isActive":
      config.character?.ailments?.silence?.isActive || false,
    "character.ailments.bleed.isActive":
      config.character?.ailments?.bleed?.isActive || false,
    "character.ailments.fatigue.isActive":
      config.character?.ailments?.fatigue?.isActive || false,
    "character.ailments.dazzled.isActive":
      config.character?.ailments?.dazzled?.isActive || false,

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
    "damage.criticalDamageModifier": 0,
    "damage.elementDamageModifier": 0,
    "damage.innateSkillDamageModifier": 0,
    "damage.percentUnsheatheAttack": 0,
    "damage.stability": 0,
    "damage.skillDamageModifier": 0,
    "damage.distanceDependentDamageModifier": 0,
    "damage.lastDamageModifier": 0,
    "damage.comboRelatedDamageModifier": 0,
    "damage.baseDropGemDamageModifier": 0,
    "damage.ultimaLionRageDamageModifier": 0,
    "damage.isGuarded": false,
    "damage.isGrazed:": false,
  };
};
