import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <Head>
        <title>Correlation ou Causalite</title>
        <meta name="description" content="A TinaCMS Application" />
      </Head>
      <header>
        <div style={{
          backgroundColor: 'lightblue',
          padding: '1rem',
        }}>
          <Link href="/">
            <a>Accueil</a>
          </Link>
          {' | '}
          <Link href="/about">
            <a>A propos</a>
          </Link>
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  )
}
