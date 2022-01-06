import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Sidebar from './Sidebar';

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Eric Whitehead - Developer, Writer",
        desc: "I've been building websites for 2 consecutive years. Looking for my first front-end job.",
        image: "/ico/triangle.svg",
        type: "website",
        ...customMeta,
    };

    return (
        <div className="h-screen bg-bg-yellowgrad text-black dark:bg-bg-bluegrad dark:text-white">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.desc} name="description" />
                <meta
                    property='og:url'
                    content={'/${router.asPath}'} //add website here later
                />
                <link
                    rel="canonical"
                    href={`/${router.asPath}`} //   ".. here later "
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Eric Whitehead" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@et195g" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <main><noscript>This app requires JavaScript!</noscript></main>
            <Sidebar />
            {children}
        </div>
    )
}