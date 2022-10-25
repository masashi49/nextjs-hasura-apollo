import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    children: ReactNode
    title: string
}

export const Layout: VFC<Props> = ({ children, title = "welcome to Next.js" }) => {
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <header>
                <nav>
                    <div>
                        <div>
                            <Link href="/">
                                <a
                                    data-testid="home-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    Home
                                </a>
                            </Link>
                            <Link href="/local-state-a">
                                <a
                                    data-testid="makevar-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    makeVar
                                </a>
                            </Link>
                            <Link href="/hasura-main">
                                <a
                                    data-testid="fetchpolicy-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    fetchPolicy(Hasura)
                                </a>
                            </Link>
                            <Link href="/hasura-crud">
                                <a
                                    data-testid="crud-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    CRUD(Hasura)
                                </a>
                            </Link>
                            <Link href="/hasura-ssg">
                                <a
                                    data-testid="ssg-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    SSG+ISR(Hasura)
                                </a>
                            </Link>
                            <Link href="/hooks-memo">
                                <a
                                    data-testid="memo-nav"
                                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                                >
                                    custom hook + memo
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
                <a
                    className="flex items-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    )
}
