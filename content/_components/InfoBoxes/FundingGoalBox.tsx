import IconSignpostSVG from "../Images/IconSignpostSVG.tsx";
import InfoBox from "./InfoBox.tsx";
import OutlineButton from "../Buttons/OutlineButton.tsx"

const styles = {
  button: {
    width: "200px",
    "align-self": "end",
  },
  container: {
    gap: "10px",
    display: "flex",
    "flex-direction": "column",
  },
  progressContainer: {
    background: "#f8f9fa",
    width: "100%",
    padding: "2px",
    "border-radius": "5px",
  },
  progressBar: (percentage: number) => ({
    background: "rgba(124, 20, 38, 1)",
    width: `${percentage}%`,
    height: "30px",
    "border-radius": "5px",
  }),
};

export default function FundingInfoBox({ funding }) {
  if (!funding) {
    return null;
  }
  const { fundedAmount, goal, percentage } = funding.funding;

  return (
    <InfoBox title="Mach das nächste Jahr möglich!">
      <div style={styles.container}>
        <p>
          Für das nächste Jahr ist unser Ziel, komplett auf eigenen Beinen zu stehen. 
          Von den insgesamt {goal} für ein komplettes Jahr haben wir bisher {fundedAmount} gesammelt. 
          Deine Spende macht den Unterschied! Unterstütze freies Wissen und Forschung, die die Gesellschaft weiterbringt!
        </p>

        <div style={styles.progressContainer}>
          <div style={styles.progressBar(percentage)}><p className="text-center">{percentage}%</p></div>
        </div>
        <a href="https://chaos-stipendien.de/about/#donate" class="btn btn-light" style={styles.button}>Jetzt Spenden!</a>
      </div>

    </InfoBox>
  );
}
