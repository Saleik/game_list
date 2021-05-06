import FilterGameTable from '../components/FilterGameTable';
import GlobalStyle from '../styles/globalStyle';
import { Container, Logo } from './style';
import brand from '../assets/logo.svg';
import { gameList } from '../data/data';
import Techno from '../components/Techno';

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Logo>
					<img src={brand} alt='logo' width='50' height='70' />
				</Logo>
				<h1>Video Game List</h1>
				<FilterGameTable gameList={gameList} />
				<Techno
					paths={[
						'https://img.icons8.com/ios-filled/50/000000/typescript.png',
						'https://img.icons8.com/ios/50/000000/react-native.png',
					]}
				/>
			</Container>
		</>
	);
}

export default App;
