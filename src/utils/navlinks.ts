
export interface INavlink {
    id: number;
    href: string;
    text: string;
}

export const navlinks:INavlink[] = [
    {
        id: 1,
        href: '/',
        text: 'clients'
    },
    {
        id: 2,
        href: '/clients/new',
        text: 'new client'
    },
]