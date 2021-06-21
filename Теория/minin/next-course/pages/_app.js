import '../styles/main.scss'

// Основной компонент нашего приложения
export default function MyApp({ Component, PageProps }) {
  // Component - страница которую мы отображем в зависимости от URL адреса

  return <Component {...PageProps} />;
};