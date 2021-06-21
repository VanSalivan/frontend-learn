import router, { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function IdPost() {
  const router = useRouter();
  console.log(router)

  return (
    <MainLayout>
      <h1>Posts page {router.query.id}</h1>
    </MainLayout>
  )
};