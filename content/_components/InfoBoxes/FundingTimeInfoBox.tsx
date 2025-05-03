const styles = {
  body: {
    marginBottom: "0",
  },
};
export default function ({ ...props }) {
  return (
    <props.comp.InfoBoxes.InfoBox
      title={props.text.info_currentFundingRound_title}
    >
      <p style={styles.body}>{props.text.info_currentFundingRound_body}</p>
    </props.comp.InfoBoxes.InfoBox>
  );
}
