import Head from 'next/head'

export default function MetaTags({ title="Next-Fire", description="sample desc", image="https://github.com/fireship-io/next-firebase-course/blob/main/components/Metatags.js"}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@not_a_user" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    );
}