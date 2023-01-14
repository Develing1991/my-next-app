import Head from 'next/head';
// import Image from "next/image";
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>header</header>
			<main>
				<div>view-start</div>
				<code className={styles.code}>aaa</code>
				<section>
					<article />
				</section>
				<div>view-end</div>
			</main>
			<footer>footer</footer>
		</>
	);
}
// 서버사이드 렌더링 og 관련 추가 ↓