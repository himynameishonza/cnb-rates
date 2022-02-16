import Head from 'next/head';

const HeadMeta = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="utf-8" />
            <title>Kurzovní lístek ČNB</title>
            <meta property="og:title" content="Kurzovní lístek ČNB" />
            <meta
                name="description"
                content="Homework and showcase for Momence.com by himynameishonza"
            />
            <meta
                property="og:description"
                content="Homework and showcase for Momence.com by himynameishonza"
            />
            <meta property="og:image" content="/static/og-image.jpg" />
            <meta property="og:site_name" content="Kurzovní lístek ČNB" />
            <meta property="og:type" content="website" />
            <meta name="author" content="himynameishonza" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta property="og:type" content="website" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#603cba" />
            <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#603cba" />
            <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
};

export default HeadMeta;
