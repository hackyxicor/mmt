import { Hotel } from "../constants/interface.constants"

export function SanatizeResposne(items: Array<Hotel>) {
    if (!(Array.isArray(items))) {
        return []
    }

    return items.map((item, index) => ({ ...item, id: index + 1, image: `https:${item?.image}` }))
}

export function SortResutsBy(dictionary: any, key: keyof (Hotel)) {
    const list = Object.values(dictionary) as Array<Hotel>;

    return list.sort((item1, item2) => ((item2[key] as number) - (item1[key] as number))).map((item) => item.id as number);
}

export function Objectify(items: Array<Hotel>) {
    const dictionary: { [key: string]: Hotel } = {};

    items.forEach((item) => dictionary[item.id] = item);

    return dictionary;
}