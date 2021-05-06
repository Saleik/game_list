//init Game list like array of object
//Type game object in game list
export interface IGameList {
	name: string;
	category: string;
	inStock: boolean;
	price: number;
}
	export let gameList: IGameList[] = [];

	//populate game list
     gameList = [
		{
			name: 'Counter Strike',
			category: 'FPS',
			inStock: true,
			price: 10,
		},
		{
			name: 'Final Fantasy X',
			category: 'RPG',
			inStock: true,
			price: 15,
		},
		{
			name: 'Diablo III',
			category: 'Hack & Slash',
			inStock: false,
			price: 30,
		},
		{
			name: 'Tekken 7',
			category: 'Combat',
			inStock: true,
			price: 20,
		},
		{
			name: 'Crash Bandicoot',
			category: 'Plateform',
			inStock: true,
			price: 20,
		},
		{
			name: 'Ace Combat 4',
			category: 'Simulation',
			inStock: true,
			price: 20,
		},
		{
			name: 'Flight Simulator',
			category: 'Simulation',
			inStock: false,
			price: 55,
		},
		{
			name: 'Civilization VI',
			category: 'Tactic',
			inStock: false,
			price: 45,
		},
		{
			name: 'Anno 1800',
			category: 'Management',
			inStock: false,
			price: 35,
		},
		{
			name: 'Devil May Cry 5',
			category: "beat'em all",
			inStock: true,
			price: 25,
		},
		{
			name: 'Battlefield 4',
			category: 'FPS',
			price: 20,
			inStock: true,
		},
	];