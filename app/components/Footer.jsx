import { footer } from "../data/footer";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col justify-center items-center text-black pb-28 pt-28">
          <p className="text-sm font-semibold inline-block">
            {footer.text}
            <span>{footer.emoji}</span>
          </p>
          <p className="text-sm font-semibold inline-block">{footer.textBottom}</p>
        </div>
      </footer>
    </>
  );
}
