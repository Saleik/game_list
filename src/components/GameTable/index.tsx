import GameRow from '../GameRow';
import { v4 as uuidv4 } from 'uuid';
import { IGameList } from '../../data/data';
import { Table, TableContainer } from './style';

//Type props required
type Props = {
	searchValue: string;
	gameList: IGameList[];
	inStockOnly: boolean;
};

//Type searchingGame required
interface IGameFound {
	name: string;
	category: string;
	inStock: boolean;
	price: number;
}

const GameTable = ({ gameList, searchValue, inStockOnly }: Props) => {
	//init type and value to empty
	let gameFound: IGameFound[] = [];

	/**
	 * Returns game match to searchValue
	 * @returns {array}
	 */
	const filter = () => {
		//only game in stock
		if (inStockOnly) {
			//set var with match item
			gameFound = gameList.filter((game) =>
				//get game object key
				Object.keys(game).some(
					(key) =>
						//iterate on each key value and test it
						game[key as keyof IGameList]
							.toString()
							.toLowerCase()
							.replace(' ', '')
							.includes(searchValue.toLocaleLowerCase().replace(' ', '')) &&
						game.inStock
				)
			);
		} else {
			gameFound = gameList.filter((game) =>
				Object.keys(game).some((key) =>
					game[key as keyof IGameList]
						.toString()
						.toLowerCase()
						.replace(' ', '')
						.includes(searchValue.toLocaleLowerCase().replace(' ', ''))
				)
			);
		}
	};
	filter();
	return (
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>In Stock</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{gameFound.length > 0
						? gameFound.map((game) => (
								<GameRow
									key={uuidv4()}
									name={game.name}
									category={game.category}
									inStock={game.inStock}
									price={game.price}
								/>
						  ))
						: gameList.map((game) => (
								<GameRow
									key={uuidv4()}
									name={game.name}
									category={game.category}
									inStock={game.inStock}
									price={game.price}
								/>
						  ))}
				</tbody>
			</Table>
		</TableContainer>
	);
};

export default GameTable;
