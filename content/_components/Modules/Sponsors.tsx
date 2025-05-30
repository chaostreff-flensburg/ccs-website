import CccflSVG from "../Images/Logos/CccflSVG.tsx";
import CccSVG from "../Images/Logos/CccSVG.tsx";
import ChaotikumSVG from "../Images/Logos/ChaotikumSVG.tsx";
import FnordserverSVG from "../Images/Logos/FnordserverSVG.tsx";

const styles = {
  container: {
    backgroundColor: "#101728",
  },
  lgbtq: {
    width: "100%",
    height: 20,
    background:
      "linear-gradient(180deg, #FE0000 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
  },
  trans: {
    width: "100%",
    height: 20,
    background:
      "linear-gradient(180deg, #5BCEFA 20%, #F5A9B8 20%, 40%, #FFFFFF 40%, 60%, #F5A9B8 60%, 80%, #5BCEFA 80%)",
  },
};

export default ({ text }) => (
  <section>
    <div style={styles.container} className="display-row">
      <div className={"twentyFive"}>
        <a href={"https://www.ccc.de/"}>
          <CccSVG />
        </a>
      </div>
      <div className={"twentyFive"}>
        <a href={"https://c3fl.de/"}>
          <CccflSVG />
        </a>
      </div>
      <div className={"twentyFive"}>
        <a href={"https://chaotikum.org/"}>
          <ChaotikumSVG />
        </a>
      </div>
      <div className={"twentyFive"}>
        <a href={"https://fnordserver.eu/"}>
          <FnordserverSVG />
        </a>
      </div>
    </div>
  </section>
);
