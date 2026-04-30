import { Fade } from "@/components/common/Fade";
import { Grid } from "./grid";

interface FeatureListProps<T> {
  items: T[];
  columns?: 2 | 3 | 4;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function FeatureList<T>({
  items,
  columns = 3,
  renderItem,
}: FeatureListProps<T>) {
  if (!items?.length) return null;

  return (
    <Grid columns={columns}>
      {items.map((item, index) => (
        <Fade key={index} delay={index * 0.08} className="h-full">
          {renderItem(item, index)}
        </Fade>
      ))}
    </Grid>
  );
}
