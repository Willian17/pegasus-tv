import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GiPc, GiTv, GiSmartphone } from 'react-icons/gi'
import { FaBatteryQuarter, FaBatteryHalf, FaBatteryThreeQuarters, FaBatteryFull } from 'react-icons/fa'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> 
          Pegasus TV

        </title>
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

      <a href="https://api.whatsapp.com/send?phone=14632343959&text=Ol%C3%A1,%20estou%20interessado,%20e%20quero%20fazer%20o%20teste%20gr%C3%A1tis%20de%203%20horas" className={styles.button}>
        Teste Agora
      </a>

      <section className={styles.sectionInfo}>
        <div className={styles.cards}>
        <div className={styles.card}>
          <h1 className={styles.titleCard}>
            Serviços
          </h1>
          <p className={styles.description}>
           Todos canais de TV, Filmes e Séries em HD, apenas com acesso a internet.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=Ol%C3%A1,%20estou%20interessado,%20e%20quero%20fazer%20o%20teste%20gr%C3%A1tis%20de%203%20horas"
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
           A partir de R$35,00 reais mensais, sem fidelidade.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=Ol%C3%A1,%20estou%20interessado,%20e%20quero%20fazer%20o%20teste%20gr%C3%A1tis%20de%203%20horas"
            className={styles.buttonInfo}
            >
            Saiba Mais
          </a>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titleCard}>
            Suporte
          </h1>
          <p className={styles.description}>
            Atendimento rápido e especializado via Whatsapp.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=14632343959&text=Ol%C3%A1,%20estou%20interessado,%20e%20quero%20fazer%20o%20teste%20gr%C3%A1tis%20de%203%20horas"
            className={styles.buttonInfo}
            >
            Saiba Mais
          </a>
        </div>

        </div>
        

      </section>

      <section className={styles.sectionDispositivos}>
        <div>
          <h1 className={styles.titleDispositivo}>A melhor lista IPTV do Brasil</h1>
          <h2 className={styles.subtitleDispositivo}>Compatível com diversos aparelhos</h2>
        </div>

        <div className={styles.cards}>

          <div className={styles.card}>
            <GiTv size="50" color="eccc16"/>
            <h1 className={styles.category}> TV: <span className={styles.detail}> Smart TV, TV BOX e diversas. </span></h1> 
          </div>

          <div className={styles.card}>
            <GiPc size="50"  color="eccc16"/>
            <h1 className={styles.category}> DESKTOP: <span className={styles.detail}>PC, Notebook, Chromecast. </span></h1> 
          </div>

          <div className={styles.card}>
            <GiSmartphone size="50"  color="eccc16"/>
            <h1 className={styles.category}>  SMARTPHONE: <span className={styles.detail}> Android ou IOS </span></h1> 
          </div>

        </div>
        
      </section>

      <section className={styles.sectionPlans}>
        <h1 className={styles.titlePlan}>
          Planos
        </h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.headerPlan}>
              <FaBatteryQuarter color="FDF733" size="100" />
              <h1 className={styles.titleCard}>Mensal</h1>
            </div>
            <ul className={styles.list}>
              <li>GRADE COM + DE 2.000</li>
              <li>QUALIDADE SD/HD/FULL HD</li>
              <li>CONTEÚDOS ONLINE DIGITAL</li>
              <li>1 TELA (CONEXÕES MÁXIMAS)</li>
              <li>MAIS TELAS? CONSULTE</li>
            </ul>
            <h3 className={styles.price}>R$ <span className={styles.numberPrice}>34,99</span></h3>
            <button className={styles.buttonPlan}>Assinar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.headerPlan}>
              <FaBatteryHalf color="FDF733" size="100" />
              <h1 className={styles.titleCard}>TRIMESTRAL</h1>
            </div>
            <ul className={styles.list}>
              <li>GRADE COM + DE 2.000</li>
              <li>QUALIDADE SD/HD/FULL HD</li>
              <li>CONTEÚDOS ONLINE DIGITAL</li>
              <li>1 TELA (CONEXÕES MÁXIMAS)</li>
              <li>MAIS TELAS? CONSULTE</li>
            </ul>
            <h3 className={styles.price}>R$ <span className={styles.numberPrice}>89,99</span></h3>
            <button className={styles.buttonPlan}>Assinar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.headerPlan}>
             <FaBatteryThreeQuarters color="FDF733" size="100" />
              <h1 className={styles.titleCard}>SEMESTRAL</h1>
            </div>
            <ul className={styles.list}>
              <li>GRADE COM + DE 2.000</li>
              <li>QUALIDADE SD/HD/FULL HD</li>
              <li>CONTEÚDOS ONLINE DIGITAL</li>
              <li>1 TELA (CONEXÕES MÁXIMAS)</li>
              <li>MAIS TELAS? CONSULTE</li>
            </ul>
            <h3 className={styles.price}>R$ <span className={styles.numberPrice}>169,99</span></h3>
            <button className={styles.buttonPlan}>Assinar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.headerPlan}>
              <FaBatteryFull color="FDF733" size="100" />
              <h1 className={styles.titleCard}>ANUAL</h1>
            </div>
            <ul className={styles.list}>
              <li>GRADE COM + DE 2.000</li>
              <li>QUALIDADE SD/HD/FULL HD</li>
              <li>CONTEÚDOS ONLINE DIGITAL</li>
              <li>1 TELA (CONEXÕES MÁXIMAS)</li>
              <li>MAIS TELAS? CONSULTE</li>
            </ul>
            <h3 className={styles.price}>R$ <span className={styles.numberPrice}>319,99</span></h3>
            <button className={styles.buttonPlan}>Assinar</button>
          </div>


        </div>
      </section>

    </div>
  )
}
