import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
	<Html lang="en">
		<Head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<link rel="icon" type="image/x-icon" href="/images/favicon.png" />
			{/** WebFont */}
			{/** stylesheets */}
			{/** scripts */}
		</Head>
		<body className="my-body-class">
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
