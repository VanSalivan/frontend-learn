/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import '../styles/main.scss'

// Основной компонент нашего приложения
// Component - страница которую мы отображем в зависимости от URL адреса
export default ({ Component, pageProps }) => (
  <Component {...pageProps} />  
)