import { Fade } from "@/components/common/Fade";
import { GridSection } from "./gridSection";

interface Props<T> {
  items: T[];
  columns?: 2 | 3 | 4;
  renderItem: (item: T, index: number) => React.ReactNode;
  footer?: React.ReactNode;
  animationDelayStep?: number;
}

export function GridList<T>({
  items,
  columns = 2,
  renderItem,
  footer,
  animationDelayStep = 0.08,
}: Props<T>) {
  if (!items.length) return null;

  return (
    <GridSection columns={columns} footer={footer}>
      {items.map((item, index) => (
        <Fade key={index} direction="up" delay={index * animationDelayStep}>
          {renderItem(item, index)}
        </Fade>
      ))}
    </GridSection>
  );
}
