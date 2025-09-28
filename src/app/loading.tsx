const style = { height: "calc(100vh - 400px)" };

export default function LoadingPage() {
  return (
    <div className="pointer-events-none" style={style}>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="pointer-events-auto animate-spin text-4xl">LOADING</div>
      </div>
    </div>
  );
}
