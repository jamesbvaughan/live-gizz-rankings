import { AccountButtons } from "./AccountButtons";

export function Footer() {
  return (
    <footer>
      <hr className="my-10 border-red" />

      <div className="flex justify-between text-muted">
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
