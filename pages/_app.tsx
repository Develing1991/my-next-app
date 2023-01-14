import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { resetStyles, commonStyles } from '../src/commons/styles/globalStyles';
import LayoutIndex from '../src/components/commons/layouts';

export default function App({ Component, pageProps }: AppProps) {
	const aaa = './headers/default';
	return (
		<>
			<Global styles={resetStyles} />
			<Global styles={commonStyles} />
			<LayoutIndex>
				<Component {...pageProps} />
			</LayoutIndex>
		</>
	);
}
