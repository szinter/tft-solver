import ChampionTrait from "./champion-trait";

function parseChampionTraits(rawChampionTraits: String): Array<ChampionTrait> {

    return rawChampionTraits.split('\n\n\n').map((championTrait: String) => {

        const lines: Array<String> = championTrait.split('\n');
        const name: String = lines[0];
        const numberOfChampions: Number = -1 * Number(lines[2][0]);
        const champions: Array<String> = lines.slice(Number(numberOfChampions));
        const description: String = lines.slice(3, Number(numberOfChampions)).join('\n');

        return new ChampionTrait(name, champions, description)
    });
}

export default parseChampionTraits;
