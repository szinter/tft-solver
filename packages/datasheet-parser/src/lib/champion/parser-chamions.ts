import Champion from "./champion";

function parseChampions(rawChampions: String): Array<Champion> {

    return rawChampions.split('\ncost\n').slice(1).map((champion: String) => {

        const lines: Array<String> = champion.split('\n');
        const name: String = lines[1];
        const cost: Number = Number(lines[0]);
        const traits: Array<String> = lines[2].split(' • ');
        const description: String = lines.slice(3).join('\n');

        return new Champion(name, cost, traits, description)
    });
}
export default parseChampions;