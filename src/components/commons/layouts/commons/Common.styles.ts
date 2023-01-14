import styled from '@emotion/styled';
export const Header = styled.header`
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	position: relative;
	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;
export const BaseButton = styled.button`
	width: 100%;
	margin: 0 6px;
	background-color: #35c5f0;
	padding: 10px;
	border-radius: 5px;
	border: none;
	color: #fff;
	outline: none;
	font-weight: 700;
	&:hover {
		cursor: pointer;
		background-color: #fff;
		border: 1px solid #35c5f0;
		color: #35c5f0;
	}
	@media (max-width: 768px) {
		display: block;
		margin: 10px auto;
	}
`;
export const BaseButton2 = styled.button`
	width: 100%;
	margin: 0 5px;
	padding: 10px;
	border-radius: 5px;
	border: none;
	font-weight: 700;
	background-color: #fff;
	border: 1px solid #35c5f0;
	color: #35c5f0;
	&:hover {
		cursor: pointer;
		background-color: #35c5f0;
		color: #fff;
		outline: none;
	}
	@media (max-width: 768px) {
		display: block;
		margin: 10px auto;
	}
`;
