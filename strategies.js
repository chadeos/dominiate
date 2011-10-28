strategies = {"BankWharf":"# Play Big Money including Banks, except buy Wharf with every $5 buy.\n{\n  name: 'BankWharf'\n  author: 'Geronimoo'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Bank\"\n    \"Gold\"\n    \"Wharf\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n","BM_Library":"{\n  name: 'BM Library'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Library\"\n    \"Silver\"\n  ]\n}\n","OBM_Chancellor":"{\n  name: 'OBM Chancellor'\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.getTotalMoney() > 18\n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Duchy\" if state.gainsToEndGame() <= 6\n    \"Chancellor\" if my.countInDeck(\"Chancellor\") < 1\n    \"Silver\"\n  ]\n}\n\n","DoubleWitch":"{\n  name: 'DoubleWitch'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 and my.countInDeck(\"Gold\") > 0\n    \"Witch\" if my.countInDeck(\"Witch\") < 2\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Silver\"\n  ]\n}\n","OBM_Monument":"# Optimized version of Big Money + Monument\n{\n  name: 'OBM Monument'\n  author: 'tko'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.getTotalMoney() > 18\n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Duchy\" if state.gainsToEndGame() <= 5\n    \"Monument\" if my.countInDeck(\"Monument\") < 3\n    \"Silver\"\n  ]\n}\n\n","BM_Masquerade":"# ehunt described this strategy in words on the Dominion Strategy Forum,\n# describing it as a \"fun, if sobering, experiment\" to play Masquerade\n# completely algorithmically in a real game.\n#\n# \"Do not try to tweak big money masquerade. Instead, let big money\n# masquerade tweak you.\"\n{\n  name: 'BM Masquerade'\n  author: 'ehunt'\n  gainPriority: (state, my) -> \n    [\n      \"Province\"\n      \"Gold\"\n      \"Duchy\" if state.gainsToEndGame() <= 5\n      \"Masquerade\" if my.countInDeck(\"Masquerade\") == 0\n      \"Silver\"\n    ]\n}\n\n","ChapelWitch":"# Gain one Chapel and one Witch, and otherwise play Big Money. One of the most\n# powerful two-card strategies there is.\n{\n  name: 'ChapelWitch'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Witch\" if my.countInDeck(\"Witch\") == 0\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \n    # If this bot somehow gets rid of its chapel later in the game,\n    # it won't try to acquire another one.\n    \"Chapel\" if my.coins <= 3 and my.countInDeck(\"Chapel\") == 0 and my.turnsTaken <= 2\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n\n  trashPriority: (state, my) -> [\n    \"Curse\"\n    \"Estate\" if state.gainsToEndGame() > 4\n    \"Copper\" if my.getTotalMoney() > 4\\\n             and not (my.countInDeck(\"Witch\") == 0 and my.getTreasureInHand() == 5)\n    \"Estate\" if state.gainsToEndGame() > 2\n  ]\n\n}\n","MoneylenderWitch":"# Not necessarily a good strategy.\n{\n  name: 'MoneylenderWitch'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 and my.countInDeck(\"Gold\") > 0\n    \"Witch\" if my.countInDeck(\"Witch\") < 2\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Moneylender\" if my.countInDeck(\"Moneylender\") == 0\n    \"Silver\"\n  ]\n}\n","BigSmithy":"{\n  name: 'BigSmithy'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 \\\n               or state.countInSupply(\"Province\") <= 6\n    \n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Smithy\" if my.countInDeck(\"Smithy\") < 2 \\\n             and my.numCardsInDeck() >= 16\n    \"Smithy\" if my.countInDeck(\"Smithy\") < 1\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n\n","DoubleGoons":"{\n  name: 'DoubleGoons'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Goons\" if my.countInDeck(\"Goons\") < 2\n    \"Gold\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 4 \\\n             and my.countInPlay(\"Goons\") > 0\n  ]\n}\n","OBM_Bazaar":"# Optimized version of Big Money + Bazaar\n{\n  name: 'OBM Bazaar'\n  author: 'WanderingWinder'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.countInDeck(\"Gold\") > 0\n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Duchy\" if state.gainsToEndGame() <= 5\n    \"Bazaar\"\n    \"Silver\"\n  ]\n}\n\n","KCWharf":"# Buy Wharf with every $5 and King's Court with every $7. Probably not\n# optimized.\n{\n  name: 'KCWharf'\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"King's Court\"\n    \"Gold\"\n    \"Wharf\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n","OBM_Bridge":"# Optimized version of Big Money + Bazaar\n{\n  name: 'OBM Bridge'\n  author: 'WanderingWinder'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.countInDeck(\"Gold\") > 0\n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Duchy\" if state.gainsToEndGame() <= 6\n    \"Bridge\" if my.countInDeck(\"Bridge\") <= my.countCardTypeInDeck(\"Treasure\") / 10\n    \"Bridge\" if my.countInDeck(\"Bridge\") == 0\n    \"Bazaar\"\n    \"Silver\"\n  ]\n}\n\n","OBM_Adventurer":"# Optimized version of Big Money + Adventurer\n{\n  name: 'OBM Adventurer'\n  author: 'WanderingWinder'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.countInDeck(\"Gold\") > 0\n    \"Duchy\" if state.countInSupply(\"Province\") <= 4\n    \"Estate\" if state.countInSupply(\"Province\") <= 2\n    \"Adventurer\" if state.countInSupply(\"Gold\") > 0 \\\n                 and my.countInDeck(\"Adventurer\") == 0\n    \"Gold\"\n    \"Duchy\" if state.countInSupply(\"Province\") <= 5\n    \"Silver\"\n  ]\n}\n","SingleWitch":"{\n  name: 'SingleWitch'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 and my.countInDeck(\"Gold\") > 0\n    \"Witch\" if my.countInDeck(\"Witch\") == 0\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Silver\"\n  ]\n}\n","SingleBaron":"{\n  name: 'SingleBaron'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Baron\" if my.countInDeck(\"Baron\") == 0\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 2\n  ]\n  \n  discardPriority: (state, my) -> [\n    \"Colony\"\n    \"Province\"\n    \"Duchy\"\n    \"Curse\"\n    \"Estate\" if my.countInHand(\"Baron\") == 0 \\\n             or my.countInHand(\"Estate\") > 1\n    \"Copper\"\n    \"Baron\" if my.countInHand(\"Estate\") == 0\n    null\n    \"Silver\"\n    \"Estate\"\n    \"Baron\"\n  ]\n\n}\n","DoubleAmbassador":"{\n  name: 'Double Ambassador'\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Ambassador\" if my.countInDeck(\"Ambassador\") < 2\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n\n  # This is the default Ambassador strategy, but it should likely be changed.\n  ambassadorPriority: (state, my) ->\n    [\n      \"Curse,2\"\n      \"Curse,1\"\n      \"Curse,0\"\n      \"Estate,2\"\n      \"Estate,1\"\n      # Make sure we have at least $5 in the deck, including if we buy a Silver.\n      \"Copper,2\" if my.getTreasureInHand() < 3 and my.getTotalMoney() >= 5\n      \"Copper,2\" if my.getTreasureInHand() >= 5\n      \"Copper,2\" if my.getTreasureInHand() == 3 and my.getTotalMoney() >= 7\n      \"Copper,1\" if my.getTreasureInHand() < 3 and my.getTotalMoney() >= 4\n      \"Copper,1\" if my.getTreasureInHand() >= 4\n      \"Estate,0\"\n      \"Copper,0\"\n    ]\n\n  discardPriority: (state, my) -> [\n    \"Colony\"\n    \"Duchy\"\n    \"Province\"\n    \"Ambassador\" if my.countInHand(\"Ambassador\") > 1\n    \"Estate\" if my.countInHand(\"Ambassador\") == 0 \\\n             or state.gainsToEndGame <= 5\n    \"Curse\" if my.countInHand(\"Ambassador\") == 0 \\\n            or state.gainsToEndGame <= 5\n    \"Copper\"\n    \"Estate\"\n    \"Curse\"\n    null\n    \"Silver\"\n  ]\n}\n","SillyAI":"# SillyAI's strategy is to buy an arbitrary card with the highest available\n# cost. It does a reasonable job of playing like a newbie, it occasionally\n# gets lucky and pulls off nice combos, and it tests a lot of possible\n# states of the game.\n{\n  name: 'SillyAI'\n  author: 'rspeer'\n\n  gainPriority: (state, my) -> []\n  gainValue: (state, card, my) ->\n    if card.name is \"Copper\" or card.name is \"Curse\"\n      return -1\n    else\n      [coins, potions] = card.getCost(state)\n      return coins + potions*2 + Math.random()\n}\n","OBM_Nobles":"{\n  name: 'OBM Nobles'\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Province\"  \n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Nobles\" if my.countInDeck(\"Nobles\") < 1\n    \"Nobles\" if state.gainsToEndGame() <= 6\n    \"Gold\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 2\n  ]\n}\n","OBM_Coppersmith":"# Plays Coppersmith on 5/2 starts; plays Big Money otherwise.\n{\n  name: 'OBM Coppersmith'\n  author: 'HiveMindEmulator'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.getTotalMoney() > 18\n    \"Duchy\" if state.gainsToEndGame() <= 4\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Duchy\" if state.gainsToEndGame() <= 6\n    \"Coppersmith\" if my.numCardsInDeck() == 10 and my.getAvailableMoney() == 5\n    \"Silver\"\n  ]\n}\n\n","TournamentPlayer":"{\n  name: \"TournamentPlayer\"\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\"\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 2\n    \"Followers\"\n    \"Trusty Steed\"\n    \"Bag of Gold\"\n    \"Princess\"\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Diadem\"\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Tournament\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n  \n  discardPriority: (state, my) -> [\n    \"Colony\"\n    \"Duchy\"\n    \"Curse\"\n    \"Estate\"\n    \"Province\" if my.countInHand(\"Tournament\") == 0 \\\n               or my.countInHand(\"Province\") > 1\n    \"Copper\"\n    null\n    \"Silver\"\n    \"Gold\"\n  ]\n\n}\n","Remaker":"{\n  name: 'Remaker'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.countInDeck(\"Gold\") > 0\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Remake\" if my.countInDeck(\"Remake\") == 0\n    \"Silver\"\n\n    # Some inoffensive $4, $5, and $7 cards, in case it needs them:\n    \"Expand\"\n    \"Laboratory\"\n    \"Caravan\"\n  ]\n}\n","BigMoney":"# This is an implementation of the pure Big Money strategy, updated\n# based on WanderingWinder's forum posts:\n# http://forum.dominionstrategy.com/index.php?topic=625\n{\n  name: 'Big Money'\n  author: 'WanderingWinder'\n  gainPriority: (state, my) -> \n    if state.supply.Colony?\n      [\n        \"Colony\" if my.getTotalMoney() > 32\n        \"Province\" if state.gainsToEndGame() <= 6\n        \"Duchy\" if state.gainsToEndGame() <= 5\n        \"Estate\" if state.gainsToEndGame() <= 2\n        \"Platinum\"\n        \"Province\" if state.countInSupply(\"Colony\") <= 7\n        \"Gold\"\n        \"Duchy\" if state.gainsToEndGame() <= 6\n        \"Silver\"\n        \"Copper\" if state.gainsToEndGame() <= 2\n      ]\n    else\n      [\n        \"Province\" if my.getTotalMoney() > 18\n        \"Duchy\" if state.gainsToEndGame() <= 4\n        \"Estate\" if state.gainsToEndGame() <= 2\n        \"Gold\"\n        \"Duchy\" if state.gainsToEndGame() <= 6\n        \"Silver\"\n      ]\n}\n\n","RoyalBigMoney":"{\n  name: 'Royal Big Money'\n  gainPriority: (state, my) -> \n    if state.supply.Colony?\n      [\n        \"Colony\" if my.getTotalMoney() > 32\n        \"Province\" if state.gainsToEndGame() <= 6\n        \"Duchy\" if state.gainsToEndGame() <= 5\n        \"Estate\" if state.gainsToEndGame() <= 2\n        \"Platinum\"\n        \"Province\" if state.countInSupply(\"Colony\") <= 7\n        \"Gold\"\n        \"Duchy\" if state.gainsToEndGame() <= 6\n        \"Royal Seal\"\n        \"Silver\"\n        \"Copper\" if state.gainsToEndGame() <= 2\n      ]\n    else\n      [\n        \"Province\" if my.getTotalMoney() > 18\n        \"Duchy\" if state.gainsToEndGame() <= 4\n        \"Estate\" if state.gainsToEndGame() <= 2\n        \"Gold\"\n        \"Duchy\" if state.gainsToEndGame() <= 6\n        \"Royal Seal\"\n        \"Silver\"\n      ]\n}\n\n","BigEnvoy":"{\n  name: 'BigEnvoy'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 \\\n               or state.countInSupply(\"Province\") <= 6\n    \n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Envoy\" if my.countInDeck(\"Envoy\") < 1\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n\n","DoubleMilitia":"{\n  name: 'DoubleMilitia'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Militia\" if my.countInDeck(\"Militia\") < 2\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n","DoubleMountebank":"{\n  name: 'DoubleMountebank'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6 and my.countInDeck(\"Gold\") > 0\n    \"Duchy\" if state.gainsToEndGame() <= 5\n    \"Mountebank\" if my.countInDeck(\"Mountebank\") < 2\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \"Silver\"\n  ]\n}\n","DoubleJack":"# Buys two Jacks of All Trades and otherwise plays a version of Big Money.\n#\n# This has no Colony rules, because it would be a terrible strategy in\n# Colony games.\n{\n  name: 'DoubleJack'\n  author: 'rspeer'\n  gainPriority: (state, my) -> [\n    \"Province\" if my.getTotalMoney() > 15\n    \"Duchy\" if state.gainsToEndGame() <= 5\n    \"Estate\" if state.gainsToEndGame() <= 2\n    \"Gold\"\n    \"Jack of All Trades\" if my.countInDeck(\"Jack of All Trades\") < 2\n    \"Silver\"\n  ]\n}\n","ChapelMountebank":"# Gain one Chapel and one Mountebank, and otherwise play Big Money.\n{\n  name: 'ChapelMountebank'\n  gainPriority: (state, my) -> [\n    \"Colony\" if my.countInDeck(\"Platinum\") > 0\n    \"Province\" if state.countInSupply(\"Colony\") <= 6\n    \"Mountebank\" if my.countInDeck(\"Mountebank\") == 0\n    \"Duchy\" if 0 < state.gainsToEndGame() <= 5\n    \"Estate\" if 0 < state.gainsToEndGame() <= 2\n    \"Platinum\"\n    \"Gold\"\n    \n    # If this bot somehow gets rid of its chapel later in the game,\n    # it won't try to acquire another one.\n    \"Chapel\" if my.coins <= 3 and my.countInDeck(\"Chapel\") == 0 and my.turnsTaken <= 2\n    \"Silver\"\n    \"Copper\" if state.gainsToEndGame() <= 3\n  ]\n}\n"}
