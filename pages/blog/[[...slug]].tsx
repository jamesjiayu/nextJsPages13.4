import { useRouter } from 'next/router';
export default function Page() {
  const router = useRouter();
  return <p>Post slug: {router.query.slug}</p>;
}
