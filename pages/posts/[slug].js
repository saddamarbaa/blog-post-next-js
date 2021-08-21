/** @format */

import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name='description' content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</Fragment>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	// get data for the single post
	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	// perorate all the path
	const postFilenames = getPostsFiles();

	// first solution
	// generate array of all path object

	// const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, "")); // removes the file

	// return {
	// 	paths: slugs.map((slug) => ({ params: { slug: slug } })),
	// 	fallback: false,
	// };

	// second solution
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default PostDetailPage;
