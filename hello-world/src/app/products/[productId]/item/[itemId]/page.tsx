import { notFound } from "next/navigation";

export default function ItemDetails({
  params,
}: {
  params: { productId: string; itemId: string };
}) {
  if (parseInt(params.itemId) > 500) {
    notFound();
  }
  return (
    <h1>
      Review {params.itemId} product ID 1 Details {params.productId}
    </h1>
  );
}
