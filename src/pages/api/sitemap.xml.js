import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  return getServerSideSitemap(ctx, [
    { loc: 'https://dibyansu.vercel.app/', lastmod: new Date().toISOString() },
  ]);
}

export default function Sitemap() {}
