import { Span, Td } from './style';

//Typed props
type Props = {
	name: string;
	category: string;
	inStock: boolean;
	price: number;
};

const GameRow = ({ name, category, inStock, price }: Props) => {
	return (
		<tr>
			<Td>{name}</Td>
			<Td>{category}</Td>
			<Td>
				<Span color={inStock ? 'chartreuse' : 'red'}>
					{inStock ? 'In Stock' : 'Sold Out'}
				</Span>
			</Td>
			<Td>{`${price}€`}</Td>
		</tr>
	);
};

export default GameRow;
