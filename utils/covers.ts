// Video covers shown in the scrolling strip above the portfolio.
// Drop the image files in public/covers/ and list them here, in display order.
export type Cover = {
    src: string;
    title: string;
};

export const covers: Cover[] = [
    { src: '/covers/capa-01.webp', title: 'Conceição da Zona Sul, São Paulo' },
    { src: '/covers/capa-02.webp', title: 'Essa é a Josy' },
    { src: '/covers/capa-03.webp', title: 'Would you know where to build it?' },
    { src: '/covers/capa-04.webp', title: 'The moment I walked in' },
    { src: '/covers/capa-05.webp', title: 'Viver na Zona Sul, São Paulo' },
    { src: '/covers/capa-06.webp', title: 'Valorização constante no Brooklin' },
    { src: '/covers/capa-07.webp', title: 'Parque no Brooklin' },
    { src: '/covers/capa-08.webp', title: 'Mis 3 cafés em Winter Garden' },
];
