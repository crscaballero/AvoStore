import { AppProps } from "next/app";
import Head from "next/head";

import "semantic-ui-css/semantic.min.css";
import "../global.css";

// export const reportWebVitals = (metric) => {
//   console.log('reportWebVitals:metric:', metric);
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
	// Aditional props
	// Aditional layout
	// Manejar errores - componentDidCatch
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>AvoStore</title>
				{/* WebFont */}
				{/* stylesheets */}
				{/* scripts */}
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
