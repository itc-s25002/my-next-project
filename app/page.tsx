import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";

import ButtonLink from "./_components/ButtonLink";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_components/NewsList";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーで世界を変える</h1>
          <p className={styles.description}>
            私達は市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          loading="eager"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>お知らせ</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
