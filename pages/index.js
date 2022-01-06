import Head from 'next/head'
import ContainerBlock from '../components/Containerblock'
import Menu from '../components/Menu.js'

export default function Home() {
  return (
    <ContainerBlock
      title="Eric Whitehead - Developer, Writer, Creator"
      description="Building from Vercel boilerplate Next.js and Tailwindcss"
    >
    <Menu />
    </ContainerBlock>
  );
}
