import Head from 'next/head'
import styles from '../styles/Form.module.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

export default function Form() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmid: 'AW-984854375'
    }
    
    TagManager.initialize(tagManagerArgs)
    
  }, [])
  return (
    <div>  
      <iframe className={styles.form} src="https://docs.google.com/forms/d/e/1FAIpQLSccokLxgZRGzaDw7sIdm5P2-5qQCvK93sm53qb4er2I-KdQXg/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
    </div>
  )
}