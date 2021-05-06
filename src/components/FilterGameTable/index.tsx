import { useState } from 'react';
import { IGameList } from '../../data/data';
import GameTable from '../GameTable';
import SearchCompo from '../SearchCompo';

const FilterGameTable = ({ gameList }: { gameList: IGameList[] }) => {
	//catch value get in search component
	const [searchValue, setSearchValue] = useState<string>('');
	//catch value of checkbox in search component
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);

	return (
		<div>
			<SearchCompo
				setSearchValue={setSearchValue}
				setInStockOnly={setInStockOnly}
			/>
			<GameTable
				gameList={gameList}
				searchValue={searchValue}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
};

export default FilterGameTable;
