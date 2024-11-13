import {
  type PersonalStatName,
  type MainWeaponType,
  type SubWeaponType,
  type ArmorType,
  type ResonanceSet,
  type Config,
} from "./data";
import {
  totalAGI,
  totalFlatAGI,
  totalPercentAGI,
  totalDEX,
  totalFlatDEX,
  totalPercentDEX,
  totalVIT,
  totalFlatVIT,
  totalPercentVIT,
  totalSTR,
  totalFlatSTR,
  totalPercentSTR,
  totalINT,
  totalFlatINT,
  totalPercentINT,
  totalASPD,
  totalFlatASPD,
  totalPercentASPD,
  totalBaseASPD,
  totalMotionSpeed,
  totalCSPD,
  totalFlatCSPD,
  totalPercentCSPD,
  totalBaseCSPD,
  totalCastTimeReduction,
  totalAilmentResistance,
  totalAccuracy,
  totalFlatAccuracy,
  totalBaseAccuracy,
} from "./internals";
import {
  MainWeaponTypeId,
  SubWeaponTypeId,
  ArmorTypeId,
  ResonanceSetId,
  PersonalStatId,
  ParamId,
  type IntermediateConfig,
  type StatMapBuilder,
} from "./internals/data";

const getPersonalStatIdFromPersonalStatName = (name: PersonalStatName) =>
  name === "CRT" ? PersonalStatId.CRT
  : name === "LUK" ? PersonalStatId.LUK
  : name === "MTL" ? PersonalStatId.MTL
  : name === "TEC" ? PersonalStatId.TEC
  : PersonalStatId.NONE;

const getMainWeaponTypeIdFromMainWeaponType = (
  mainWeapon: MainWeaponType,
) =>
  mainWeapon === "two-handed-sword" ? MainWeaponTypeId.TWO_HANDED_SWORD
  : mainWeapon === "bow" ? MainWeaponTypeId.BOW
  : mainWeapon === "bowgun" ? MainWeaponTypeId.BOWGUN
  : mainWeapon === "halberd" ? MainWeaponTypeId.HALBERD
  : mainWeapon === "katana" ? MainWeaponTypeId.KATANA
  : mainWeapon === "knuckle" ? MainWeaponTypeId.KNUCKLES
  : mainWeapon === "magic-device" ? MainWeaponTypeId.MAGIC_DEVICE
  : mainWeapon === "one-handed-sword" ? MainWeaponTypeId.ONE_HANDED_SWORD
  : mainWeapon === "staff" ? MainWeaponTypeId.STAFF
  : MainWeaponTypeId.BARE_HAND;

const getSubWeaponTypeIdFromSubWeaponType = (subWeapon: SubWeaponType) =>
  subWeapon === "arrow" ? SubWeaponTypeId.ARROW
  : subWeapon === "dagger" ? SubWeaponTypeId.DAGGER
  : subWeapon === "katana" ? SubWeaponTypeId.KATANA
  : subWeapon === "knuckle" ? SubWeaponTypeId.KNUCKLES
  : subWeapon === "magic-device" ? SubWeaponTypeId.MAGIC_DEVICE
  : subWeapon === "ninjutsu-scroll" ? SubWeaponTypeId.NINJUTSU_SCROLL
  : subWeapon === "one-handed-sword" ? SubWeaponTypeId.ONE_HANDED_SWORD
  : subWeapon === "shield" ? SubWeaponTypeId.SHIELD
  : SubWeaponTypeId.NONE;

const getArmorTypeIdFromArmorType = (armorType: ArmorType) =>
  armorType === "heavy" ? ArmorTypeId.HEAVY
  : armorType === "light" ? ArmorTypeId.LIGHT
  : armorType === "normal" ? ArmorTypeId.NORMAL
  : ArmorTypeId.NONE;

const defaultStatMapBuilder: StatMapBuilder = (
  _: IntermediateConfig,
) => [];

const getResonanceSetIdFromResonanceSet = (resonanceSet: ResonanceSet) =>
  resonanceSet === "ACC/CRIT" ? ResonanceSetId.ACC_AND_CRIT
  : resonanceSet === "ASPD/CSPD" ? ResonanceSetId.ASPD_AND_CSPD
  : ResonanceSetId.MATK_AND_ATK;

const createIntermediateConfig = (
  config: Partial<Config>,
): IntermediateConfig => ({
  [ParamId.CHARACTER_LEVEL]: config.properties?.level || 1,

  [ParamId.CHARACTER_BASE_STR]: config.properties?.STR || 1,
  [ParamId.CHARACTER_BASE_INT]: config.properties?.INT || 1,
  [ParamId.CHARACTER_BASE_DEX]: config.properties?.DEX || 1,
  [ParamId.CHARACTER_BASE_VIT]: config.properties?.VIT || 1,
  [ParamId.CHARACTER_BASE_AGI]: config.properties?.AGI || 1,
  [ParamId.CHARACTER_PERSONAL_STAT_ID]:
    getPersonalStatIdFromPersonalStatName(
      config.properties?.personalStat || "none",
    ),
  [ParamId.CHARACTER_PERSONAL_STAT_VALUE]:
    config.properties?.personalStatValue || 0,

  [ParamId.CHARACTER_MAINWEAPON_TYPE]:
    getMainWeaponTypeIdFromMainWeaponType(
      config.equipments?.mainweapon?.type || "bare-hand",
    ),
  [ParamId.CHARACTER_MAINWEAPON_ATK]:
    config.equipments?.mainweapon?.ATK || 0,
  [ParamId.CHARACTER_MAINWEAPON_REFINEMENT]:
    config.equipments?.mainweapon?.refinement || 0,
  [ParamId.CHARACTER_MAINWEAPON_STABILITY]:
    config.equipments?.mainweapon?.stability || 0,
  [ParamId.CHARACTER_MAINWEAPON_STATMAP]:
    config.equipments?.mainweapon?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_MAINWEAPON_CRYSTAL1_STATMAP]:
    config.equipments?.mainweapon?.crystal1 || defaultStatMapBuilder,
  [ParamId.CHARACTER_MAINWEAPON_CRYSTAL2_STATMAP]:
    config.equipments?.mainweapon?.crystal2 || defaultStatMapBuilder,

  [ParamId.CHARACTER_SUBWEAPON_TYPE]: getSubWeaponTypeIdFromSubWeaponType(
    config.equipments?.subweapon?.type || "none",
  ),
  [ParamId.CHARACTER_SUBWEAPON_ATK]:
    config.equipments?.subweapon?.ATK || 0,
  [ParamId.CHARACTER_SUBWEAPON_DEF]:
    config.equipments?.subweapon?.DEF || 0,
  [ParamId.CHARACTER_SUBWEAPON_REFINEMENT]:
    config.equipments?.subweapon?.refinement || 0,
  [ParamId.CHARACTER_SUBWEAPON_STABILITY]:
    config.equipments?.subweapon?.stability || 0,
  [ParamId.CHARACTER_SUBWEAPON_STATMAP]:
    config.equipments?.subweapon?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_SUBWEAPON_CRYSTAL1_STATMAP]:
    config.equipments?.subweapon?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_SUBWEAPON_CRYSTAL2_STATMAP]:
    config.equipments?.subweapon?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_SUBWEAPON_SCROLL_CAST_TIME_REDUCTION]:
    config.equipments?.subweapon?.scrollCastTimeReduction || 0,
  [ParamId.CHARACTER_SUBWEAPON_SCROLL_MP_REDUCTION]:
    config.equipments?.subweapon?.scrollMPReduction || 0,

  // continue here

  [ParamId.CHARACTER_ARMOR_DEF]: config.equipments?.armor?.DEF || 0,
  [ParamId.CHARACTER_ARMOR_REFINEMENT]:
    config.equipments?.armor?.refinement || 0,
  [ParamId.CHARACTER_ARMOR_TYPE]: getArmorTypeIdFromArmorType(
    config.equipments?.armor?.type || "none",
  ),
  [ParamId.CHARACTER_ARMOR_STATMAP]:
    config.equipments?.armor?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_ARMOR_CRYSTAL1_STATMAP]:
    config.equipments?.armor?.crystal1 || defaultStatMapBuilder,
  [ParamId.CHARACTER_ARMOR_CRYSTAL2_STATMAP]:
    config.equipments?.armor?.crystal2 || defaultStatMapBuilder,

  [ParamId.CHARACTER_ADDITIONAL_GEAR_DEF]:
    config.equipments?.additionalGear?.DEF || 0,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_REFINEMENT]:
    config.equipments?.additionalGear?.refinement || 0,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_STATMAP]:
    config.equipments?.additionalGear?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL1_STATMAP]:
    config.equipments?.additionalGear?.crystal1 || defaultStatMapBuilder,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL2_STATMAP]:
    config.equipments?.additionalGear?.crystal2 || defaultStatMapBuilder,

  [ParamId.CHARACTER_SPECIAL_GEAR_DEF]:
    config.equipments?.specialGear?.DEF || 0,
  [ParamId.CHARACTER_SPECIAL_GEAR_STATMAP]:
    config.equipments?.specialGear?.stats || defaultStatMapBuilder,
  [ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL1_STATMAP]:
    config.equipments?.specialGear?.crystal1 || defaultStatMapBuilder,
  [ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL2_STATMAP]:
    config.equipments?.specialGear?.crystal2 || defaultStatMapBuilder,

  [ParamId.CHARACTER_SKILLS_BLADESKILLS_HARDHIT_LEVEL]:
    config.skillTrees?.bladeSkills?.hardhit?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_ASTUTE_LEVEL]:
    config.skillTrees?.bladeSkills?.astute?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_TRIGGERSLASH_LEVEL]:
    config.skillTrees?.bladeSkills?.triggerslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_TRIGGERSLASH_ISACTIVE]:
    config.skillTrees?.bladeSkills?.triggerslash?.isActive || false,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_RAMPAGE_LEVEL]:
    config.skillTrees?.bladeSkills?.rampage?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_RAMPAGE_ISACTIVE]:
    config.skillTrees?.bladeSkills?.rampage?.isActive || false,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_METEORBREAKER_LEVEL]:
    config.skillTrees?.bladeSkills?.meteorbreaker?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SHUTOUT_LEVEL]:
    config.skillTrees?.bladeSkills?.shutout?.level || 0,

  [ParamId.CHARACTER_SKILLS_BLADESKILLS_LUNARSLASH_LEVEL]:
    config.skillTrees?.bladeSkills?.lunarslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SONICBLADE_LEVEL]:
    config.skillTrees?.bladeSkills?.sonicblade?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SPIRALAIR_LEVEL]:
    config.skillTrees?.bladeSkills?.spiralair?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDTEMPEST_LEVEL]:
    config.skillTrees?.bladeSkills?.swordtempest?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_LEVEL]:
    config.skillTrees?.bladeSkills?.busterblade?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_ISACTIVE]:
    config.skillTrees?.bladeSkills?.busterblade?.isActive || false,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_AURABLADE_LEVEL]:
    config.skillTrees?.bladeSkills?.aurablade?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDMASTERY_LEVEL]:
    config.skillTrees?.bladeSkills?.swordmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_QUICKSLASH_LEVEL]:
    config.skillTrees?.bladeSkills?.quickslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDTECHNIQUES_LEVEL]:
    config.skillTrees?.bladeSkills?.swordtechniques?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_LEVEL]:
    config.skillTrees?.bladeSkills?.warcry?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_ISACTIVE]:
    config.skillTrees?.bladeSkills?.warcry?.isActive || false,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_LEVEL]:
    config.skillTrees?.bladeSkills?.berserk?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_ISACTIVE]:
    config.skillTrees?.bladeSkills?.berserk?.isActive || false,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_GLADIATE_LEVEL]:
    config.skillTrees?.bladeSkills?.gladiate?.level || 0,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWIFTATTACK_LEVEL]:
    config.skillTrees?.bladeSkills?.swiftattack?.level || 0,

  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_POWERSHOT_LEVEL]:
    config.skillTrees?.shotSkills?.powershot?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_BULLSEYE_LEVEL]:
    config.skillTrees?.shotSkills?.bullseye?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_ARROWRAIN_LEVEL]:
    config.skillTrees?.shotSkills?.arrowrain?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SNIPE_LEVEL]:
    config.skillTrees?.shotSkills?.snipe?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_CROSSFIRE_LEVEL]:
    config.skillTrees?.shotSkills?.crossfire?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_VANQUISHER_LEVEL]:
    config.skillTrees?.shotSkills?.vanquisher?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_LEVEL]:
    config.skillTrees?.shotSkills?.twinstorm?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_ISACTIVE]:
    config.skillTrees?.shotSkills?.twinstorm?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_ONCOOLDOWN]:
    config.skillTrees?.shotSkills?.twinstorm?.onCooldown || false,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_RETROGRADESHOT_LEVEL]:
    config.skillTrees?.shotSkills?.retrogradeshot?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_MOEBASHOT_LEVEL]:
    config.skillTrees?.shotSkills?.moebashot?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_PARALYSISSHOT_LEVEL]:
    config.skillTrees?.shotSkills?.paralysisshot?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SMOKEDUST_LEVEL]:
    config.skillTrees?.shotSkills?.smokedust?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_ARMBREAK_LEVEL]:
    config.skillTrees?.shotSkills?.armbreak?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_PARABOLACANNON_LEVEL]:
    config.skillTrees?.shotSkills?.parabolacannon?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SHOTMASTERY_LEVEL]:
    config.skillTrees?.shotSkills?.shotmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_LEVEL]:
    config.skillTrees?.shotSkills?.samuraiarchery?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_STACKS]:
    config.skillTrees?.shotSkills?.samuraiarchery?.stacks || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SNEAKATTACK_LEVEL]:
    config.skillTrees?.shotSkills?.sneakattack?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_LONGRANGE_LEVEL]:
    config.skillTrees?.shotSkills?.longrange?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_QUICKDRAW_LEVEL]:
    config.skillTrees?.shotSkills?.quickdraw?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_DECOYSHOT_LEVEL]:
    config.skillTrees?.shotSkills?.decoyshot?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_FATALSHOT_LEVEL]:
    config.skillTrees?.shotSkills?.fatalshot?.level || 0,

  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICARROWS_LEVEL]:
    config.skillTrees?.magicSkills?.magicarrows?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICJAVELIN_LEVEL]:
    config.skillTrees?.magicSkills?.magicjavelin?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICLANCES_LEVEL]:
    config.skillTrees?.magicSkills?.magiclances?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICIMPACT_LEVEL]:
    config.skillTrees?.magicSkills?.magicimpact?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICFINALE_LEVEL]:
    config.skillTrees?.magicSkills?.magicfinale?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHRONOSSHIFT_LEVEL]:
    config.skillTrees?.magicSkills?.chronosshift?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICWALL_LEVEL]:
    config.skillTrees?.magicSkills?.magicwall?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICBLAST_LEVEL]:
    config.skillTrees?.magicSkills?.magicblast?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICSTORM_LEVEL]:
    config.skillTrees?.magicSkills?.magicstorm?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICBURST_LEVEL]:
    config.skillTrees?.magicSkills?.magicburst?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICCANNON_LEVEL]:
    config.skillTrees?.magicSkills?.magiccannon?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICCRASH_LEVEL]:
    config.skillTrees?.magicSkills?.magiccrash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICMASTERY_LEVEL]:
    config.skillTrees?.magicSkills?.magicmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICKNIFE_LEVEL]:
    config.skillTrees?.magicSkills?.magicknife?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_LEVEL]:
    config.skillTrees?.magicSkills?.qadal?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_BURDEN]:
    config.skillTrees?.magicSkills?.qadal?.burden || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_ISACTIVE]:
    config.skillTrees?.magicSkills?.qadal?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_COMBAT_TIME]:
    config.skillTrees?.magicSkills?.qadal?.combatTime || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MPCHARGE_LEVEL]:
    config.skillTrees?.magicSkills?.mpcharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_LEVEL]:
    config.skillTrees?.magicSkills?.chaincast?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_ISACTIVE]:
    config.skillTrees?.magicSkills?.chaincast?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_STACKS]:
    config.skillTrees?.magicSkills?.chaincast?.stacks || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_POWERWAVE_LEVEL]:
    config.skillTrees?.magicSkills?.powerwave?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAXIMIZER_LEVEL]:
    config.skillTrees?.magicSkills?.maximizer?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_LEVEL]:
    config.skillTrees?.magicSkills?.rapidcharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_ISACTIVE]:
    config.skillTrees?.magicSkills?.rapidcharge?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_AMOUNTMPRECOVEREDFROMMAXIMIZER]:
    config.skillTrees?.magicSkills?.rapidcharge
      ?.amountMPRecoveredFromMaximizer || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_ENCHANTEDBARRIERS_LEVEL]:
    config.skillTrees?.magicSkills?.enchantedbarriers?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICGUARDIANBEAM_LEVEL]:
    config.skillTrees?.magicSkills?.magicguardianbeam?.level || 0,

  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_PLAYDEAD_LEVEL]:
    config.skillTrees?.survivalSkills?.playdead?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_EXPGAINUP_LEVEL]:
    config.skillTrees?.survivalSkills?.expgainup?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_DROPRATEUP_LEVEL]:
    config.skillTrees?.survivalSkills?.droprateup?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SAFEREST_LEVEL]:
    config.skillTrees?.survivalSkills?.saferest?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_HPBOOST_LEVEL]:
    config.skillTrees?.survivalSkills?.hpboost?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_FIGHTERSHIGH_LEVEL]:
    config.skillTrees?.survivalSkills?.fightershigh?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SHORTREST_LEVEL]:
    config.skillTrees?.survivalSkills?.shortrest?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_MPBOOST_LEVEL]:
    config.skillTrees?.survivalSkills?.mpboost?.level || 0,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SOBERANALYSIS_LEVEL]:
    config.skillTrees?.survivalSkills?.soberanalysis?.level || 0,

  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FIRSTAID_LEVEL]:
    config.skillTrees?.supportSkills?.firstaid?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MINIHEAL_LEVEL]:
    config.skillTrees?.supportSkills?.miniheal?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_RECOVERY_LEVEL]:
    config.skillTrees?.supportSkills?.recovery?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_SANCTUARY_LEVEL]:
    config.skillTrees?.supportSkills?.sanctuary?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HEAL_LEVEL]:
    config.skillTrees?.supportSkills?.heal?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_LIFERECOVERY_LEVEL]:
    config.skillTrees?.supportSkills?.liferecovery?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_LEVEL]:
    config.skillTrees?.supportSkills?.braveaura?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_ISACTIVE]:
    config.skillTrees?.supportSkills?.braveaura?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_LEVEL]:
    config.skillTrees?.supportSkills?.highcycle?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_ISACTIVE]:
    config.skillTrees?.supportSkills?.highcycle?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_QUICKMOTION_LEVEL]:
    config.skillTrees?.supportSkills?.quickmotion?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_QUICKMOTION_ISACTIVE]:
    config.skillTrees?.supportSkills?.quickmotion?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_LEVEL]:
    config.skillTrees?.supportSkills?.manarecharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_ISACTIVE]:
    config.skillTrees?.supportSkills?.manarecharge?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MAGICBARRIER_LEVEL]:
    config.skillTrees?.supportSkills?.magicbarrier?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MAGICBARRIER_ISACTIVE]:
    config.skillTrees?.supportSkills?.magicbarrier?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_IMMUNITY_LEVEL]:
    config.skillTrees?.supportSkills?.immunity?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_IMMUNITY_ISACTIVE]:
    config.skillTrees?.supportSkills?.immunity?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FASTREACTION_LEVEL]:
    config.skillTrees?.supportSkills?.fastreaction?.level || 0,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FASTREACTION_ISACTIVE]:
    config.skillTrees?.supportSkills?.fastreaction?.isActive || false,

  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_MAGICUP_LEVEL]:
    config.skillTrees?.battleSkills?.magicup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_CONCENTRATE_LEVEL]:
    config.skillTrees?.battleSkills?.concentrate?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_ATTACKUP_LEVEL]:
    config.skillTrees?.battleSkills?.attackup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_WHACK_LEVEL]:
    config.skillTrees?.battleSkills?.whack?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEUP_LEVEL]:
    config.skillTrees?.battleSkills?.defenseup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DODGEUP_LEVEL]:
    config.skillTrees?.battleSkills?.dodgeup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DESPERATERESIST_LEVEL]:
    config.skillTrees?.battleSkills?.desperateresist?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_CRITICALUP_LEVEL]:
    config.skillTrees?.battleSkills?.criticalup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_ACCURACYUP_LEVEL]:
    config.skillTrees?.battleSkills?.accuracyup?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_INCREASEDENERGY_LEVEL]:
    config.skillTrees?.battleSkills?.increasedenergy?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_INTIMIDATINGPOWER_LEVEL]:
    config.skillTrees?.battleSkills?.intimidatingpower?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEMASTERY_LEVEL]:
    config.skillTrees?.battleSkills?.defensemastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SPELLBURST_LEVEL]:
    config.skillTrees?.battleSkills?.spellburst?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SECRETCHASEATTACK_LEVEL]:
    config.skillTrees?.battleSkills?.secretchaseattack?.level || 0,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SUPERGRIP_LEVEL]:
    config.skillTrees?.battleSkills?.supergrip?.level || 0,

  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_ISSEN_LEVEL]:
    config.skillTrees?.mononofuSkills?.issen?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_PULSEBLADE_LEVEL]:
    config.skillTrees?.mononofuSkills?.pulseblade?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TRIPLETHRUST_LEVEL]:
    config.skillTrees?.mononofuSkills?.triplethrust?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TRIPLETHRUST_ISACTIVE]:
    config.skillTrees?.mononofuSkills?.triplethrust?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_HASSOHAPPA_LEVEL]:
    config.skillTrees?.mononofuSkills?.hassohappa?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TENRYURANSEI_LEVEL]:
    config.skillTrees?.mononofuSkills?.tenryuransei?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KASUMISETSUGETSUKA_LEVEL]:
    config.skillTrees?.mononofuSkills?.kasumisetsugetsuka?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_GARYOUTENSEI_LEVEL]:
    config.skillTrees?.mononofuSkills?.garyoutensei?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHADOWLESSSLASH_LEVEL]:
    config.skillTrees?.mononofuSkills?.shadowlessslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_POMMELSTRIKE_LEVEL]:
    config.skillTrees?.mononofuSkills?.pommelstrike?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MAGADACHI_LEVEL]:
    config.skillTrees?.mononofuSkills?.magadachi?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_ZANTEISETTETSU_LEVEL]:
    config.skillTrees?.mononofuSkills?.zanteisettetsu?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BUSHIDO_LEVEL]:
    config.skillTrees?.mononofuSkills?.bushido?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHUKUCHI_LEVEL]:
    config.skillTrees?.mononofuSkills?.shukuchi?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHUKUCHI_ISACTIVE]:
    config.skillTrees?.mononofuSkills?.shukuchi?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_NUKIUCHISENNOSEN_LEVEL]:
    config.skillTrees?.mononofuSkills?.nukiuchisennosen?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TWOHANDED_LEVEL]:
    config.skillTrees?.mononofuSkills?.twohanded?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MEIKYOUSHISUI_LEVEL]:
    config.skillTrees?.mononofuSkills?.meikyoushisui?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MEIKYOUSHISUI_ISACTIVE]:
    config.skillTrees?.mononofuSkills?.meikyoushisui?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KAIRIKIRANSHIN_LEVEL]:
    config.skillTrees?.mononofuSkills?.kairikiranshin?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KAIRIKIRANSHIN_ISACTIVE]:
    config.skillTrees?.mononofuSkills?.kairikiranshin?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_DAUNTLESS_LEVEL]:
    config.skillTrees?.mononofuSkills?.dauntless?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_DAUNTLESS_STACKS]:
    config.skillTrees?.mononofuSkills?.dauntless?.stacks || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BOUNCINGBLADE_LEVEL]:
    config.skillTrees?.mononofuSkills?.bouncingblade?.level || 0,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BOUNCINGBLADE_ISACTIVE]:
    config.skillTrees?.mononofuSkills?.bouncingblade?.isActive || false,

  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDMASTERY_LEVEL]:
    config.skillTrees?.dualSwordSkills?.dualswordmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINSLASH_LEVEL]:
    config.skillTrees?.dualSwordSkills?.twinslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SPINNINGSLASH_LEVEL]:
    config.skillTrees?.dualSwordSkills?.spinningslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_PHANTOMSLASH_LEVEL]:
    config.skillTrees?.dualSwordSkills?.phantomslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_AERIALCUT_LEVEL]:
    config.skillTrees?.dualSwordSkills?.aerialcut?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRY_LEVEL]:
    config.skillTrees?.dualSwordSkills?.crossparry?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRY_ISACTIVE]:
    config.skillTrees?.dualSwordSkills?.crossparry?.isActive || false,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRYISPARRIED]:
    config.skillTrees?.dualSwordSkills?.crossparry?.isParried || false,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CHARGINGSLASH_LEVEL]:
    config.skillTrees?.dualSwordSkills?.chargingslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHADOWSTEP_LEVEL]:
    config.skillTrees?.dualSwordSkills?.shadowstep?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHADOWSTEP_ISACTIVE]:
    config.skillTrees?.dualSwordSkills?.shadowstep?.isActive || false,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHININGCROSS_LEVEL]:
    config.skillTrees?.dualSwordSkills?.shiningcross?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_LUNARMISFORTUNE_LEVEL]:
    config.skillTrees?.dualSwordSkills?.lunarmisfortune?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINBUSTERBLADE_LEVEL]:
    config.skillTrees?.dualSwordSkills?.twinbusterblade?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINBUSTERBLADE_ISACTIVE]:
    config.skillTrees?.dualSwordSkills?.twinbusterblade?.isActive || false,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_REFLEX_LEVEL]:
    config.skillTrees?.dualSwordSkills?.reflex?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_LEVEL]:
    config.skillTrees?.dualSwordSkills?.flashblast?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_ISACTIVE]:
    config.skillTrees?.dualSwordSkills?.flashblast?.isActive || false,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_STORMREAPER_LEVEL]:
    config.skillTrees?.dualSwordSkills?.stormreaper?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDCONTROL_LEVEL]:
    config.skillTrees?.dualSwordSkills?.dualswordcontrol?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_GODSPEED_LEVEL]:
    config.skillTrees?.dualSwordSkills?.godspeed?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SABERAURA_LEVEL]:
    config.skillTrees?.dualSwordSkills?.saberaura?.level || 0,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CRESCENTSABER_LEVEL]:
    config.skillTrees?.dualSwordSkills?.crescentsaber?.level || 0,

  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICWARRIORMASTERY_LEVEL]:
    config.skillTrees?.magicBladeSkills?.magicwarriormastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_LEVEL]:
    config.skillTrees?.magicBladeSkills?.conversion?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_ISACTIVE]:
    config.skillTrees?.magicBladeSkills?.conversion?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_LEVEL]:
    config.skillTrees?.magicBladeSkills?.resonance?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ISACTIVE]:
    config.skillTrees?.magicBladeSkills?.resonance?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ACTIVESET]:
    getResonanceSetIdFromResonanceSet(
      config.skillTrees?.magicBladeSkills?.resonance?.set || "ATK/MATK",
    ), // continue
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDSPELL_LEVEL]:
    config.skillTrees?.magicBladeSkills?.enchantedspell?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_LEVEL]:
    config.skillTrees?.magicBladeSkills?.dualbringer?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_ISACTIVE]:
    config.skillTrees?.magicBladeSkills?.dualbringer?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_LEVEL]:
    config.skillTrees?.magicBladeSkills?.etherflare?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_ISACTIVE]:
    config.skillTrees?.magicBladeSkills?.etherflare?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ELEMENTSLASH_LEVEL]:
    config.skillTrees?.magicBladeSkills?.elementslash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTSWORD_LEVEL]:
    config.skillTrees?.magicBladeSkills?.enchantsword?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDBURST_LEVEL]:
    config.skillTrees?.magicBladeSkills?.enchantedburst?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_UNIONSWORD_LEVEL]:
    config.skillTrees?.magicBladeSkills?.unionsword?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_LEVEL]:
    config.skillTrees?.magicBladeSkills?.siphonbarrier?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_ISACTIVE]:
    config.skillTrees?.magicBladeSkills?.siphonbarrier?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_TELEPORT_LEVEL]:
    config.skillTrees?.magicBladeSkills?.teleport?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONRECALL_LEVEL]:
    config.skillTrees?.magicBladeSkills?.siphonrecall?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_FLOATDASH_LEVEL]:
    config.skillTrees?.magicBladeSkills?.floatdash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICSKIN_LEVEL]:
    config.skillTrees?.magicBladeSkills?.magicskin?.level || 0,

  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDMASTERY_LEVEL]:
    config.skillTrees?.shieldSkills?.shieldmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDBASH_LEVEL]:
    config.skillTrees?.shieldSkills?.shieldbash?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDCANNON_LEVEL]:
    config.skillTrees?.shieldSkills?.shieldcannon?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_GUARDSTRIKE_LEVEL]:
    config.skillTrees?.shieldSkills?.guardstrike?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_FORCESHIELD_LEVEL]:
    config.skillTrees?.shieldSkills?.forceshield?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_MAGICALSHIELD_LEVEL]:
    config.skillTrees?.shieldSkills?.magicalshield?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDUPPERCUT_LEVEL]:
    config.skillTrees?.shieldSkills?.shielduppercut?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_DUALSHIELDS_LEVEL]:
    config.skillTrees?.shieldSkills?.dualshields?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDREPAIR_LEVEL]:
    config.skillTrees?.shieldSkills?.shieldrepair?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_BELAGERUNG_LEVEL]:
    config.skillTrees?.shieldSkills?.belagerung?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_PROTECTION_LEVEL]:
    config.skillTrees?.shieldSkills?.protection?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_PROTECTION_ISACTIVE]:
    config.skillTrees?.shieldSkills?.protection?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_AEGIS_LEVEL]:
    config.skillTrees?.shieldSkills?.aegis?.level || 0,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_AEGIS_ISACTIVE]:
    config.skillTrees?.shieldSkills?.aegis?.isActive || false,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_GUARDIAN_LEVEL]:
    config.skillTrees?.shieldSkills?.guardian?.level || 0,

  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_HEAVYARMORMASTERY_LEVEL]:
    config.skillTrees?.guardSkills?.heavyarmormastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDGUARD_LEVEL]:
    config.skillTrees?.guardSkills?.advancedguard?.level || 0,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_PHYSICALGUARD_LEVEL]:
    config.skillTrees?.guardSkills?.physicalguard?.level || 0,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_LIGHTARMORMASTERY_LEVEL]:
    config.skillTrees?.guardSkills?.lightarmormastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDEVASION_LEVEL]:
    config.skillTrees?.guardSkills?.advancedevasion?.level || 0,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_MIRAGEEVASION_LEVEL]:
    config.skillTrees?.guardSkills?.mirageevasion?.level || 0,

  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_FLASHSTAB_LEVEL]:
    config.skillTrees?.halberdSkills?.flashstab?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CANNONSPEAR_LEVEL]:
    config.skillTrees?.halberdSkills?.cannonspear?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRAGONTAIL_LEVEL]:
    config.skillTrees?.halberdSkills?.dragontail?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DIVEIMPACT_LEVEL]:
    config.skillTrees?.halberdSkills?.diveimpact?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRAGONTOOTH_LEVEL]:
    config.skillTrees?.halberdSkills?.dragontooth?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRACONICCHARGE_LEVEL]:
    config.skillTrees?.halberdSkills?.draconiccharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DEADLYSPEAR_LEVEL]:
    config.skillTrees?.halberdSkills?.deadlyspear?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_PUNISHRAY_LEVEL]:
    config.skillTrees?.halberdSkills?.punishray?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_STRIKESTAB_LEVEL]:
    config.skillTrees?.halberdSkills?.strikestab?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CHRONOSDIVINE_LEVEL]:
    config.skillTrees?.halberdSkills?.chronosdivine?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_INFINITEDIMENSION_LEVEL]:
    config.skillTrees?.halberdSkills?.infinitedimension?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_HALBERDMASTERY_LEVEL]:
    config.skillTrees?.halberdSkills?.halberdmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CRITICALSPEAR_LEVEL]:
    config.skillTrees?.halberdSkills?.criticalspear?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_TORNADOLANCE_LEVEL]:
    config.skillTrees?.halberdSkills?.tornadolance?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_LEVEL]:
    config.skillTrees?.halberdSkills?.quickaura?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_ISACTIVE]:
    config.skillTrees?.halberdSkills?.quickaura?.isActive || false,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_WARCRYOFSTRUGGLE_LEVEL]:
    config.skillTrees?.halberdSkills?.warcryofstruggle?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_LEVEL]:
    config.skillTrees?.halberdSkills?.godspeedwield?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_ISACTIVE]:
    config.skillTrees?.halberdSkills?.godspeedwield?.isActive || false,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_STACKS]:
    config.skillTrees?.halberdSkills?.godspeedwield?.stacks || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_ALMIGHTYWIELD_LEVEL]:
    config.skillTrees?.halberdSkills?.flashstab?.level || 0,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_BUSTERLANCE_LEVEL]:
    config.skillTrees?.halberdSkills?.busterlance?.level || 0,

  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SMASH_LEVEL]:
    config.skillTrees?.martialSkills?.smash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_BASH_LEVEL]:
    config.skillTrees?.martialSkills?.bash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SHELLBREAK_LEVEL]:
    config.skillTrees?.martialSkills?.shellbreak?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_HEAVYSMASH_LEVEL]:
    config.skillTrees?.martialSkills?.heavysmash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHARIOT_LEVEL]:
    config.skillTrees?.martialSkills?.chariot?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ABSTRACTARMS_LEVEL]:
    config.skillTrees?.martialSkills?.abstractarms?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SONICWAVE_LEVEL]:
    config.skillTrees?.martialSkills?.sonicwave?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_EARTHBIND_LEVEL]:
    config.skillTrees?.martialSkills?.earthbind?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_TRIPLEKICK_LEVEL]:
    config.skillTrees?.martialSkills?.triplekick?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_RUSH_LEVEL]:
    config.skillTrees?.martialSkills?.rush?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_RUSH_ISACTIVE]:
    config.skillTrees?.martialSkills?.rush?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ASURAAURA_LEVEL]:
    config.skillTrees?.martialSkills?.asuraaura?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ASURAAURA_ISACTIVE]:
    config.skillTrees?.martialSkills?.asuraaura?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_FLASHBLINK_LEVEL]:
    config.skillTrees?.martialSkills?.flashblink?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALMASTERY_LEVEL]:
    config.skillTrees?.martialSkills?.martialmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALDISCIPLINE_LEVEL]:
    config.skillTrees?.martialSkills?.martialdiscipline?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHAKRA_LEVEL]:
    config.skillTrees?.martialSkills?.chakra?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHAKRA_ISACTIVE]:
    config.skillTrees?.martialSkills?.chakra?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ENERGYCONTROL_LEVEL]:
    config.skillTrees?.martialSkills?.smash?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ENERGYCONTROL_ISACTIVE]:
    config.skillTrees?.martialSkills?.energycontrol?.isActive || false,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_AGGRAVATE_LEVEL]:
    config.skillTrees?.martialSkills?.aggravate?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_STRONGCHASEATTACK_LEVEL]:
    config.skillTrees?.martialSkills?.strongchaseattack?.level || 0,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SLIDE_LEVEL]:
    config.skillTrees?.martialSkills?.slide?.level || 0,

  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_UNARMEDMASTERY_LEVEL]:
    config.skillTrees?.bareHandSkills?.unarmedmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_QICHARGE_LEVEL]:
    config.skillTrees?.bareHandSkills?.qicharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_LIONRAGE_LEVEL]:
    config.skillTrees?.bareHandSkills?.lionrage?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMALIONRAGE_LEVEL]:
    config.skillTrees?.bareHandSkills?.ultimalionrage?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_RAVINGSTORM_LEVEL]:
    config.skillTrees?.bareHandSkills?.ravingstorm?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMARAVINGSTORM_LEVEL]:
    config.skillTrees?.bareHandSkills?.ultimaravingstorm?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_INTERNALELIXIR_LEVEL]:
    config.skillTrees?.bareHandSkills?.internalelixir?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_CLASHOFENMITY_LEVEL]:
    config.skillTrees?.bareHandSkills?.clashofenmity?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_MIRACLECOMEBACK_LEVEL]:
    config.skillTrees?.bareHandSkills?.miraclecomeback?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMAQICHARGE_LEVEL]:
    config.skillTrees?.bareHandSkills?.ultimaqicharge?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_HIDDENTALENT_LEVEL]:
    config.skillTrees?.bareHandSkills?.hiddentalent?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_EARTHSHAKER_LEVEL]:
    config.skillTrees?.bareHandSkills?.earthshaker?.level || 0,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_EARTHSHAKER_ISACTIVE]:
    config.skillTrees?.bareHandSkills?.earthshaker?.isActive || false,

  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_KICK_LEVEL]:
    config.skillTrees?.hunterSkills?.kick?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SUNRISEARROW_LEVEL]:
    config.skillTrees?.hunterSkills?.sunrisearrow?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MAGICARROW_LEVEL]:
    config.skillTrees?.hunterSkills?.magicarrow?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MAGICARROW_ISACTIVE]:
    config.skillTrees?.hunterSkills?.magicarrow?.isActive || false,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SATELLITEARROW_LEVEL]:
    config.skillTrees?.hunterSkills?.satellitearrow?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SLEEPTRAP_LEVEL]:
    config.skillTrees?.hunterSkills?.sleeptrap?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_BEARTRAP_LEVEL]:
    config.skillTrees?.hunterSkills?.beartrap?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_LANDMINE_LEVEL]:
    config.skillTrees?.hunterSkills?.landmine?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DARKTRAP_LEVEL]:
    config.skillTrees?.hunterSkills?.darktrap?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_HOMINGSHOT_LEVEL]:
    config.skillTrees?.hunterSkills?.homingshot?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DETECTION_LEVEL]:
    config.skillTrees?.hunterSkills?.detection?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DETECTION_ISACTIVE]:
    config.skillTrees?.hunterSkills?.detection?.isActive || false,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_CYCLONEARROW_LEVEL]:
    config.skillTrees?.hunterSkills?.cyclonearrow?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_VERTICALAIR_LEVEL]:
    config.skillTrees?.hunterSkills?.verticalair?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_HUNTERBOWGUN_LEVEL]:
    config.skillTrees?.hunterSkills?.hunterbowgun?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MULTIPLEHUNT_LEVEL]:
    config.skillTrees?.hunterSkills?.multiplehunt?.level || 0,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MULTIPLEHUNT_ISACTIVE]:
    config.skillTrees?.hunterSkills?.multiplehunt?.isActive || false,

  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSU_LEVEL]:
    config.skillTrees?.ninjaSkills?.ninjutsu?.level || 0,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJASPIRIT_LEVEL]:
    config.skillTrees?.ninjaSkills?.ninjaspirit?.level || 0,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSUDRILLI_LEVEL]:
    config.skillTrees?.ninjaSkills?.ninjutsudrilli?.level || 0,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSUDRILLII_LEVEL]:
    config.skillTrees?.ninjaSkills?.ninjutsudrillii?.level || 0,

  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_LEVEL]:
    config.skillTrees?.wizardSkills?.familia?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_ISACTIVE]:
    config.skillTrees?.wizardSkills?.familia?.isActive || false,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_LIGHTNING_LEVEL]:
    config.skillTrees?.wizardSkills?.lightning?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_BLIZZARD_LEVEL]:
    config.skillTrees?.wizardSkills?.blizzard?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_METEORSTRIKE_LEVEL]:
    config.skillTrees?.wizardSkills?.meteorstrike?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_IMPERIALRAY_LEVEL]:
    config.skillTrees?.wizardSkills?.imperialray?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_MANACRYSTAL_LEVEL]:
    config.skillTrees?.wizardSkills?.manacrystal?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_STONEBARRIER_LEVEL]:
    config.skillTrees?.wizardSkills?.stonebarrier?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_ADVANCEDFAMILIA_LEVEL]:
    config.skillTrees?.wizardSkills?.advancedfamilia?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_ADVANCEDFAMILIA_ISACTIVE]:
    config.skillTrees?.wizardSkills?.advancedfamilia?.isActive || false,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CASTMASTERY_LEVEL]:
    config.skillTrees?.wizardSkills?.castmastery?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CRYSTALLASER_LEVEL]:
    config.skillTrees?.wizardSkills?.crystallaser?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_LEVEL]:
    config.skillTrees?.wizardSkills?.overlimit?.level || 0,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_ISACTIVE]:
    config.skillTrees?.wizardSkills?.overlimit?.isActive || false,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_SORCERYGUIDE_LEVEL]:
    config.skillTrees?.wizardSkills?.sorceryguide?.level || 0,

  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_BLESS_LEVEL]:
    config.skillTrees?.priestSkills?.bless?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_GLORIA_LEVEL]:
    config.skillTrees?.priestSkills?.gloria?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ENHANCEDBLESS_LEVEL]:
    config.skillTrees?.priestSkills?.enhancedbless?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ROYALHEAL_LEVEL]:
    config.skillTrees?.priestSkills?.royalheal?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYFIST_LEVEL]:
    config.skillTrees?.priestSkills?.holyfist?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYLIGHT_LEVEL]:
    config.skillTrees?.priestSkills?.holylight?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ETHERBARRIER_LEVEL]:
    config.skillTrees?.priestSkills?.etherbarrier?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ETHERBARRIER_ISACTIVE]:
    config.skillTrees?.priestSkills?.etherbarrier?.isActive || false,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_LEVEL]:
    config.skillTrees?.priestSkills?.prayer?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_ISACTIVE]:
    config.skillTrees?.priestSkills?.prayer?.isActive || false,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_STAFFTHRUST_LEVEL]:
    config.skillTrees?.priestSkills?.staffthrust?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_EXORCISM_LEVEL]:
    config.skillTrees?.priestSkills?.exorcism?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYBOOK_LEVEL]:
    config.skillTrees?.priestSkills?.holybook?.level || 0,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYBOOK_ISACTIVE]:
    config.skillTrees?.priestSkills?.holybook?.isActive || false,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_NEMESIS_LEVEL]:
    config.skillTrees?.priestSkills?.nemesis?.level || 0,

  [ParamId.CHARACTER_CONSUMABLES]: config.consumables || [], // statmap for now
  [ParamId.CHARACTER_FOODBUFFS]: config.foodBuffs || [], // statmap for now

  [ParamId.CHARACTER_AILMENTS_WEAKEN_ISACTIVE]:
    config.ailments?.weaken || false,
  [ParamId.CHARACTER_AILMENTS_FLINCH_ISACTIVE]:
    config.ailments?.flinch || false,
  [ParamId.CHARACTER_AILMENTS_TUMBLE_ISACTIVE]:
    config.ailments?.tumble || false,
  [ParamId.CHARACTER_AILMENTS_STUN_ISACTIVE]:
    config.ailments?.stun || false,
  [ParamId.CHARACTER_AILMENTS_KNOCKBACK_ISACTIVE]:
    config.ailments?.knockback || false,
  [ParamId.CHARACTER_AILMENTS_POISON_ISACTIVE]:
    config.ailments?.poison || false,
  [ParamId.CHARACTER_AILMENTS_PARALYSIS_ISACTIVE]:
    config.ailments?.paralysis || false,
  [ParamId.CHARACTER_AILMENTS_BLINDNESS_ISACTIVE]:
    config.ailments?.blindness || false,
  [ParamId.CHARACTER_AILMENTS_IGNITION_ISACTIVE]:
    config.ailments?.ignition || false,
  [ParamId.CHARACTER_AILMENTS_FREEZE_ISACTIVE]:
    config.ailments?.freeze || false,
  [ParamId.CHARACTER_AILMENTS_ARMORBREAK_ISACTIVE]:
    config.ailments?.armorbreak || false,
  [ParamId.CHARACTER_AILMENTS_SLOW_ISACTIVE]:
    config.ailments?.slow || false,
  [ParamId.CHARACTER_AILMENTS_STOP_ISACTIVE]:
    config.ailments?.stop || false,
  [ParamId.CHARACTER_AILMENTS_FEAR_ISACTIVE]:
    config.ailments?.fear || false,
  [ParamId.CHARACTER_AILMENTS_DIZZY_ISACTIVE]:
    config.ailments?.weaken || false,
  [ParamId.CHARACTER_AILMENTS_LETHARGY_ISACTIVE]:
    config.ailments?.lethargy || false,
  [ParamId.CHARACTER_AILMENTS_SILENCE_ISACTIVE]:
    config.ailments?.silence || false,
  [ParamId.CHARACTER_AILMENTS_BLEED_ISACTIVE]:
    config.ailments?.bleed || false,
  [ParamId.CHARACTER_AILMENTS_FATIGUE_ISACTIVE]:
    config.ailments?.fatigue || false,
  [ParamId.CHARACTER_AILMENTS_DAZZLED_ISACTIVE]:
    config.ailments?.dazzled || false,

  [ParamId.CHARACTER_REGISLETS_ZEROSTANCE_LEVEL]:
    config.regislets?.zerostance || 0,
  [ParamId.CHARACTER_REGISLETS_MAXHPBOOST_LEVEL]:
    config.regislets?.maxhpboost || 0,
  [ParamId.CHARACTER_REGISLETS_MAXMPBOOST_LEVEL]:
    config.regislets?.maxmpboost || 0,
  [ParamId.CHARACTER_REGISLETS_MAGICATTACKBOOST_LEVEL]:
    config.regislets?.magicattackboost || 0,
  [ParamId.CHARACTER_REGISLETS_PHYSICALATTACKBOOST_LEVEL]:
    config.regislets?.physicalattackboost || 0,
  [ParamId.CHARACTER_REGISLETS_MAGICDEFENSEBOOST_LEVEL]:
    config.regislets?.magicdefenseboost || 0,
  [ParamId.CHARACTER_REGISLETS_PHYSICALDEFENSEBOOST_LEVEL]:
    config.regislets?.physicaldefenseboost || 0,
  [ParamId.CHARACTER_REGISLETS_ATTACKSPEEDBOOST_LEVEL]:
    config.regislets?.attackspeedboost || 0,
  [ParamId.CHARACTER_REGISLETS_MAGICSPEEDBOOST_LEVEL]:
    config.regislets?.magicspeedboost || 0,
  [ParamId.CHARACTER_REGISLETS_DODGEBOOST_LEVEL]:
    config.regislets?.dodgeboost || 0,
  [ParamId.CHARACTER_REGISLETS_ACCURACYBOOST_LEVEL]:
    config.regislets?.accuracyboost || 0,
  [ParamId.CHARACTER_REGISLETS_FOCUSRESONANCE_LEVEL]:
    config.regislets?.focusresonance || 0,
  [ParamId.CHARACTER_REGISLETS_SPEEDRESONANCE_LEVEL]:
    config.regislets?.speedresonance || 0,
  [ParamId.CHARACTER_REGISLETS_POWERRESONANCE_LEVEL]:
    config.regislets?.powerresonance || 0,
});

const calculateAll = (config: IntermediateConfig) => ({
  // AGI
  totalBaseAGI: config[ParamId.CHARACTER_BASE_AGI],
  totalPercentAGI: totalPercentAGI(config),
  totalFlatAGI: totalFlatAGI(config),
  totalAGI: totalAGI(config),

  // DEX
  totalBaseDEX: config[ParamId.CHARACTER_BASE_DEX],
  totalPercentDEX: totalPercentDEX(config),
  totalFlatDEX: totalFlatDEX(config),
  totalDEX: totalDEX(config),

  // STR
  totalBaseSTR: config[ParamId.CHARACTER_BASE_STR],
  totalPercentSTR: totalPercentSTR(config),
  totalFlatSTR: totalFlatSTR(config),
  totalSTR: totalSTR(config),

  // INT
  totalBaseINT: config[ParamId.CHARACTER_BASE_INT],
  totalPercentINT: totalPercentINT(config),
  totalFlatINT: totalFlatINT(config),
  totalINT: totalINT(config),

  // VIT
  totalBaseVIT: config[ParamId.CHARACTER_BASE_VIT],
  totalPercentVIT: totalPercentVIT(config),
  totalFlatVIT: totalFlatVIT(config),
  totalVIT: totalVIT(config),

  // Accuracy
  totalBaseAccuracy: totalBaseAccuracy(config),
  totalFlatAccuracy: totalFlatAccuracy(config),
  totalAccuracy: totalAccuracy(config),

  // Ailment Resistance
  totalAilmentResistance: totalAilmentResistance(config),

  // ASPD
  totalBaseASPD: totalBaseASPD(config),
  totalPercentASPD: totalPercentASPD(config),
  totalFlatASPD: totalFlatASPD(config),
  totalASPD: totalASPD(config),
  totalMotionSpeed: totalMotionSpeed(config),

  // CSPD
  totalBaseCSPD: totalBaseCSPD(config),
  totalPercentCSPD: totalPercentCSPD(config),
  totalFlatCSPD: totalFlatCSPD(config),
  totalCSPD: totalCSPD(config),
  totalCastTimeReduction: totalCastTimeReduction(config),
});

export const calculate = (config: Config) =>
  calculateAll(createIntermediateConfig(config));
