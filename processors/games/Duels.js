/*
* Duels
 */
module.exports = ({
  active_auras = null,
  active_cage = null,
  active_cosmetictitle = null,
  active_emblem = null,
  active_killmessages = null,
  active_projectile_trail = null,
  active_victory_dance = null,
  active_weaponpacks = null,
  all_modes_gold_title_prestige = null,
  all_modes_iron_title_prestige = null,
  amount_healed_standard = 0,
  amount_healed = 0,
  arcanist_kit_wins = 0,
  armorer_kit_wins = 0,
  arrows_from_rend_standard = 0,
  arrows_from_rend = 0,
  assassin_kit_wins = 0,
  assassin_master_alechmy_hearts_standard = 0,
  assassin_master_alechmy_hearts = 0,
  assassin_strikes_from_cloak_standard = 0,
  assassin_strikes_from_cloak = 0,
  astronaut_kit_wins = 0,
  best_blitz_winstreak = 0,
  best_bridge_winstreak = 0,
  best_classic_winstreak = 0,
  best_mega_walls_winstreak = 0,
  best_op_winstreak = 0,
  best_overall_winstreak = 0,
  best_skywars_winstreak = 0,
  best_sumo_winstreak = 0,
  best_uhc_winstreak = 0,
  best_winstreak_mode_blitz_duel = 0,
  best_winstreak_mode_bridge_doubles = 0,
  best_winstreak_mode_bridge_duel = 0,
  best_winstreak_mode_bridge_four = 0,
  best_winstreak_mode_classic_duel = 0,
  best_winstreak_mode_mw_duel = 0,
  best_winstreak_mode_op_duel = 0,
  best_winstreak_mode_ranked_1 = 0,
  best_winstreak_mode_sumo_duel = 0,
  best_winstreak_mode_sw_doubles = 0,
  best_winstreak_mode_sw_duel = 0,
  best_winstreak_mode_uhc_doubles = 0,
  best_winstreak_mode_uhc_duel = 0,
  best_winstreak_mode_uhc_four = 0,
  best_winstreak_mode_uhc_meetup = 0,
  blaze_amount_healed_standard = 0,
  blaze_amount_healed = 0,
  blaze_g_amount_healed_standard = 0,
  blaze_g_amount_healed = 0,
  blitz_duel_armorer_kit_wins = 0,
  blitz_duel_astronaut_kit_wins = 0,
  blitz_duel_blocks_placed = 0,
  blitz_duel_bow_hits = 0,
  blitz_duel_bow_shots = 0,
  blitz_duel_creepertamer_kit_wins = 0,
  blitz_duel_damage_dealt = 0,
  blitz_duel_deaths = 0,
  blitz_duel_donkeytamer_kit_wins = 0,
  blitz_duel_farmer_kit_wins = 0,
  blitz_duel_golem_kit_wins = 0,
  blitz_duel_health_regenerated = 0,
  blitz_duel_horsetamer_kit_wins = 0,
  blitz_duel_hunter_kit_wins = 0,
  'blitz_duel_hype train_kit_wins': blitz_duel_hype_train_kit_wins = 0,
  blitz_duel_kills = 0,
  blitz_duel_kit_wins = 0,
  blitz_duel_layout_paladin_5 = 0,
  blitz_duel_losses = 0,
  blitz_duel_melee_hits = 0,
  blitz_duel_melee_swings = 0,
  blitz_duel_paladin_kit_wins = 0,
  blitz_duel_ranger_kit_wins = 0,
  blitz_duel_rounds_played = 0,
  blitz_duel_scout_kit_wins = 0,
  'blitz_duel_shadow knight_kit_wins': blitz_duel_shadow_knight_kit_wins = 0,
  blitz_duel_snowman_kit_wins = 0,
  blitz_duel_speleologist_kit_wins = 0,
  blitz_duel_toxicologist_kit_wins = 0,
  blitz_duel_warrior_kit_wins = 0,
  blitz_duel_wins = 0,
  blitz_duel_wolftamer_kit_wins = 0,
  blitz_duels_kit = 0,
  blitz_iron_title_prestige = 0,
  blitz_rookie_title_prestige = 0,
  blizzard_seconds_slow_standard = 0,
  blizzard_seconds_slow = 0,
  blocks_broken_standard = 0,
  blocks_broken = 0,
  blocks_placed = 0,
  bow_duel_bow_hits = 0,
  bow_duel_bow_shots = 0,
  bow_duel_damage_dealt = 0,
  bow_duel_health_regenerated = 0,
  bow_duel_rounds_played = 0,
  bow_hits = 0,
  bow_rookie_title_prestige = 0,
  bow_shots = 0,
  bowspleef_duel_bow_shots = 0,
  bowspleef_duel_rounds_played = 0,
  bridge_deaths = 0,
  bridge_doubles_blocks_placed = 0,
  bridge_doubles_bow_hits = 0,
  bridge_doubles_bow_shots = 0,
  bridge_doubles_bridge_deaths = 0,
  bridge_doubles_bridge_kills = 0,
  bridge_doubles_damage_dealt = 0,
  bridge_doubles_goals = 0,
  bridge_doubles_health_regenerated = 0,
  bridge_doubles_melee_hits = 0,
  bridge_doubles_melee_swings = 0,
  bridge_doubles_rounds_played = 0,
  bridge_doubles_wins = 0,
  bridge_duel_blocks_placed = 0,
  bridge_duel_bow_hits = 0,
  bridge_duel_bow_shots = 0,
  bridge_duel_bridge_deaths = 0,
  bridge_duel_bridge_kills = 0,
  bridge_duel_damage_dealt = 0,
  bridge_duel_deaths = 0,
  bridge_duel_goals = 0,
  bridge_duel_health_regenerated = 0,
  bridge_duel_kills = 0,
  bridge_duel_losses = 0,
  bridge_duel_melee_hits = 0,
  bridge_duel_melee_swings = 0,
  bridge_duel_rounds_played = 0,
  bridge_duel_wins = 0,
  bridge_four_blocks_placed = 0,
  bridge_four_bow_hits = 0,
  bridge_four_bow_shots = 0,
  bridge_four_damage_dealt = 0,
  bridge_four_deaths = 0,
  bridge_four_goals = 0,
  bridge_four_health_regenerated = 0,
  bridge_four_kills = 0,
  bridge_four_melee_hits = 0,
  bridge_four_melee_swings = 0,
  bridge_four_rounds_played = 0,
  bridge_four_wins = 0,
  bridge_kills = 0,
  bridge_rookie_title_prestige = 0,
  bridgemapwins = 0,
  bucket_barriers_broken_standard = 0,
  bucket_barriers_broken = 0,
  chat_enabled = 0,
  classic_duel_bow_hits = 0,
  classic_duel_bow_shots = 0,
  classic_duel_damage_dealt = 0,
  classic_duel_deaths = 0,
  classic_duel_health_regenerated = 0,
  classic_duel_kills = 0,
  classic_duel_losses = 0,
  classic_duel_melee_hits = 0,
  classic_duel_melee_swings = 0,
  classic_duel_rounds_played = 0,
  classic_duel_wins = 0,
  classic_rookie_title_prestige = 0,
  coins = 0,
  combo_duel_damage_dealt = 0,
  combo_duel_deaths = 0,
  combo_duel_golden_apples_eaten = 0,
  combo_duel_health_regenerated = 0,
  combo_duel_losses = 0,
  combo_duel_melee_hits = 0,
  combo_duel_melee_swings = 0,
  combo_duel_rounds_played = 0,
  combo_rookie_title_prestige = 0,
  cow_bucket_barriers_broken_standard = 0,
  cow_bucket_barriers_broken = 0,
  creepertamer_kit_wins = 0,
  current_blitz_winstreak = 0,
  current_bridge_winstreak = 0,
  current_classic_winstreak = 0,
  current_mega_walls_winstreak = 0,
  current_op_winstreak = 0,
  current_skywars_winstreak = 0,
  current_sumo_winstreak = 0,
  current_uhc_winstreak = 0,
  current_winstreak_mode_blitz_duel = 0,
  current_winstreak_mode_bridge_doubles = 0,
  current_winstreak_mode_bridge_duel = 0,
  current_winstreak_mode_bridge_four = 0,
  current_winstreak_mode_classic_duel = 0,
  current_winstreak_mode_mw_duel = 0,
  current_winstreak_mode_op_duel = 0,
  current_winstreak_mode_ranked_1 = 0,
  current_winstreak_mode_sumo_duel = 0,
  current_winstreak_mode_sw_doubles = 0,
  current_winstreak_mode_sw_duel = 0,
  current_winstreak_mode_uhc_doubles = 0,
  current_winstreak_mode_uhc_duel = 0,
  current_winstreak_mode_uhc_four = 0,
  current_winstreak_mode_uhc_meetup = 0,
  current_winstreak = 0,
  damage_dealt = 0,
  deaths = 0,
  donkeytamer_kit_wins = 0,
  dreadlord_kit_wins = 0,
  duels_chest_history = 0,
  duels_chests = 0,
  duels_new_ranked__8_2019_overallbeststars = 0,
  duels_new_ranked__8_2019_ranked_1_bestelo = 0,
  duels_new_ranked__8_2019_ranked_1_beststars = 0,
  duels_new_ranked__8_2019_ranked_1_maxstars = 0,
  duels_openedchests = 0,
  duels_openedcommons = 0,
  duels_openedepics = 0,
  duels_openedlegendaries = 0,
  duels_openedrares = 0,
  duels_recently_played2 = 0,
  duels_recently_played = 0,
  duels_winstreak_best_blitz_duel = 0,
  duels_winstreak_best_classic_duel = 0,
  duels_winstreak_best_combo_duel = 0,
  duels_winstreak_best_mw_duel = 0,
  duels_winstreak_best_op_duel = 0,
  duels_winstreak_best_potion_duel = 0,
  duels_winstreak_best_sumo_duel = 0,
  duels_winstreak_best_sw_doubles = 0,
  duels_winstreak_best_sw_duel = 0,
  duels_winstreak_best_uhc_doubles = 0,
  duels_winstreak_best_uhc_duel = 0,
  duels_winstreak_best_uhc_four = 0,
  duels_winstreak_classic_duel = 0,
  duels_winstreak_combo_duel = 0,
  duels_winstreak_potion_duel = 0,
  enderman_a_meters_travelled_standard = 0,
  enderman_a_meters_travelled = 0,
  enderman_meters_travelled_standard = 0,
  enderman_meters_travelled = 0,
  energy_from_grappling_hook_standard = 0,
  energy_from_grappling_hook = 0,
  farmer_kit_wins = 0,
  frog_kit_wins = 0,
  games_played_duels = 0,
  goals = 0,
  golden_apples_eaten = 0,
  golem_kit_wins = 0,
  heal_pots_used = 0,
  health_regenerated = 0,
  herobrine_kit_wins = 0,
  horsetamer_kit_wins = 0,
  hound_kit_wins = 0,
  hunter_kit_wins = 0,
  'hype train_kit_wins': hype_train_kit_wins = 0,
  kills = 0,
  kit_menu_option = 0,
  kit_wins = 0,
  layout_bridge_duel_layout = 0,
  layout_combo_duel_layout = 0,
  layout_uhc_duel_layout = 0,
  leaderboardpage_win_streak = 0,
  leaderboardpage_wins = 0,
  losses = 0,
  maps_won_on = 0,
  master_alechmy_hearts_standard = 0,
  master_alechmy_hearts = 0,
  mega_walls_rookie_title_prestige = 0,
  melee_hits = 0,
  melee_swings = 0,
  meters_travelled_standard = 0,
  meters_travelled = 0,
  moleman_a_blocks_broken_standard = 0,
  moleman_a_blocks_broken = 0,
  moleman_blocks_broken_standard = 0,
  moleman_blocks_broken = 0,
  mw_duel_arcanist_kit_wins = 0,
  mw_duel_assassin_kit_wins = 0,
  mw_duel_blocks_placed = 0,
  mw_duel_bow_hits = 0,
  mw_duel_bow_shots = 0,
  mw_duel_damage_dealt = 0,
  mw_duel_deaths = 0,
  mw_duel_dreadlord_kit_wins = 0,
  mw_duel_golem_kit_wins = 0,
  mw_duel_health_regenerated = 0,
  mw_duel_herobrine_kit_wins = 0,
  mw_duel_kills = 0,
  mw_duel_kit_wins = 0,
  mw_duel_losses = 0,
  mw_duel_melee_hits = 0,
  mw_duel_melee_swings = 0,
  mw_duel_rounds_played = 0,
  mw_duel_shaman_kit_wins = 0,
  mw_duel_spider_kit_wins = 0,
  mw_duel_werewolf_kit_wins = 0,
  mw_duel_wins = 0,
  mw_duels_class = 0,
  no_debuff_rookie_title_prestige = 0,
  op_duel_bow_hits = 0,
  op_duel_bow_shots = 0,
  op_duel_damage_dealt = 0,
  op_duel_deaths = 0,
  op_duel_health_regenerated = 0,
  op_duel_kills = 0,
  op_duel_losses = 0,
  op_duel_melee_hits = 0,
  op_duel_melee_swings = 0,
  op_duel_rounds_played = 0,
  op_duel_wins = 0,
  op_rookie_title_prestige = 0,
  packages = [],
  paladin_kit_wins = 0,
  potion_duel_damage_dealt = 0,
  potion_duel_deaths = 0,
  potion_duel_heal_pots_used = 0,
  potion_duel_health_regenerated = 0,
  potion_duel_kills = 0,
  potion_duel_losses = 0,
  potion_duel_melee_hits = 0,
  potion_duel_melee_swings = 0,
  potion_duel_rounds_played = 0,
  potion_duel_wins = 0,
  pyromancer_kit_wins = 0,
  ranger_kit_wins = 0,
  ranked_1_blocks_placed = 0,
  ranked_1_bow_hits = 0,
  ranked_1_bow_shots = 0,
  ranked_1_damage_dealt = 0,
  ranked_1_deaths = 0,
  ranked_1_health_regenerated = 0,
  ranked_1_kills = 0,
  ranked_1_kit_wins = 0,
  ranked_1_losses = 0,
  ranked_1_melee_hits = 0,
  ranked_1_melee_swings = 0,
  ranked_1_ranger_kit_wins = 0,
  ranked_1_rounds_played = 0,
  'ranked_1_shadow knight_kit_wins': ranked_1_shadow_knight_kit_wins = 0,
  ranked_1_wins = 0,
  ranked_loss_streak_ranked_1 = 0,
  ranked_streak_ranked_1 = 0,
  rematch_option_1 = 0,
  renegade_arrows_from_rend_standard = 0,
  renegade_arrows_from_rend = 0,
  renegade_energy_from_grappling_hook_standard = 0,
  renegade_energy_from_grappling_hook = 0,
  rounds_played = 0,
  scout_kit_wins = 0,
  selected_1_new = 0,
  selected_1 = 0,
  selected_2_new = 0,
  selected_2 = 0,
  'shadow knight_kit_wins': shadow_knight_kit_wins = 0,
  shaman_kit_wins = 0,
  show_lb_option = 0,
  skywars_rookie_title_prestige = 0,
  snowman_blizzard_seconds_slow_standard = 0,
  snowman_blizzard_seconds_slow = 0,
  snowman_kit_wins = 0,
  speleologist_kit_wins = 0,
  spider_kit_wins = 0,
  status_field = 0,
  strikes_from_cloak_standard = 0,
  strikes_from_cloak = 0,
  sumo_duel_deaths = 0,
  sumo_duel_kills = 0,
  sumo_duel_losses = 0,
  sumo_duel_melee_hits = 0,
  sumo_duel_melee_swings = 0,
  sumo_duel_rounds_played = 0,
  sumo_duel_wins = 0,
  sumo_rookie_title_prestige = 0,
  sw_doubles_blocks_placed = 0,
  sw_doubles_bow_hits = 0,
  sw_doubles_bow_shots = 0,
  sw_doubles_damage_dealt = 0,
  sw_doubles_deaths = 0,
  sw_doubles_frog_kit_wins = 0,
  sw_doubles_health_regenerated = 0,
  sw_doubles_kills = 0,
  sw_doubles_kit_wins = 0,
  sw_doubles_losses = 0,
  sw_doubles_melee_hits = 0,
  sw_doubles_melee_swings = 0,
  sw_doubles_rounds_played = 0,
  sw_doubles_scout_kit_wins = 0,
  sw_doubles_wins = 0,
  sw_duel_armorer_kit_wins = 0,
  sw_duel_blocks_placed = 0,
  sw_duel_bow_hits = 0,
  sw_duel_damage_dealt = 0,
  sw_duel_deaths = 0,
  sw_duel_health_regenerated = 0,
  sw_duel_hound_kit_wins = 0,
  sw_duel_kills = 0,
  sw_duel_kit_wins = 0,
  sw_duel_losses = 0,
  sw_duel_melee_hits = 0,
  sw_duel_melee_swings = 0,
  sw_duel_pyromancer_kit_wins = 0,
  sw_duel_rounds_played = 0,
  sw_duel_scout_kit_wins = 0,
  sw_duel_wins = 0,
  sw_duels_kit_new2 = 0,
  sw_duels_kit_new3 = 0,
  sw_duels_kit_new = 0,
  sw_duels_kit = 0,
  sw_tournament_bow_hits = 0,
  sw_tournament_damage_dealt = 0,
  sw_tournament_deaths = 0,
  sw_tournament_health_regenerated = 0,
  sw_tournament_kills = 0,
  sw_tournament_losses = 0,
  sw_tournament_melee_hits = 0,
  sw_tournament_melee_swings = 0,
  sw_tournament_rounds_played = 0,
  tnt_games_rookie_title_prestige = 0,
  tournament_rookie_title_prestige = 0,
  toxicologist_kit_wins = 0,
  uhc_doubles_blocks_placed = 0,
  uhc_doubles_bow_hits = 0,
  uhc_doubles_bow_shots = 0,
  uhc_doubles_damage_dealt = 0,
  uhc_doubles_deaths = 0,
  uhc_doubles_golden_apples_eaten = 0,
  uhc_doubles_health_regenerated = 0,
  uhc_doubles_kills = 0,
  uhc_doubles_losses = 0,
  uhc_doubles_melee_hits = 0,
  uhc_doubles_melee_swings = 0,
  uhc_doubles_rounds_played = 0,
  uhc_doubles_wins = 0,
  uhc_duel_blocks_placed = 0,
  uhc_duel_bow_hits = 0,
  uhc_duel_bow_shots = 0,
  uhc_duel_damage_dealt = 0,
  uhc_duel_deaths = 0,
  uhc_duel_golden_apples_eaten = 0,
  uhc_duel_health_regenerated = 0,
  uhc_duel_kills = 0,
  uhc_duel_losses = 0,
  uhc_duel_melee_hits = 0,
  uhc_duel_melee_swings = 0,
  uhc_duel_rounds_played = 0,
  uhc_duel_wins = 0,
  uhc_four_blocks_placed = 0,
  uhc_four_bow_hits = 0,
  uhc_four_bow_shots = 0,
  uhc_four_damage_dealt = 0,
  uhc_four_deaths = 0,
  uhc_four_golden_apples_eaten = 0,
  uhc_four_health_regenerated = 0,
  uhc_four_kills = 0,
  uhc_four_losses = 0,
  uhc_four_melee_hits = 0,
  uhc_four_melee_swings = 0,
  uhc_four_rounds_played = 0,
  uhc_four_wins = 0,
  uhc_gold_title_prestige = 0,
  uhc_iron_title_prestige = 0,
  uhc_meetup_blocks_placed = 0,
  uhc_meetup_bow_hits = 0,
  uhc_meetup_bow_shots = 0,
  uhc_meetup_damage_dealt = 0,
  uhc_meetup_deaths = 0,
  uhc_meetup_health_regenerated = 0,
  uhc_meetup_kills = 0,
  uhc_meetup_losses = 0,
  uhc_meetup_melee_hits = 0,
  uhc_meetup_melee_swings = 0,
  uhc_meetup_rounds_played = 0,
  uhc_meetup_wins = 0,
  uhc_rookie_title_prestige = 0,
  uhc_tournament_bow_hits = 0,
  uhc_tournament_bow_shots = 0,
  uhc_tournament_damage_dealt = 0,
  uhc_tournament_deaths = 0,
  uhc_tournament_golden_apples_eaten = 0,
  uhc_tournament_health_regenerated = 0,
  uhc_tournament_kills = 0,
  uhc_tournament_losses = 0,
  uhc_tournament_melee_hits = 0,
  uhc_tournament_melee_swings = 0,
  uhc_tournament_rounds_played = 0,
  warrior_kit_wins = 0,
  werewolf_kit_wins = 0,
  wins = 0,
  wolftamer_kit_wins = 0,
}) => ({
  packages,
  active_auras,
  active_cage,
  active_cosmetictitle,
  active_emblem,
  active_killmessages,
  active_projectile_trail,
  active_victory_dance,
  active_weaponpacks,
  all_modes_gold_title_prestige,
  all_modes_iron_title_prestige,
  amount_healed_standard,
  amount_healed,
  arcanist_kit_wins,
  armorer_kit_wins,
  arrows_from_rend_standard,
  arrows_from_rend,
  assassin_kit_wins,
  assassin_master_alechmy_hearts_standard,
  assassin_master_alechmy_hearts,
  assassin_strikes_from_cloak_standard,
  assassin_strikes_from_cloak,
  astronaut_kit_wins,
  best_blitz_winstreak,
  best_bridge_winstreak,
  best_classic_winstreak,
  best_mega_walls_winstreak,
  best_op_winstreak,
  best_overall_winstreak,
  best_skywars_winstreak,
  best_sumo_winstreak,
  best_uhc_winstreak,
  best_winstreak_mode_blitz_duel,
  best_winstreak_mode_bridge_doubles,
  best_winstreak_mode_bridge_duel,
  best_winstreak_mode_bridge_four,
  best_winstreak_mode_classic_duel,
  best_winstreak_mode_mw_duel,
  best_winstreak_mode_op_duel,
  best_winstreak_mode_ranked_1,
  best_winstreak_mode_sumo_duel,
  best_winstreak_mode_sw_doubles,
  best_winstreak_mode_sw_duel,
  best_winstreak_mode_uhc_doubles,
  best_winstreak_mode_uhc_duel,
  best_winstreak_mode_uhc_four,
  best_winstreak_mode_uhc_meetup,
  blaze_amount_healed_standard,
  blaze_amount_healed,
  blaze_g_amount_healed_standard,
  blaze_g_amount_healed,
  blitz_duel_armorer_kit_wins,
  blitz_duel_astronaut_kit_wins,
  blitz_duel_blocks_placed,
  blitz_duel_bow_hits,
  blitz_duel_bow_shots,
  blitz_duel_creepertamer_kit_wins,
  blitz_duel_damage_dealt,
  blitz_duel_deaths,
  blitz_duel_donkeytamer_kit_wins,
  blitz_duel_farmer_kit_wins,
  blitz_duel_golem_kit_wins,
  blitz_duel_health_regenerated,
  blitz_duel_horsetamer_kit_wins,
  blitz_duel_hunter_kit_wins,
  blitz_duel_hype_train_kit_wins,
  blitz_duel_kills,
  blitz_duel_kit_wins,
  blitz_duel_layout_paladin_5,
  blitz_duel_losses,
  blitz_duel_melee_hits,
  blitz_duel_melee_swings,
  blitz_duel_paladin_kit_wins,
  blitz_duel_ranger_kit_wins,
  blitz_duel_rounds_played,
  blitz_duel_scout_kit_wins,
  blitz_duel_shadow_knight_kit_wins,
  blitz_duel_snowman_kit_wins,
  blitz_duel_speleologist_kit_wins,
  blitz_duel_toxicologist_kit_wins,
  blitz_duel_warrior_kit_wins,
  blitz_duel_wins,
  blitz_duel_wolftamer_kit_wins,
  blitz_duels_kit,
  blitz_iron_title_prestige,
  blitz_rookie_title_prestige,
  blizzard_seconds_slow_standard,
  blizzard_seconds_slow,
  blocks_broken_standard,
  blocks_broken,
  blocks_placed,
  bow_duel_bow_hits,
  bow_duel_bow_shots,
  bow_duel_damage_dealt,
  bow_duel_health_regenerated,
  bow_duel_rounds_played,
  bow_hits,
  bow_rookie_title_prestige,
  bow_shots,
  bowspleef_duel_bow_shots,
  bowspleef_duel_rounds_played,
  bridge_deaths,
  bridge_doubles_blocks_placed,
  bridge_doubles_bow_hits,
  bridge_doubles_bow_shots,
  bridge_doubles_bridge_deaths,
  bridge_doubles_bridge_kills,
  bridge_doubles_damage_dealt,
  bridge_doubles_goals,
  bridge_doubles_health_regenerated,
  bridge_doubles_melee_hits,
  bridge_doubles_melee_swings,
  bridge_doubles_rounds_played,
  bridge_doubles_wins,
  bridge_duel_blocks_placed,
  bridge_duel_bow_hits,
  bridge_duel_bow_shots,
  bridge_duel_bridge_deaths,
  bridge_duel_bridge_kills,
  bridge_duel_damage_dealt,
  bridge_duel_deaths,
  bridge_duel_goals,
  bridge_duel_health_regenerated,
  bridge_duel_kills,
  bridge_duel_losses,
  bridge_duel_melee_hits,
  bridge_duel_melee_swings,
  bridge_duel_rounds_played,
  bridge_duel_wins,
  bridge_four_blocks_placed,
  bridge_four_bow_hits,
  bridge_four_bow_shots,
  bridge_four_damage_dealt,
  bridge_four_deaths,
  bridge_four_goals,
  bridge_four_health_regenerated,
  bridge_four_kills,
  bridge_four_melee_hits,
  bridge_four_melee_swings,
  bridge_four_rounds_played,
  bridge_four_wins,
  bridge_kills,
  bridge_rookie_title_prestige,
  bridgemapwins,
  bucket_barriers_broken_standard,
  bucket_barriers_broken,
  chat_enabled,
  classic_duel_bow_hits,
  classic_duel_bow_shots,
  classic_duel_damage_dealt,
  classic_duel_deaths,
  classic_duel_health_regenerated,
  classic_duel_kills,
  classic_duel_losses,
  classic_duel_melee_hits,
  classic_duel_melee_swings,
  classic_duel_rounds_played,
  classic_duel_wins,
  classic_rookie_title_prestige,
  coins,
  combo_duel_damage_dealt,
  combo_duel_deaths,
  combo_duel_golden_apples_eaten,
  combo_duel_health_regenerated,
  combo_duel_losses,
  combo_duel_melee_hits,
  combo_duel_melee_swings,
  combo_duel_rounds_played,
  combo_rookie_title_prestige,
  cow_bucket_barriers_broken_standard,
  cow_bucket_barriers_broken,
  creepertamer_kit_wins,
  current_blitz_winstreak,
  current_bridge_winstreak,
  current_classic_winstreak,
  current_mega_walls_winstreak,
  current_op_winstreak,
  current_skywars_winstreak,
  current_sumo_winstreak,
  current_uhc_winstreak,
  current_winstreak_mode_blitz_duel,
  current_winstreak_mode_bridge_doubles,
  current_winstreak_mode_bridge_duel,
  current_winstreak_mode_bridge_four,
  current_winstreak_mode_classic_duel,
  current_winstreak_mode_mw_duel,
  current_winstreak_mode_op_duel,
  current_winstreak_mode_ranked_1,
  current_winstreak_mode_sumo_duel,
  current_winstreak_mode_sw_doubles,
  current_winstreak_mode_sw_duel,
  current_winstreak_mode_uhc_doubles,
  current_winstreak_mode_uhc_duel,
  current_winstreak_mode_uhc_four,
  current_winstreak_mode_uhc_meetup,
  current_winstreak,
  damage_dealt,
  deaths,
  donkeytamer_kit_wins,
  dreadlord_kit_wins,
  duels_chest_history,
  duels_chests,
  duels_new_ranked__8_2019_overallbeststars,
  duels_new_ranked__8_2019_ranked_1_bestelo,
  duels_new_ranked__8_2019_ranked_1_beststars,
  duels_new_ranked__8_2019_ranked_1_maxstars,
  duels_openedchests,
  duels_openedcommons,
  duels_openedepics,
  duels_openedlegendaries,
  duels_openedrares,
  duels_recently_played2,
  duels_recently_played,
  duels_winstreak_best_blitz_duel,
  duels_winstreak_best_classic_duel,
  duels_winstreak_best_combo_duel,
  duels_winstreak_best_mw_duel,
  duels_winstreak_best_op_duel,
  duels_winstreak_best_potion_duel,
  duels_winstreak_best_sumo_duel,
  duels_winstreak_best_sw_doubles,
  duels_winstreak_best_sw_duel,
  duels_winstreak_best_uhc_doubles,
  duels_winstreak_best_uhc_duel,
  duels_winstreak_best_uhc_four,
  duels_winstreak_classic_duel,
  duels_winstreak_combo_duel,
  duels_winstreak_potion_duel,
  enderman_a_meters_travelled_standard,
  enderman_a_meters_travelled,
  enderman_meters_travelled_standard,
  enderman_meters_travelled,
  energy_from_grappling_hook_standard,
  energy_from_grappling_hook,
  farmer_kit_wins,
  frog_kit_wins,
  games_played_duels,
  goals,
  golden_apples_eaten,
  golem_kit_wins,
  heal_pots_used,
  health_regenerated,
  herobrine_kit_wins,
  horsetamer_kit_wins,
  hound_kit_wins,
  hunter_kit_wins,
  hype_train_kit_wins,
  kills,
  kit_menu_option,
  kit_wins,
  layout_bridge_duel_layout,
  layout_combo_duel_layout,
  layout_uhc_duel_layout,
  leaderboardpage_win_streak,
  leaderboardpage_wins,
  losses,
  maps_won_on,
  master_alechmy_hearts_standard,
  master_alechmy_hearts,
  mega_walls_rookie_title_prestige,
  melee_hits,
  melee_swings,
  meters_travelled_standard,
  meters_travelled,
  moleman_a_blocks_broken_standard,
  moleman_a_blocks_broken,
  moleman_blocks_broken_standard,
  moleman_blocks_broken,
  mw_duel_arcanist_kit_wins,
  mw_duel_assassin_kit_wins,
  mw_duel_blocks_placed,
  mw_duel_bow_hits,
  mw_duel_bow_shots,
  mw_duel_damage_dealt,
  mw_duel_deaths,
  mw_duel_dreadlord_kit_wins,
  mw_duel_golem_kit_wins,
  mw_duel_health_regenerated,
  mw_duel_herobrine_kit_wins,
  mw_duel_kills,
  mw_duel_kit_wins,
  mw_duel_losses,
  mw_duel_melee_hits,
  mw_duel_melee_swings,
  mw_duel_rounds_played,
  mw_duel_shaman_kit_wins,
  mw_duel_spider_kit_wins,
  mw_duel_werewolf_kit_wins,
  mw_duel_wins,
  mw_duels_class,
  no_debuff_rookie_title_prestige,
  op_duel_bow_hits,
  op_duel_bow_shots,
  op_duel_damage_dealt,
  op_duel_deaths,
  op_duel_health_regenerated,
  op_duel_kills,
  op_duel_losses,
  op_duel_melee_hits,
  op_duel_melee_swings,
  op_duel_rounds_played,
  op_duel_wins,
  op_rookie_title_prestige,
  paladin_kit_wins,
  potion_duel_damage_dealt,
  potion_duel_deaths,
  potion_duel_heal_pots_used,
  potion_duel_health_regenerated,
  potion_duel_kills,
  potion_duel_losses,
  potion_duel_melee_hits,
  potion_duel_melee_swings,
  potion_duel_rounds_played,
  potion_duel_wins,
  pyromancer_kit_wins,
  ranger_kit_wins,
  ranked_1_blocks_placed,
  ranked_1_bow_hits,
  ranked_1_bow_shots,
  ranked_1_damage_dealt,
  ranked_1_deaths,
  ranked_1_health_regenerated,
  ranked_1_kills,
  ranked_1_kit_wins,
  ranked_1_losses,
  ranked_1_melee_hits,
  ranked_1_melee_swings,
  ranked_1_ranger_kit_wins,
  ranked_1_rounds_played,
  ranked_1_shadow_knight_kit_wins,
  ranked_1_wins,
  ranked_loss_streak_ranked_1,
  ranked_streak_ranked_1,
  rematch_option_1,
  renegade_arrows_from_rend_standard,
  renegade_arrows_from_rend,
  renegade_energy_from_grappling_hook_standard,
  renegade_energy_from_grappling_hook,
  rounds_played,
  scout_kit_wins,
  selected_1_new,
  selected_1,
  selected_2_new,
  selected_2,
  shadow_knight_kit_wins,
  shaman_kit_wins,
  show_lb_option,
  skywars_rookie_title_prestige,
  snowman_blizzard_seconds_slow_standard,
  snowman_blizzard_seconds_slow,
  snowman_kit_wins,
  speleologist_kit_wins,
  spider_kit_wins,
  status_field,
  strikes_from_cloak_standard,
  strikes_from_cloak,
  sumo_duel_deaths,
  sumo_duel_kills,
  sumo_duel_losses,
  sumo_duel_melee_hits,
  sumo_duel_melee_swings,
  sumo_duel_rounds_played,
  sumo_duel_wins,
  sumo_rookie_title_prestige,
  sw_doubles_blocks_placed,
  sw_doubles_bow_hits,
  sw_doubles_bow_shots,
  sw_doubles_damage_dealt,
  sw_doubles_deaths,
  sw_doubles_frog_kit_wins,
  sw_doubles_health_regenerated,
  sw_doubles_kills,
  sw_doubles_kit_wins,
  sw_doubles_losses,
  sw_doubles_melee_hits,
  sw_doubles_melee_swings,
  sw_doubles_rounds_played,
  sw_doubles_scout_kit_wins,
  sw_doubles_wins,
  sw_duel_armorer_kit_wins,
  sw_duel_blocks_placed,
  sw_duel_bow_hits,
  sw_duel_damage_dealt,
  sw_duel_deaths,
  sw_duel_health_regenerated,
  sw_duel_hound_kit_wins,
  sw_duel_kills,
  sw_duel_kit_wins,
  sw_duel_losses,
  sw_duel_melee_hits,
  sw_duel_melee_swings,
  sw_duel_pyromancer_kit_wins,
  sw_duel_rounds_played,
  sw_duel_scout_kit_wins,
  sw_duel_wins,
  sw_duels_kit_new2,
  sw_duels_kit_new3,
  sw_duels_kit_new,
  sw_duels_kit,
  sw_tournament_bow_hits,
  sw_tournament_damage_dealt,
  sw_tournament_deaths,
  sw_tournament_health_regenerated,
  sw_tournament_kills,
  sw_tournament_losses,
  sw_tournament_melee_hits,
  sw_tournament_melee_swings,
  sw_tournament_rounds_played,
  tnt_games_rookie_title_prestige,
  tournament_rookie_title_prestige,
  toxicologist_kit_wins,
  uhc_doubles_blocks_placed,
  uhc_doubles_bow_hits,
  uhc_doubles_bow_shots,
  uhc_doubles_damage_dealt,
  uhc_doubles_deaths,
  uhc_doubles_golden_apples_eaten,
  uhc_doubles_health_regenerated,
  uhc_doubles_kills,
  uhc_doubles_losses,
  uhc_doubles_melee_hits,
  uhc_doubles_melee_swings,
  uhc_doubles_rounds_played,
  uhc_doubles_wins,
  uhc_duel_blocks_placed,
  uhc_duel_bow_hits,
  uhc_duel_bow_shots,
  uhc_duel_damage_dealt,
  uhc_duel_deaths,
  uhc_duel_golden_apples_eaten,
  uhc_duel_health_regenerated,
  uhc_duel_kills,
  uhc_duel_losses,
  uhc_duel_melee_hits,
  uhc_duel_melee_swings,
  uhc_duel_rounds_played,
  uhc_duel_wins,
  uhc_four_blocks_placed,
  uhc_four_bow_hits,
  uhc_four_bow_shots,
  uhc_four_damage_dealt,
  uhc_four_deaths,
  uhc_four_golden_apples_eaten,
  uhc_four_health_regenerated,
  uhc_four_kills,
  uhc_four_losses,
  uhc_four_melee_hits,
  uhc_four_melee_swings,
  uhc_four_rounds_played,
  uhc_four_wins,
  uhc_gold_title_prestige,
  uhc_iron_title_prestige,
  uhc_meetup_blocks_placed,
  uhc_meetup_bow_hits,
  uhc_meetup_bow_shots,
  uhc_meetup_damage_dealt,
  uhc_meetup_deaths,
  uhc_meetup_health_regenerated,
  uhc_meetup_kills,
  uhc_meetup_losses,
  uhc_meetup_melee_hits,
  uhc_meetup_melee_swings,
  uhc_meetup_rounds_played,
  uhc_meetup_wins,
  uhc_rookie_title_prestige,
  uhc_tournament_bow_hits,
  uhc_tournament_bow_shots,
  uhc_tournament_damage_dealt,
  uhc_tournament_deaths,
  uhc_tournament_golden_apples_eaten,
  uhc_tournament_health_regenerated,
  uhc_tournament_kills,
  uhc_tournament_losses,
  uhc_tournament_melee_hits,
  uhc_tournament_melee_swings,
  uhc_tournament_rounds_played,
  warrior_kit_wins,
  werewolf_kit_wins,
  wins,
  wolftamer_kit_wins,
});
