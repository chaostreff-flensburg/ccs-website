import IconSignpostSVG from "../Images/IconSignpostSVG.tsx";
import InfoBox from "./InfoBox.tsx";

const styles = {
  body: {
    marginBottom: "0",
  },
  icon: {
    width: "30%",
    height: "auto",
    alignSelf: "flex-end",
    marginLeft: 80,
  },
};
export default function ({ text }) {
  return (
    <InfoBox title={text.info_currentFundingRound_title}>
      <div className={"display-row"}>
        <p style={styles.body}>{text.info_currentFundingRound_body}</p>
        <div style={styles.icon}>
          <IconSignpostSVG />
        </div>
      </div>
    </InfoBox>
  );
}
