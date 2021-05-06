import styled from 'styled-components';

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;

	th,
	td {
		text-align: left;
		border: 0.1rem solid #000;
	}

	tr :nth-child(even) {
		background-color: lightgray;
	}
`;

export const TableContainer = styled.div`
	min-height: 20rem;
	min-width: 30rem;
`;
