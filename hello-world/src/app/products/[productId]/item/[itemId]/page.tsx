export default function itemDetails({
    params,
  }: {
    params: { itemId: string };
  }) {
    return <h1>item ID 1 Details {params.itemId}</h1>;
  }