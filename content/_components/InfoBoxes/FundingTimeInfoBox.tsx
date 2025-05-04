import InfoBox from "./InfoBox.tsx";

const styles = {
  body: {
    marginBottom: "0",
  },
};
export default function ({ text }) {
  return (
    <InfoBox title={text.info_currentFundingRound_title}>
      <p style={styles.body}>{text.info_currentFundingRound_body}</p>
    </InfoBox>
  );
}
