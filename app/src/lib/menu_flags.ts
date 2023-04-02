import flag_czech from '$lib/assets/country_flags/czech.png?w=200';
// @ts-ignore handled by vite...
import lith from '$lib/assets/country_flags/lithuania.jpg?w=200';
// @ts-ignore handled by vite...
import italy from '$lib/assets/country_flags/italy.png?w=200';
// @ts-ignore handled by vite...
import romania from '$lib/assets/country_flags/romania.png?w=200';
// @ts-ignore handled by vite...
import portugal from '$lib/assets/country_flags/portugal.jpg?w=200';

type Flags = [name: string, logo: string, posts: string, gallery: string][];

export const flags: Flags = [
	[
		'Agrupamento de Escolas de Pinheiro Portugal Norte Penafiel',
		portugal,
		'/posts/portugal',
        "/gallery/portugal"
	],
	[   'Liceo Giordano Bruno Italy Piemonte Torin', 
        italy,
        '/posts/italy',
        '/gallery/italy',
    ],
	[   'Gymnázium Josefa Božka, Český Těšín',
        flag_czech,
        '/posts/czechia',
        "/gallery/czechia"
    ],
	[   'Radviliskio Lizdeikos gimnazija Lithuania Radviliskis', 
        lith, 
        '/posts/lithuania',
        "/gallery/lithuania"
    ],
	[
		'Scoala Profesionala Tiberiu Morariu Salva Romania Nord-Vest Salva',
		romania,
		'/posts/romania',
        "/gallery/romania"
	]
];
