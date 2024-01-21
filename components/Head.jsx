import Head from "next/head";
import { useTheme } from "styled-components";

export default function HeadTag(props) {
	const theme = useTheme();
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="theme-color" content={theme.colors.branding} /> {/* <!-- Chrome, Firefox OS and Opera -->*/}
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} /> {/* <!-- Windows Phone -->*/}
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} /> {/*<!-- iOS Safari -->*/}
			<meta name="description" content={props.metaDescription} />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
			<meta name="keywords" content={props.keywords} />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="manifest" href="/site.webmanifest"></link>
		</Head>
	);
}
