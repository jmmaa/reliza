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

export type WeaponType =
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

export type SubweaponType =
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

export type StatName =
  | "flatSTR"
  | "percentSTR"
  | "flatINT"
  | "percentINT"
  | "flatDEX"
  | "percentDEX"
  | "flatVIT"
  | "percentVIT"
  | "flatAGI"
  | "percentAGI"
  | "flatWeaponATK"
  | "percentWeaponATK"
  | "flatMATK"
  | "percentMATK"
  | "flatATK"
  | "percentATK"
  | "flatASPD"
  | "percentASPD"
  | "flatCSPD"
  | "percentCSPD"
  | "flatCriticalRate"
  | "percentCriticalRate"
  | "flatCriticalDamage"
  | "percentCriticalDamage"
  | "flatMaxHP"
  | "percentMaxHP"
  | "flatMaxMP"
  | "percentMaxMP"
  | "flatAccuracy"
  | "percentAccuracy"
  | "flatDodge"
  | "percentDodge"
  | "flatDEF"
  | "percentDEF"
  | "flatMDEF"
  | "percentMDEF"
  | "flatUnsheatheAttack"
  | "percentUnsheatheAttack"
  | "flatAttackMPRecovery"
  | "percentAttackMPRecovery"
  | "flatNaturalHPRegen"
  | "percentNaturalHPRegen"
  | "flatNaturalMPRegen"
  | "percentNaturalMPRegen"
  | "stability"
  | "magicPierce"
  | "physicalPierce"
  | "longRangeDamage"
  | "shortRangeDamage"
  | "motionSpeed"
  | "ATKUP(STR)"
  | "ATKUP(INT)"
  | "ATKUP(DEX)"
  | "ATKUP(VIT)"
  | "ATKUP(AGI)"
  | "MATKUP(STR)"
  | "MATKUP(INT)"
  | "MATKUP(DEX)"
  | "MATKUP(VIT)"
  | "MATKUP(AGI)"
  | "ATKDOWN(STR)"
  | "ATKDOWN(INT)"
  | "ATKDOWN(DEX)"
  | "ATKDOWN(VIT)"
  | "ATKDOWN(AGI)"
  | "MATKDOWN(STR)"
  | "MATKDOWN(INT)"
  | "MATKDOWN(DEX)"
  | "MATKDOWN(VIT)"
  | "MATKDOWN(AGI)"
  | "magicResistance"
  | "physicalResistance"
  | "lightResistance"
  | "darkResistance"
  | "fireResistance"
  | "waterResistance"
  | "earthResistance"
  | "windResistance"
  | "neutralResistance"
  | "ailmentResistance"
  | "damageToDark"
  | "damageToLight"
  | "damageToEarth"
  | "damageToWater"
  | "damageToFire"
  | "damageToWind"
  | "aggro"
  | "recoil"
  | "reflect"
  | "anticipate"
  | "tumbleUnavailable"
  | "flinchUnavailable"
  | "stunUnavailable"
  | "darkElement"
  | "lightElement"
  | "earthElement"
  | "waterElement"
  | "fireElement"
  | "windElement"
  | "guardPower"
  | "guardRecharge"
  | "guardBreak"
  | "evasionRecharge"
  | "itemCooldown"
  | "invincibleAid"
  | "absoluteAccuracy"
  | "absoluteDodge"
  | "physicalBarrier"
  | "magicBarrier"
  | "fractionalBarrier"
  | "barrierCooldown"
  | "additionalMelee"
  | "additionalMagic";

export type Stat = [StatName, number];

export type StatMapBuilder = (_: DeclarationMap) => Stat[]; // for crystals, conditional stats

export interface DeclarationMap {
  characterLevel: number;
  characterSTR: number;
  characterDEX: number;
  characterINT: number;
  characterVIT: number;
  characterAGI: number;
  characterPersonalStat: "CRT" | "TEC" | "MTL" | "LUK" | "none";
  characterPersonalStatPoints: number;
  characterWeaponType: WeaponType;
  characterWeaponATK: number;
  characterWeaponrefinement: number;
  characterWeaponStability: number;
  characterWeaponStats: StatMapBuilder;
  characterWeaponCrystals: StatMapBuilder[];
  characterSubweaponType: SubweaponType;
  characterSubweaponATK: number;
  characterSubweaponDEF: number;
  characterSubweaponRefinement: number;
  characterSubweaponStability: number;
  characterSubweaponStats: StatMapBuilder;
  characterSubweaponCrystals: StatMapBuilder[];
  characterSubweaponScrollCastTimeReduction: number;
  characterSubweaponScrollMPReduction: number;
  characterArmorDEF: number;
  characterArmorRefinement: number;
  characterArmorType: ArmorType;
  characterArmorStats: StatMapBuilder;
  characterArmorCrystals: StatMapBuilder[];
  characterAdditionalGearDEF: number;
  characterAdditionalGearRefinement: number;
  characterAdditionalGearStats: StatMapBuilder;
  characterAdditionalGearCrystals: StatMapBuilder[];
  characterSpecialGearDEF: number;
  characterSpecialGearStats: StatMapBuilder;
  characterSpecialGearCrystals: StatMapBuilder[];
  characterSkillsBladeSkillsHardHitLevel: number;
  characterSkillsBladeSkillsAstuteLevel: number;
  characterSkillsBladeSkillsTriggerSlashLevel: number;
  characterSkillsBladeSkillsTriggerSlashBuffIsActive: boolean;
  characterSkillsBladeSkillsRampageLevel: number;
  characterSkillsBladeSkillsRampageBuffIsActive: boolean;
  characterSkillsBladeSkillsMeteorBreakerLevel: number;
  characterSkillsBladeSkillsShutOutLevel: number;
  characterSkillsBladeSkillsLunarSlashLevel: number;
  characterSkillsBladeSkillsSonicBladeLevel: number;
  characterSkillsBladeSkillsSpiralAirLevel: number;
  characterSkillsBladeSkillsSwordTempestLevel: number;
  characterSkillsBladeSkillsBusterBladeLevel: number;
  characterSkillsBladeSkillsBusterBladeBuffIsActive: boolean;
  characterSkillsBladeSkillsAuraBladeLevel: number;
  characterSkillsBladeSkillsSwordMasteryLevel: number;
  characterSkillsBladeSkillsQuickSlashLevel: number;
  characterSkillsBladeSkillsSwordTechniquesLevel: number;
  characterSkillsBladeSkillsWarCryLevel: number;
  characterSkillsBladeSkillsWarCryBuffIsActive: boolean;
  characterSkillsBladeSkillsBerserkLevel: number;
  characterSkillsBladeSkillsBerserkBuffIsActive: boolean;
  characterSkillsBladeSkillsGladiateLevel: number;
  characterSkillsBladeSkillsSwiftAttackLevel: number;

  characterSkillsShotSkillsPowerShotLevel: number;
  characterSkillsShotSkillsBullseyeLevel: number;
  characterSkillsShotSkillsArrowRainLevel: number;
  characterSkillsShotSkillsSnipeLevel: number;
  characterSkillsShotSkillsCrossFireLevel: number;
  characterSkillsShotSkillsVanquisherLevel: number;
  characterSkillsShotSkillsTwinStormLevel: number;
  characterSkillsShotSkillsTwinStormBuffIsActive: boolean;
  characterSkillsShotSkillsTwinStormBuffOnCooldown: boolean;
  characterSkillsShotSkillsRetrogradeShotLevel: number;
  characterSkillsShotSkillsMoebaShotLevel: number;
  characterSkillsShotSkillsParalysisShotLevel: number;
  characterSkillsShotSkillsSmokeDustLevel: number;
  characterSkillsShotSkillsArmBreakLevel: number;
  characterSkillsShotSkillsParabolaCannonLevel: number;
  characterSkillsShotSkillsShotMasteryLevel: number;
  characterSkillsShotSkillsSamuraiArcheryLevel: number;
  characterSkillsShotSkillsSamuraiArcheryBuffIsActive: boolean;
  characterSkillsShotSkillsSamuraiArcheryBuffStacks: boolean;
  characterSkillsShotSkillsSneakAttackLevel: number;
  characterSkillsShotSkillsLongRangeLevel: number;
  characterSkillsShotSkillsQuickDrawLevel: number;
  characterSkillsShotSkillsDecoyShotLevel: number;
  characterSkillsShotSkillsFatalShotLevel: number;

  characterSkillsMagicSkillsMagicArrowsLevel: number;
  characterSkillsMagicSkillsMagicJavelinLevel: number;
  characterSkillsMagicSkillsMagicLancesLevel: number;
  characterSkillsMagicSkillsMagicImpactLevel: number;
  characterSkillsMagicSkillsMagicFinaleLevel: number;
  characterSkillsMagicSkillsChronosShiftLevel: number;
  characterSkillsMagicSkillsMagicWallLevel: number;
  characterSkillsMagicSkillsMagicBlastLevel: number;
  characterSkillsMagicSkillsMagicStormLevel: number;
  characterSkillsMagicSkillsMagicBurstLevel: number;
  characterSkillsMagicSkillsMagicCannonLevel: number;
  characterSkillsMagicSkillsMagicCrashLevel: number;
  characterSkillsMagicSkillsMagicMasteryLevel: number;
  characterSkillsMagicSkillsMagicKnifeLevel: number;
  characterSkillsMagicSkillsQadalLevel: number;
  characterSkillsMagicSkillsQadalCharge: number;
  characterSkillsMagicSkillsQadalBuffIsActive: boolean;
  characterSkillsMagicSkillsQadalBuffTimer: number;
  characterSkillsMagicSkillsMPChargeLevel: number;
  characterSkillsMagicSkillsChainCastLevel: number;
  characterSkillsMagicSkillsChainCastBuffIsActive: boolean;
  characterSkillsMagicSkillsChainCastBuffStacks: number;
  characterSkillsMagicSkillsPowerWaveLevel: number;
  characterSkillsMagicSkillsMaximizerLevel: number;
  characterSkillsMagicSkillsRapidChargeLevel: number;
  characterSkillsMagicSkillsRapidChargeBuffIsActive: boolean;
  characterSkillsMagicSkillsRapidChargeBuffRecoveredMPFromMaximizer: boolean;
  characterSkillsMagicSkillsEnchantedBarriersLevel: number;
  characterSkillsMagicSkillsMagicGuardianBeamLevel: number;

  characterSkillsSurvivalSkillsPlayDeadLevel: number;
  characterSkillsSurvivalSkillsEXPGainUPLevel: number;
  characterSkillsSurvivalSkillsDropRateUPLevel: number;
  characterSkillsSurvivalSkillsSafeRestLevel: number;
  characterSkillsSurvivalSkillsHPBoostLevel: number;
  characterSkillsSurvivalSkillsFightersHighLevel: number;
  characterSkillsSurvivalSkillsShortRestLevel: number;
  characterSkillsSurvivalSkillsMPBoostLevel: number;
  characterSkillsSurvivalSkillsSoberAnalysisLevel: number;

  characterSkillsSupportSkillsFirstAidLevel: number;
  characterSkillsSupportSkillsMiniHealLevel: number;
  characterSkillsSupportSkillsRecoveryLevel: number;
  characterSkillsSupportSkillsSanctuaryLevel: number;
  characterSkillsSupportSkillsHealLevel: number;
  characterSkillsSupportSkillsLifeRecoveryLevel: number;
  characterSkillsSupportSkillsBraveAuraLevel: number;
  characterSkillsSupportSkillsBraveAuraBuffIsActive: boolean;
  characterSkillsSupportSkillsHighCycleLevel: number;
  characterSkillsSupportSkillsHighCycleBuffIsActive: boolean;
  characterSkillsSupportSkillsQuickMotionLevel: number;
  characterSkillsSupportSkillsQuickMotionBuffIsActive: boolean;
  characterSkillsSupportSkillsManaRechargeLevel: number;
  characterSkillsSupportSkillsManaRechargeBuffIsActive: boolean;
  characterSkillsSupportSkillsMagicBarrierLevel: number;
  characterSkillsSupportSkillsMagicBarrierBuffIsActive: boolean;
  characterSkillsSupportSkillsImmunityLevel: number;
  characterSkillsSupportSkillsImmunityBuffIsActive: boolean;
  characterSkillsSupportSkillsFastReactionLevel: number;
  characterSkillsSupportSkillsFastReactionBuffIsActive: boolean;

  characterSkillsBattleSkillsMagicUPLevel: number;
  characterSkillsBattleSkillsConcentrateLevel: number;
  characterSkillsBattleSkillsAttackUPLevel: number;
  characterSkillsBattleSkillsWhackLevel: number;
  characterSkillsBattleSkillsDefenseUPLevel: number;
  characterSkillsBattleSkillsDodgeUPLevel: number;
  characterSkillsBattleSkillsDesperateResistLevel: number;
  characterSkillsBattleSkillsCriticalUPLevel: number;
  characterSkillsBattleSkillsAccuracyUPLevel: number;
  characterSkillsBattleSkillsIncreasedEnergyLevel: number;
  characterSkillsBattleSkillsIntimidatingPowerLevel: number;
  characterSkillsBattleSkillsDefenseMasteryLevel: number;
  characterSkillsBattleSkillsSpellBurstLevel: number;
  characterSkillsBattleSkillsSecretChaseAttackLevel: number;
  characterSkillsBattleSkillsSuperGripLevel: number;

  characterSkillsMononofuSkillsIssenLevel: number;
  characterSkillsMononofuSkillsPulseBladeLevel: number;
  characterSkillsMononofuSkillsTripleThrustLevel: number;
  characterSkillsMononofuSkillsTripleThrustBuffIsActive: boolean;
  characterSkillsMononofuSkillsHassoHappaLevel: number;
  characterSkillsMononofuSkillsTenryuRanseiLevel: number;
  characterSkillsMononofuSkillsKasumisetsuGetsukaLevel: number;
  characterSkillsMononofuSkillsGaryouTenseiLevel: number;
  characterSkillsMononofuSkillsShadowLessSlashLevel: number;
  characterSkillsMononofuSkillsPommelStrikeLevel: number;
  characterSkillsMononofuSkillsMagadachiLevel: number;
  characterSkillsMononofuSkillsZanteiSettetsuLevel: number;
  characterSkillsMononofuSkillsBushidoLevel: number;
  characterSkillsMononofuSkillsShukuchiLevel: number;
  characterSkillsMononofuSkillsShukuchiBuffIsActive: boolean;
  characterSkillsMononofuSkillsNukiuchiSennosenLevel: number;
  characterSkillsMononofuSkillsTwoHandedLevel: number;
  characterSkillsMononofuSkillsMeikyouShisuiLevel: number;
  characterSkillsMononofuSkillsMeikyouShisuiBuffIsActive: boolean;
  characterSkillsMononofuSkillsKairikiRanshinLevel: number;
  characterSkillsMononofuSkillsKairikiRanshinBuffIsActive: boolean;
  characterSkillsMononofuSkillsDauntlessLevel: number;
  characterSkillsMononofuSkillsDauntlessBuffIsActive: boolean;
  characterSkillsMononofuSkillsDauntlessBuffStacks: number;
  characterSkillsMononofuSkillsBouncingBladeLevel: number;
  characterSkillsMononofuSkillsBouncingBladeBuffIsActive: boolean;

  characterSkillsDualSwordSkillsDualSwordMasteryLevel: number;
  characterSkillsDualSwordSkillsTwinSlashLevel: number;
  characterSkillsDualSwordSkillsSpinningSlashLevel: number;
  characterSkillsDualSwordSkillsPhantomSlashLevel: number;
  characterSkillsDualSwordSkillsAerialCutLevel: number;
  characterSkillsDualSwordSkillsCrossParryLevel: number;
  characterSkillsDualSwordSkillsCrossParryBuffIsActive: boolean;
  characterSkillsDualSwordSkillsCrossParryIsParried: boolean;
  characterSkillsDualSwordSkillsChargingSlashLevel: number;
  characterSkillsDualSwordSkillsShadowStepLevel: number;
  characterSkillsDualSwordSkillsShadowStepBuffIsActive: boolean;
  characterSkillsDualSwordSkillsShiningCrossLevel: number;
  characterSkillsDualSwordSkillsLunarMisfortuneLevel: number;
  characterSkillsDualSwordSkillsTwinBusterBladeLevel: number;
  characterSkillsDualSwordSkillsTwinBusterBladeBuffIsActive: number;
  characterSkillsDualSwordSkillsReflexLevel: number;
  characterSkillsDualSwordSkillsFlashBlastLevel: number;
  characterSkillsDualSwordSkillsFlashBlastBuffIsActive: boolean;
  characterSkillsDualSwordSkillsStormReaperLevel: number;
  characterSkillsDualSwordSkillsDualSwordControlLevel: number;
  characterSkillsDualSwordSkillsGodspeedLevel: number;
  characterSkillsDualSwordSkillsSaberAuraLevel: number;
  characterSkillsDualSwordSkillsCrescentSaberLevel: number;

  characterSkillsMagicBladeSkillsMagicWarriorMasteryLevel: number;
  characterSkillsMagicBladeSkillsConversionLevel: number;
  characterSkillsMagicBladeSkillsConversionBuffIsActive: boolean;
  characterSkillsMagicBladeSkillsResonanceLevel: number;
  characterSkillsMagicBladeSkillsResonanceBuffIsActive: boolean;
  characterSkillsMagicBladeSkillsResonanceBuffSet:
    | "ATK/MATK"
    | "ASPD/CSPD"
    | "ACC/CRIT";
  characterSkillsMagicBladeSkillsEnchantedSpellLevel: number;
  characterSkillsMagicBladeSkillsDualBringerLevel: number;
  characterSkillsMagicBladeSkillsDualBringerBuffIsActive: boolean;
  characterSkillsMagicBladeSkillsEtherFlareLevel: number;
  characterSkillsMagicBladeSkillsEtherFlareBuffIsActive: boolean;
  characterSkillsMagicBladeSkillsElementSlashLevel: number;
  characterSkillsMagicBladeSkillsEnchantSwordLevel: number;
  characterSkillsMagicBladeSkillsEnchantedBurstLevel: number;
  characterSkillsMagicBladeSkillsUnionSwordLevel: number;
  characterSkillsMagicBladeSkillsSiphonBarrierLevel: number;
  characterSkillsMagicBladeSkillsSiphonBarrierBuffIsActive: boolean;
  characterSkillsMagicBladeSkillsTeleportLevel: number;
  characterSkillsMagicBladeSkillsSiphonRecallLevel: number;
  characterSkillsMagicBladeSkillsFloatDashLevel: number;
  characterSkillsMagicBladeSkillsMagicSkinLevel: number;

  characterSkillsShieldSkillsShieldMasteryLevel: number;
  characterSkillsShieldSkillsShieldBashLevel: number;
  characterSkillsShieldSkillsShieldCannonLevel: number;
  characterSkillsShieldSkillsGuardStrikeLevel: number;
  characterSkillsShieldSkillsForceShieldLevel: number;
  characterSkillsShieldSkillsMagicalShieldLevel: number;
  characterSkillsShieldSkillsShieldUppercutLevel: number;
  characterSkillsShieldSkillsDualShieldsLevel: number;
  characterSkillsShieldSkillsShieldRepairLevel: number;
  characterSkillsShieldSkillsBelagerungLevel: number;
  characterSkillsShieldSkillsProtectionLevel: number;
  characterSkillsShieldSkillsProtectionBuffIsActive: boolean;
  characterSkillsShieldSkillsAegisLevel: number;
  characterSkillsShieldSkillsAegisBuffIsActive: boolean;
  characterSkillsShieldSkillsGuardianLevel: number;

  characterSkillsGuardSkillsHeavyArmorMasteryLevel: number;
  characterSkillsGuardSkillsAdvancedGuardLevel: number;
  characterSkillsGuardSkillsPhysicalGuardLevel: number;
  characterSkillsGuardSkillsLightArmorMasteryLevel: number;
  characterSkillsGuardSkillsAdvancedEvasionLevel: number;
  characterSkillsGuardSkillsMirageEvasionLevel: number;

  characterSkillsHalberdSkillsFlashStabLevel: number;
  characterSkillsHalberdSkillsCannonSpearLevel: number;
  characterSkillsHalberdSkillsDragonTailLevel: number;
  characterSkillsHalberdSkillsDiveImpactLevel: number;
  characterSkillsHalberdSkillsDragonToothLevel: number;
  characterSkillsHalberdSkillsDraconicChargeLevel: number;
  characterSkillsHalberdSkillsDeadlySpearLevel: number;
  characterSkillsHalberdSkillsPunishRayLevel: number;
  characterSkillsHalberdSkillsStrikeStabLevel: number;
  characterSkillsHalberdSkillsChronosDivineLevel: number;
  characterSkillsHalberdSkillsInfiniteDimensionLevel: number;
  characterSkillsHalberdSkillsHalberdMasteryLevel: number;
  characterSkillsHalberdSkillsCriticalSpearLevel: number;
  characterSkillsHalberdSkillsTornadoLanceLevel: number;
  characterSkillsHalberdSkillsQuickAuraLevel: number;
  characterSkillsHalberdSkillsQuickAuraBuffIsActive: boolean;
  characterSkillsHalberdSkillsWarCryOfStruggleLevel: number;
  characterSkillsHalberdSkillsGodspeedWieldLevel: number;
  characterSkillsHalberdSkillsGodspeedWieldBuffIsActive: boolean;
  characterSkillsHalberdSkillsGodspeedWieldBuffStacks: number;
  characterSkillsHalberdSkillsAlmightyWieldLevel: number;
  characterSkillsHalberdSkillsBusterLanceLevel: number;

  characterSkillsMartialSkillsSmashLevel: number;
  characterSkillsMartialSkillsBashLevel: number;
  characterSkillsMartialSkillsShellBreakLevel: number;
  characterSkillsMartialSkillsHeavySmashLevel: number;
  characterSkillsMartialSkillsChariotLevel: number;
  characterSkillsMartialSkillsAbstractArmsLevel: number;
  characterSkillsMartialSkillsSonicWaveLevel: number;
  characterSkillsMartialSkillsEarthbindLevel: number;
  characterSkillsMartialSkillsTripleKickLevel: number;
  characterSkillsMartialSkillsRushLevel: number;
  characterSkillsMartialSkillsRushBuffIsActive: boolean;
  characterSkillsMartialSkillsAsuraAuraLevel: number;
  characterSkillsMartialSkillsAsuraAuraBuffIsActive: boolean;
  characterSkillsMartialSkillsFlashBlinkLevel: number;
  characterSkillsMartialSkillsMartialMasteryLevel: number;
  characterSkillsMartialSkillsMartialDisciplineLevel: number;
  characterSkillsMartialSkillsChakraLevel: number;
  characterSkillsMartialSkillsChakraBuffIsActive: boolean;
  characterSkillsMartialSkillsEnergyControlLevel: number;
  characterSkillsMartialSkillsEnergyControlBuffIsActive: boolean;
  characterSkillsMartialSkillsAggravateLevel: number;
  characterSkillsMartialSkillsStrongChaseAttackLevel: number;
  characterSkillsMartialSkillsSlideLevel: number;

  characterSkillsBareHandSkillsUnarmedMasteryLevel: number;
  characterSkillsBareHandSkillsQiChargeLevel: number;
  characterSkillsBareHandSkillsLionRageLevel: number;
  characterSkillsBareHandSkillsUltimaLionRageLevel: number;
  characterSkillsBareHandSkillsRavingStormLevel: number;
  characterSkillsBareHandSkillsUltimaRavingStormLevel: number;
  characterSkillsBareHandSkillsInternalElixirLevel: number;
  characterSkillsBareHandSkillsClashOfEnmityLevel: number;
  characterSkillsBareHandSkillsMiracleComebackLevel: number;
  characterSkillsBareHandSkillsUltimaQiChargeLevel: number;
  characterSkillsBareHandSkillsHiddenTalentLevel: number;
  characterSkillsBareHandSkillsEarthShakerLevel: number;
  characterSkillsBareHandSkillsEarthShakerBuffIsActive: boolean;

  characterSkillsHunterSkillsKickLevel: number;
  characterSkillsHunterSkillsSunriseArrowLevel: number;
  characterSkillsHunterSkillsMagicArrowLevel: number;
  characterSkillsHunterSkillsMagicArrowBuffIsActive: boolean;
  characterSkillsHunterSkillsSatelliteArrowLevel: number;
  characterSkillsHunterSkillsSleepTrapLevel: number;
  characterSkillsHunterSkillsBearTrapLevel: number;
  characterSkillsHunterSkillsLandMineLevel: number;
  characterSkillsHunterSkillsDarkTrapLevel: number;
  characterSkillsHunterSkillsHomingShotLevel: number;
  characterSkillsHunterSkillsDetectionLevel: number;
  characterSkillsHunterSkillsDetectionBuffIsActive: boolean;
  characterSkillsHunterSkillsCycloneArrowLevel: number;
  characterSkillsHunterSkillsVerticalAirLevel: number;
  characterSkillsHunterSkillsHunterBowgunLevel: number;
  characterSkillsHunterSkillsMultipleHuntLevel: number;
  characterSkillsHunterSkillsTripleAceShotsBuffIsActive: boolean;
  characterSkillsHunterSkillsWolfSniperBuffIsActive: boolean;

  characterSkillsNinjaSkillsNinjutsuLevel: number;
  characterSkillsNinjaSkillsNinjaSpiritLevel: number;
  characterSkillsNinjaSkillsNinjutsuDrillILevel: number;
  characterSkillsNinjaSkillsNinjutsuDrillIILevel: number;

  characterSkillsWizardSkillsFamiliaLevel: number;
  characterSkillsWizardSkillsFamiliaBuffIsActive: boolean;
  characterSkillsWizardSkillsLightningLevel: number;
  characterSkillsWizardSkillsBlizzardLevel: number;
  characterSkillsWizardSkillsMeteorStrikeLevel: number;
  characterSkillsWizardSkillsImperialRayLevel: number;
  characterSkillsWizardSkillsManaCrystalLevel: number;
  characterSkillsWizardSkillsStoneBarrierLevel: number;
  characterSkillsWizardSkillsAdvancedFamiliaLevel: number;
  characterSkillsWizardSkillsAdvancedFamiliaBuffIsActive: number;
  characterSkillsWizardSkillsCastMasteryLevel: number;
  characterSkillsWizardSkillsCrystalLaserLevel: number;
  characterSkillsWizardSkillsOverlimitLevel: number;
  characterSkillsWizardSkillsOverlimitBuffIsActive: boolean;
  characterSkillsWizardSkillsSorceryGuideLevel: number;

  characterSkillsPriestSkillsBlessLevel: number;
  characterSkillsPriestSkillsGloriaLevel: number;
  characterSkillsPriestSkillsEnhancedBlessLevel: number;
  characterSkillsPriestSkillsRoyalHealLevel: number;
  characterSkillsPriestSkillsHolyFistLevel: number;
  characterSkillsPriestSkillsHolyLightLevel: number;
  characterSkillsPriestSkillsEtherBarrierLevel: number;
  characterSkillsPriestSkillsEtherBarrierBuffIsActive: boolean;
  characterSkillsPriestSkillsPrayerLevel: number;
  characterSkillsPriestSkillsPrayerBuffIsActive: boolean;
  characterSkillsPriestSkillsStaffThrustLevel: number;
  characterSkillsPriestSkillsExorcismLevel: number;
  characterSkillsPriestSkillsHolyBookLevel: number;
  characterSkillsPriestSkillsHolyBookBuffIsActive: boolean;
  characterSkillsPriestSkillsNemesisLevel: number;

  characterRegisletsZeroStanceLevel: number;
  characterRegisletsMaxHPBoostLevel: number;
  characterRegisletsMaxMPBoostLevel: number;
  characterRegisletsMagicAttackBoostLevel: number;
  characterRegisletsPhysicalAttackBoostLevel: number;
  characterRegisletsMagicDefenseBoostLevel: number;
  characterRegisletsPhysicalDefenseBoostLevel: number;
  characterRegisletsAttackSpeedBoostLevel: number;
  characterRegisletsMagicSpeedBoostLevel: number;
  characterRegisletsDodgeBoostLevel: number;
  characterRegisletsAccuracyBoostLevel: number;
  characterRegisletsFocusResonanceLevel: number;
  characterRegisletsSpeedResonanceLevel: number;
  characterRegisletsPowerResonanceLevel: number;

  characterConsumables: Stat[]; // statmap for now
  characterFoodBuffs: Stat[]; // statmap for now

  characterAilmentsWeakenIsActive: boolean;
  characterAilmentsFlinchIsActive: boolean;
  characterAilmentsTumbleIsActive: boolean;
  characterAilmentsStunIsActive: boolean;
  characterAilmentsKnockbackIsActive: boolean;
  characterAilmentsPoisonIsActive: boolean;
  characterAilmentsParalysisIsActive: boolean;
  characterAilmentsBlindnessIsActive: boolean;
  characterAilmentsIgnitionIsActive: boolean;
  characterAilmentsFreezeIsActive: boolean;
  characterAilmentsArmorBreakIsActive: boolean;
  characterAilmentsSlowIsActive: boolean;
  characterAilmentsStopIsActive: boolean;
  characterAilmentsFearIsActive: boolean;
  characterAilmentsDizzyIsActive: boolean;
  characterAilmentsLethargyIsActive: boolean;
  characterAilmentsSilenceIsActive: boolean;
  characterAilmentsBleedIsActive: boolean;
  characterAilmentsFatigueIsActive: boolean;
  characterAilmentsDazzledIsActive: boolean;

  // target
  targetLevel: number;
  targetPhysicalResistance: number;
  targetMagicResistance: number;
  targetWeaponResistance: number;
  targetDEF: number;
  targetMDEF: number;
  targetElement: ElementType;
  targetAilmentsWeakenIsActive: boolean;
  targetAilmentsFlinchIsActive: boolean;
  targetAilmentsTumbleIsActive: boolean;
  targetAilmentsStunIsActive: boolean;
  targetAilmentsKnockbackIsActive: boolean;
  targetAilmentsPoisonIsActive: boolean;
  targetAilmentsParalysisIsActive: boolean;
  targetAilmentsBlindnessIsActive: boolean;
  targetAilmentsIgnitionIsActive: boolean;
  targetAilmentsFreezeIsActive: boolean;
  targetAilmentsArmorBreakIsActive: boolean;
  targetAilmentsSlowIsActive: boolean;
  targetAilmentsStopIsActive: boolean;
  targetAilmentsFearIsActive: boolean;
  targetAilmentsDizzyIsActive: boolean;
  targetAilmentsLethargyIsActive: boolean;
  targetAilmentsSilenceIsActive: boolean;
  targetAilmentsBleedIsActive: boolean;
  targetAilmentsFatigueIsActive: boolean;
  targetAilmentsDazzledIsActive: boolean;
  targetDistanceFromPlayer: number;
  targetProration: number;

  // damage instance

  damageBase: number;
  damageConstant: number;
  damagePierce: number;
  damageFlatUnsheatheAttack: number;
  damageCriticalDamageModifier: number;
  damageElementDamageModifier: number;
  damageInnateSkillDamageModifier: number;
  damagePercentUnsheatheAttack: number;
  damageStability: number;
  damageSkillDamageModifier: number;
  damageDistanceDependentDamageModifier: number;
  damageLastDamageModifier: number;
  damageComboRelatedDamageModifier: number;
  damageBaseDropGemDamageModifier: number;
  damageUltimaLionRageDamageModifier: number;
  damageIsGuarded: boolean;
  damageIsGrazed: boolean;
}

// utils

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];

export type RecursivePartial<T> = {
  [P in keyof T]?: T extends (infer L)[] ? L
  : RecursivePartial<T[P]> | undefined;
};

export type Merged<L, R> = L & R;
export type Merger<R> = <D extends DeclarationMap>(_: D) => Merged<D, R>;
export type MergerBuilder<P> = (_: P) => Merger<P>;
