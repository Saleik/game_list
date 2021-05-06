import { Ul } from './style';

type Props = {
	paths: string[];
};
const Techno = ({ paths }: Props) => {
	return (
		<div>
			<Ul>
				{paths.map((p) => (
					<li>
						<img src={p} alt='logo' />
					</li>
				))}
			</Ul>
		</div>
	);
};

export default Techno;
