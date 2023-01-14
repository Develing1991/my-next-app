import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const DefineLayout = [
	{
		path: '/',
		componentPath: [dynamic(async () => await import('./headers/DefaultHeader')), null, dynamic(async () => await import('./footers/DefaultFooter'))]
	},
	{
		path: '/boards',
		componentPath: [dynamic(async () => await import('./headers/BoardsHeader')), null, dynamic(async () => await import('./footers/BoardsFooter'))]
	}
];

interface IProps {
	children: JSX.Element;
}
export default function LayoutIndex({ children }: IProps) {
	const router = useRouter();
	const { componentPath } = DefineLayout.find(layout => {
		const path = router.asPath.split('/')[1];

		if (!path) {
			return DefineLayout[0];
		}
		return layout.path === `/${path}`;
	});
	const [Header, , Footer] = componentPath;
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
}
