import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pegasus TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>
          Pegasus  <span className={styles.tv}>TV</span>
        </h1>
        <div className={styles.menu}>
        </div>
      </header>

      

      <main className={styles.main}>
       <video 
        autoPlay 
        loop
        muted
        style={{
          position: "relative",
          width: "100vw",
          left: 0,
          top: 0,
        }}
      >
        <source src="/video.mp4" type="video/mp4"></source>

       </video>

       <img src="https://www.sorteiefb.com.br/images/promocoes/722491.900x350.jpg" alt=""/>
      </main>
      <h1 className={styles.title}>
        solicite um <br/> teste grátis
      </h1>

      <a href="https://api.whatsapp.com/send?phone=14632343959&text=ol%C3%A1,%20estou%20interessado%20no%20servi%C3%A7o%20IPTV%20da%20Pegasus%20TV" className={styles.button}>
        Teste Grátis
      </a>

      <section className={styles.cards}>
        <div className={styles.card}>
          <h1 className={styles.titleCard}>
            Serviços
          </h1>
          <p className={styles.description}>
           Canais de TV Fechada e Aberta em HD, Filmes e Séries pelo menor preço.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=ol%C3%A1,%20estou%20interessado%20no%20servi%C3%A7o%20IPTV%20da%20Pegasus%20TV"
            className={styles.buttonInfo}
            >
            Saiba Mais
          </a>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titleCard}>
            Preços
          </h1>
          <p className={styles.description}>
           A partir de R$35,00 reais mensais, você poderá usufruir do melhor do IPTV na tela de sua TV, smartphone e TVBox.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=ol%C3%A1,%20estou%20interessado%20no%20servi%C3%A7o%20IPTV%20da%20Pegasus%20TV"
            className={styles.buttonInfo}
            >
            Saiba Mais
          </a>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titleCard}>
            Clientes
          </h1>
          <p className={styles.description}>
            Só aqui você tem qualidade, estabilidade e suporte.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=ol%C3%A1,%20estou%20interessado%20no%20servi%C3%A7o%20IPTV%20da%20Pegasus%20TV"
            className={styles.buttonInfo}
            >
            Saiba Mais
          </a>
        </div>

      </section>

    </div>
  )
}
