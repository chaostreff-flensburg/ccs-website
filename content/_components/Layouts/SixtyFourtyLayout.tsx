interface SixtyFourtyProps {
  title: string;
  contentLeft: React.ReactNode;
  contentRight: React.ReactNode;
  sixtyProcentSide: PositionType;
  addOn?: React.ReactNode;
}

type PositionType = "left" | "right";

const styles = {
  container: {
    gap: 50,
  },
};

export default ({
  title,
  contentLeft,
  contentRight,
  sixtyProcentSide,
  addOn,
}: SixtyFourtyProps) => (
  <>
    <h2>{title}</h2>
    <div className={"display-row"} style={styles.container}>
      <div className={sixtyProcentSide === "left" ? "max-60" : ""}>
        {contentLeft}
      </div>
      <div className={sixtyProcentSide === "right" ? "max-60" : ""}>
        {contentRight}
      </div>
    </div>
    {addOn}
  </>
);
