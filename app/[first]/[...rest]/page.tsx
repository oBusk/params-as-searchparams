const RestPage = ({
  params,
  searchParams,
}: {
  params?: { first: string; rest: string[] };
  searchParams?: URLSearchParams;
}) => {
  return (
    <>
      <h1>Rest</h1>
      <pre>{JSON.stringify({ params, searchParams }, null, 2)}</pre>
    </>
  );
};

export default RestPage;
