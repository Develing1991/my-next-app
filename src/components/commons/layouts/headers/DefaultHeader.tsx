import { useState } from 'react';
import * as S from './Header.styles';
import * as C from '../commons/Common.styles';

export default function DefaultHeader() {
	const [hide, setHide] = useState(false);
	const aaa = () => {
		setHide(prev => !prev);
	};
	return (
		<>
			<C.Header>
				<C.Inner>
					<S.HeaderWrapper hide={hide}>
						<S.HeaderCenter className="center-section">
							<S.FaSearchIcon />
							<S.InputItem type="text" />
						</S.HeaderCenter>
						<S.HeaderLeft>
							<S.Logo>
								<img src="/images/react_logo.png" width="80" alt="로고" />
							</S.Logo>
							<S.LeftList>
								<S.LeftItem>커뮤니티</S.LeftItem>
								<S.LeftItem>스토어</S.LeftItem>
								<S.LeftItem>자유게시판</S.LeftItem>
							</S.LeftList>
						</S.HeaderLeft>
						<S.HeaderRight className="right-section">
							<C.BaseButton>로그인</C.BaseButton>
							<C.BaseButton2>회원가입</C.BaseButton2>
						</S.HeaderRight>
					</S.HeaderWrapper>
				</C.Inner>

				<S.HeaderMobile hide={!hide}>
					<S.MobileLogo>
						<img src="/images/react_logo.png" width="80" alt="로고" />
					</S.MobileLogo>
					<S.MobileMenu onClick={aaa} />
				</S.HeaderMobile>
			</C.Header>
		</>
	);
}
