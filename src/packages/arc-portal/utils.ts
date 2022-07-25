import {A_Arc} from "../arc-portal/types";

export function getArcs(): A_Arc[] {
    return [{
        id: 3,
        name: 'ARC-0003',
        markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0003.md',
        markdown: '',
        github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md'
    },
        {
            id: 4,
            name: 'ARC-0004',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0004.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md'
        },
        {
            id: 19,
            name: 'ARC-0019',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0019.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md'
        },
        {
            id: 69,
            name: 'ARC-0069',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0069.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md'
        }];
}

export function getArc(id: number): A_Arc {
    let arc;
    const arcs = getArcs();

    arcs.forEach((currentArc) => {
        if (currentArc.id === id) {
            arc = currentArc;
        }
    });

    return arc;
}