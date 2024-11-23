export default function LoadingRankPage() {
  return (
    <div
      className="pointer-events-none"
      style={{ height: "calc(100vh - 400px)" }}
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="pointer-events-auto animate-spin text-4xl">LOADING</div>
      </div>
    </div>
  );
}
