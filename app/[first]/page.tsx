const SegmentPage = ({
  params,
  searchParams,
}: {
  params?: { first: string };
  searchParams?: URLSearchParams;
}) => {
  return (
    <>
      <h1>Segment</h1>
      <pre>{JSON.stringify({ params, searchParams }, null, 2)}</pre>
    </>
  );
};

export default SegmentPage;
