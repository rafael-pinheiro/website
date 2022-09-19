import type { LoaderFunction } from 'react-router-dom';

interface Module {
    default: React.FC;
    title: string,
    createdAt: string,
    loader: LoaderFunction;
    path?: string;
    layout?: string;
}

interface GraphData {
    nodes: {
        id: string;
        name: string;
    }[];
    links: {
        source: string;
        target: string;
    }[];
}

export interface Page {
    path: string,
    title: string,
    createdAt: Date,
    content: string,
    isJournal: boolean,
    Component: React.FC;
    loader: LoaderFunction;
    references: Page[];
    layout?: string;
}

const modules: Record<string, Module> = import.meta.glob('../pages/**/*.mdx', { eager: true });
const contents: Record<string, string> = import.meta.glob('../pages/**/*.mdx', { eager: true, as: 'raw' });
export const pages: Page[] = [];
const pagesMap = new Map<string, Page>();
export const graphData: GraphData = {
    nodes: [],
    links: [],
};

const cleanLink = (link: string) => link.replace('../pages', '').replace('.mdx', '').replace('.tsx', '').replace('index', '');

for (const module in modules) {
    let { title, loader, createdAt, path, layout } = modules[module];
    path = path ?? cleanLink(module);
    const page = {
        title,
        path,
        loader,
        layout,
        Component: modules[module].default,
        content: contents[module],
        isJournal: path.startsWith('/journal/'),
        createdAt: new Date(createdAt),
        references: [],
    };

    pages.push(page);

    // Ensuring page can be found by calculated path and alias path
    pagesMap.set(path, page);
    pagesMap.set(cleanLink(module), page);
}

const linksRegex = /!?\[([^\]]*)\](\(([^\)]+)\))/gm;

for (const content in contents) {
    const matches = contents[content].matchAll(linksRegex);

    for (const match of matches) {
        const page = pagesMap.get(cleanLink(content));

        if (!page) {
            throw new Error(`Could not find page ${cleanLink(content)}`);
        }

        graphData.links.push({
            source: page.path,
            target: match[3]
        });
        pagesMap.get(match[3])?.references.push(page);
    }
}

graphData.nodes = pages.map(p => ({
    id: p.path,
    name: p.title
}));

export const journals = pages
    .filter(({ isJournal }) => isJournal)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

export const get = (slug: string): Page => {
    const page = pagesMap.get(slug);

    if (!page) {
        throw new Error(`Page ${slug} doesn't exist.`);
    }

    return page;
}