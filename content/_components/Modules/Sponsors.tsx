import CccflSVG from "../Images/Logos/CccflSVG.tsx";
import CccSVG from "../Images/Logos/CccSVG.tsx";
import ChaotikumSVG from "../Images/Logos/ChaotikumSVG.tsx";
import FnordserverSVG from "../Images/Logos/FnordserverSVG.tsx";
import WauHollandPNG from "../Images/Logos/WauHollandPNG.tsx"

const styles = {
  container: {
    backgroundColor: "#101728",
  },
  lgbtq: {
    width: "100%",
    height: "20px",
    background:
      "linear-gradient(180deg, #FE0000 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
  },
  trans: {
    width: "100%",
    height: "20px",
    background:
      "linear-gradient(180deg, #5BCEFA 20%, #F5A9B8 20%, 40%, #FFFFFF 40%, 60%, #F5A9B8 60%, 80%, #5BCEFA 80%)",
  },
};

export default ({ text }) => (
  <section>
    <div style={styles.container} className="display-row">
      <div className={"twentyFive"}>
        <h2>{text.sponsors_title1}</h2>
      </div>
      <div className={"twentyFive"}>
        <a
          href={"https://www.ccc.de/"}
          aria-label="Visit the site of our funding sponsor: The Chaos Computer Club."
        >
          <CccSVG />
        </a>
      </div>
      <div className={"twentyFive"}>
        <a
          href={"https://c3fl.de/"}
          aria-label="Visit the site of our organisation: The Chaos Computer Club Flensburg e.V."
        >
          <CccflSVG />
        </a>
      </div>
      <div className={"twentyFive"}>
        <a
          href={"https://chaotikum.org/"}
          aria-label="Visit the site of our partner organisation: The Chaotikum."
        >
          <ChaotikumSVG />
        </a>
      </div>
    </div>
    <div style={styles.container} className="display-row">
      <div className={"twentyFive"}>
        <h2>{text.sponsors_title2}</h2>
      </div>
      <div className={"twentyFive"}>
        <a
          href={"https://www.wauland.de/"}
          aria-label="Visit the site of our sponsor: Wau Holland Stiftung."
        >
          <WauHollandPNG />
        </a>
      </div>
            <div className={"twentyFive"}>
        <a
          href={"https://fnordserver.eu/"}
          aria-label="Visit the site of our tech and infrastruture sponsor: FnordServer."
        >
          <FnordserverSVG />
        </a>
      </div>
    </div>
  </section>
);
