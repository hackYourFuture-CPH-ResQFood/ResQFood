export default async function StoreDetailPage({ params }) {
  const { id } = await params;

  return <h1>Store detail for {id} — coming in Week 2</h1>;
}