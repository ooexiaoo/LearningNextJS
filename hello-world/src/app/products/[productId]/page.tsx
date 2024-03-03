export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>product ID 1 Details {params.productId}</h1>;
}