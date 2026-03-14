import Chip from "./chip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: Readonly<ChipContainerProps>) {
  return (
    <div className="flex my-3 gap-2 flex-wrap">
      {textArr.map((it) => (
        <Chip key={it} content={it} />
      ))}
    </div>
  );
}
