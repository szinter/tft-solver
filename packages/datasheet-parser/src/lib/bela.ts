import rawChampionTraits from "./champion-trait/raw-champion-traits";
import ChampionTrait from "./champion-trait/champion-trait";
import parseChampionTraits from "./champion-trait/parser-champion-traits";
import saveToFile from "./save-to-file";

import rawChampions from "./champion/raw-champions";
import parseChampions from "./champion/parser-chamions";
import Champion from "./champion/champion";

const champions: Array<Champion> = parseChampions(rawChampions);
const championTraits: Array<ChampionTrait> = parseChampionTraits(rawChampionTraits);

saveToFile(JSON.stringify(championTraits), './dist/champion-traits.json');
saveToFile(JSON.stringify(champions), './dist/champions.json');
