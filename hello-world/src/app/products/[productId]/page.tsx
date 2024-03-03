import { notFound } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: { productId: string; };
}) {
  if (parseInt(params.productId) > 500) {
    notFound();
  }
  return (
    <h1>
      {" "}
      Review {params.productId} product ID
    </h1>
  );
}
