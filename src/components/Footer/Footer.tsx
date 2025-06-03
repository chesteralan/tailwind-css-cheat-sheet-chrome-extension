import PackageJson from "../../../package.json";

export const Footer = () => {
  return <div className="flex flex-col md:flex-row gap-2 justify-between border-t py-3 px-4 text-sm">
  <div className="flex flex-col md:flex-row md:gap-4 gap-2 text-center md:text-left">
  <a
      className="text-sm underline"
      href="https://github.com/chesteralan/tailwind-css-cheat-sheet-chrome-extension"
      target="_blank"
    >
      Tailwind CSS Cheat Sheet v{PackageJson.version}
    </a>
    <a
      className="text-sm underline"
      href="https://chromewebstore.google.com/detail/tailwind-css-cheat-sheet/fndbnfnjnhldjeppmglocapmfjdjkleh"
      target="_blank"
    >
      Install Chrome Extension
    </a>
  </div>
  <div className="flex flex-col md:flex-row md:gap-4 text-center md:text-right gap-2">
    <div>
    Developed by{" "}
    <a
      href="https://www.alchie.cc/"
      className="underline font-bold"
      target="_blank"
    >
      Alchie Tagudin
    </a>
    </div><a href="https://www.paypal.com/ncp/payment/EHEL2MAZ8DA36" target="_blank" className="text-sm underline">Buy Me A Coffee</a>
  </div>
</div>
};

export default Footer;