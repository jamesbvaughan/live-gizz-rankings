import { AccountButtons } from "./AccountButtons";

export function Footer() {
  return (
    <footer className="mt-10 space-y-10">
      <hr className="border-red" />

      <div className="my-10 flex justify-between text-muted">
        <div>
          made by{" "}
          <a href="https://jamesbvaughan.com" className="no-underline">
            james
          </a>
        </div>

        <AccountButtons />
      </div>
    </footer>
  );
}
