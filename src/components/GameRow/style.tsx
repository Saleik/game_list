import styled from 'styled-components';

interface SpanProps {
	color: string;
}
export const Span = styled.span<SpanProps>`
	color: ${({ color }) => color};
` as React.FunctionComponent<SpanProps>;

export const Td = styled.td`
	padding: 0.2rem 0.5rem;
`;
