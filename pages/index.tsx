import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout from "@components/Layout/Layout";
import MainHeader from "@components/Header/MainHeader";
import ProductList from "@components/ProductList/ProductList";

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/avo`,
	);
	const { data: productList }: TAPIAvoResponse = await response.json();

	return {
		props: {
			productList,
		},
	};
};

const HomePage = ({ productList }: { productList: TProduct[] }) => (
	<Layout>
		<MainHeader />
		<section>
			<Link href="/yes-or-no">
				<a>Should I eat an avocado today?</a>
			</Link>
		</section>
		<ProductList products={productList} />
		<style jsx>{`
			section {
				text-align: center;
				margin-bottom: 2rem;
			}
		`}</style>
	</Layout>
);

export default HomePage;
