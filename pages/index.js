import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>klickagenda</title>
        <meta name="description" content="Receba seus agendamentos facilmente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <section className={styles.mainLogo}>
          <Image src="/klickagenda.svg" alt="Vercel Logo" width={267} height={40} />
      </section>
      
      <main className={styles.main}>
        <div className={styles.headline}>
          <h1 className={styles.description}>Ajude-nos a construir a plataforma perfeita para receber seus agendamentos e <strong>ganhe gratuitamente uma assinatura vitalícia!</strong></h1>
        </div>

        <a href="https://forms.gle/UdygfxuPGyYCgbK67" target={'_blank'} className={styles.botaoChamada} rel="noreferrer">Responder questionário</a>

        <section className={styles.howcontainer}>
          <h2>Como a plataforma irá funcionar:</h2>

          <dl className={styles.howgridcontainer}>
            <div className={styles.howgrid}>
              <dt>1 - Crie sua agenda</dt>
              <dd>Informe ao klickagenda sua disponibilidade de horários e ele fará o trabalho por você.</dd>
            </div>            
            
            <div className={styles.howgrid}>
              <dt>2 - Compartilhe seu link</dt>
              <dd>Coloque o seu link nas suas redes sociais ou envie aos seus clientes.</dd>
            </div>
            
            <div className={styles.howgrid}>
              <dt>3 - Receba os agendamentos</dt>
              <dd>Eles escolhem um horário disponível, realizam o pagamento (caso você deseje) e o serviço será agendado.</dd>
            </div>
          </dl>          
        </section>

        <section className={styles.formcontainer}>
          <h2>O que fazer para usar o sistema de graça pra sempre?</h2>
      
          <p>É simples: clique no link abaixo para responder a um rápido questionário. 
Você terá a oportunidade de nos ajudar a fazer a plataforma ideal para a sua realidade e ainda ganhará uma assinatura vitalícia.
Aproveite agora essa oferta, ela estará disponível por um curto intervalo de tempo.</p>

        <a href="https://forms.gle/UdygfxuPGyYCgbK67" target={'_blank'} className={styles.botaoChamada} rel="noreferrer">Responder questionário</a>
        </section>

        <section className={styles.formcontainer}>
          <h2>Por que estamos fazendo isso?</h2>
      
          <p>Acreditamos que nada melhor que pessoas como você, que precisam dessa solução, nos ajudando a construir a melhor ferramenta do mercado.
Ao nos ajudar, você poderá usá-la gratuitamente para sempre e iremos, com a sua ajuda, fazer a melhor plataforma para vender para outras pessoas que precisam dessa solução.
</p>
        </section>

        

        {/* <p>Ofereça a melhor experiência de agendamento para o seu cliente e use seu tempo da melhor forma: prestando seu serviço!</p> */}
      </main>

      <footer className={styles.footer}>
        <a href="#">
          <span className={styles.logo}>
            <Image src="/klickagenda-full.svg" alt="Vercel Logo" width={200} height={35} />
          </span>
        </a>
      </footer>
    </div>
  )
}
