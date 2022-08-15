import logoSvg from "./logo.svg"; // Tell webpack this JS file uses this image

export default function Logo() {
  return <img src={logoSvg} width="82" height="89" alt="Логотип" />;
}
