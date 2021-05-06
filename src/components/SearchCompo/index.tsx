import { SearchBarContainer } from './style';

//Typed Props
type Props = {
	setSearchValue: (value: string) => void;
	setInStockOnly: (inStockOnly: boolean) => void;
};

const SearchCompo = ({ setSearchValue, setInStockOnly }: Props) => {
	return (
		<SearchBarContainer>
			<input
				type='text'
				placeholder='search'
				onChange={(e) => setSearchValue(e.target.value)}
				name='search'
				id='search'
			/>{' '}
			<input
				type='checkbox'
				name='inStockOnly'
				id='inStockOnly'
				onChange={(e) => setInStockOnly(e.target.checked)}
			/>{' '}
			<span>Only In Stock</span>
		</SearchBarContainer>
	);
};

export default SearchCompo;
