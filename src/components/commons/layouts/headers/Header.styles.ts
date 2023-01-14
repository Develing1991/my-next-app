import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import { TbMenu2 } from 'react-icons/tb';
export const HeaderMobile = styled.div`
	display: none;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		display: ${({ hide }) => (hide ? 'flex' : 'none')};
	}
`;

export const MobileLogo = styled.div``;
export const MobileMenu = styled(TbMenu2)`
	font-size: 30px;
	height: 60px;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: block;
	}
`;
export const HeaderLeft = styled.div`
	display: flex;
	flex: 1.5;
	font-weight: 600;
	order: 1;
	@media (max-width: 768px) {
		display: block;
	}
`;
export const Logo = styled.div`
	margin-right: 15px;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;
export const LeftList = styled.ul`
	display: flex;
	@media (max-width: 768px) {
		display: block;
	}
`;
export const LeftItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	margin: 10px 0;
	position: relative;
	&::after {
		content: '';
		display: block;
		width: 1px;
		height: 20px;
		background-color: #ddd;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0px;
		margin: auto;
		@media (max-width: 768px) {
			display: none;
		}
	}
	&:last-child::after {
		display: none;
	}
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	@media (max-width: 768px) {
		border-bottom: 1px solid #ddd;
		border-radius: 5px;
		padding: 15px;
	}
`;

export const HeaderCenter = styled.div`
	flex: 1.5;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	order: 2;
`;
export const FaSearchIcon = styled(FaSearch)`
	color: #474e54;
	left: 25px;
	position: absolute;
	&:hover {
		cursor: pointer;
	}
`;
export const InputItem = styled.input`
	width: 100%;
	height: 20px;
	padding: 10px 10px 10px 45px;
	color: #828c94;
	font-size: 20px;
	margin: 20px;
	border-radius: 5px;
	outline: none;
	border: 1px solid #ddd;
	@media (max-width: 768px) {
		margin: 20px 0px 10 0px;
	}
`;
export const HeaderRight = styled.div`
	flex: 0.8;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	order: 3;
	@media (max-width: 768px) {
		display: block;
	}
`;
