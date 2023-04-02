import ebspinheiro from '$lib/assets/schools/ebspinheiro.png';
// @ts-ignore handled by vite...
import gbruno from '$lib/assets/schools/gbruno.png?w=350';
// @ts-ignore handled by vite...
import gmct from '$lib/assets/schools/gmct.png?w=150';
// @ts-ignore handled by vite...
import lizdeika from '$lib/assets/schools/lizdeika.png?w=150';
// @ts-ignore handled by vite...
import scoalasalva from '$lib/assets/schools/scoalasalva.jpg?w=150';

type Schools = [name: string, logo: string, website: string, type: string][];

export const schools: Schools = [
	
	['Gymnázium Josefa Božka, Český Těšín', gmct, 'https://www.gmct.cz', ''],
	['Liceo Giordano Bruno Italy Piemonte Torin', gbruno, 'https://www.gbruno.edu.it', ''],
	['Radviliskio Lizdeikos gimnazija Lithuania Radviliskis', lizdeika, 'http://www.lizdeika.lt/', ''],
	[
		'Scoala Profesionala Tiberiu Morariu Salva Romania Nord-Vest Salva',
		scoalasalva,
		'https://www.scoalasalva.ro/',
		''
	],
	[
		'Agrupamento de Escolas de Pinheiro Portugal Norte Penafiel',
		ebspinheiro,
		'https://www.ebspinheiro.net/',
		'item1'
	],
];
