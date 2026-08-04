const colorMap = {
  "edgy-black": {
    primary: "text-white bg-edgy-black",
    secondary: "text-edgy-black bg-white border border-edgy-black",
  },
  "normal-green": {
    primary: "text-white bg-normal-green",
    secondary: "text-normal-green bg-white border border-normal-green",
  },
  "black-green": {
    primary: "text-white bg-black-green",
    secondary: "text-black-green bg-white border border-black-green",
  },
  "sahara-green": {
    primary: "text-white bg-sahara-green",
    secondary: "text-sahara-green bg-white border border-sahara-green",
  },
  "jungle-green": {
    primary: "text-white bg-jungle-green",
    secondary: "text-jungle-green bg-white border border-jungle-green",
  },
} as const;

type BaseColor = keyof typeof colorMap;
type ButtonType = "primary" | "secondary";

export default function Button({
  children,
  type = "primary",
  baseColor = "edgy-black",
}: {
  children: React.ReactNode;
  type?: ButtonType;
  baseColor?: BaseColor;
}) {
  const colorStyles = colorMap[baseColor][type];
  const styles = `${colorStyles} h-12 px-10 rounded-xl text-sm`;

  return <button className={styles}>{children}</button>;
}
