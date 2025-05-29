import Image from "../Image.tsx";
import OutlineButton from "../Buttons/OutlineButton.tsx";
import IconPaperSVG from "../Images/IconPaperSVG.tsx";
import SixtyFourtyLayout from "../Layouts/SixtyFourtyLayout.tsx";

export default ({ text }) => (
  <>
    <SixtyFourtyLayout
      title={text.impuls_heading1}
      sixtyProcentSide="left"
      contentLeft={
        <div>
          <p>
            {text.impuls_text1a}
            <a href={"/#scholarhip-terms"} className={"link-inside-text"}>
              {text.impuls_conditions}
            </a>
            {text.impuls_text1b}
          </p>
          <p>{text.impuls_text12}</p>
        </div>
      }
      contentRight={
        <Image
          src="/media/testbild.jpg"
          alt="Ein testbild wird mit einem Projektor an eine Steinwand projeziert"
          copyrightHolder="Leah Oswald"
          ccType="CC BY 2.0"
          link="https://www.flickr.com/photos/leahoswald/54461243277/in/album-72177720325186951"
        />
      }
    />
    <div id="hacker-innen-ethik">
      <SixtyFourtyLayout
        title={text.impuls_heading2}
        contentRight={
          <div>
            <p>{text.impuls_text2}</p>
            <p>{text.impuls_text22}</p>
          </div>
        }
        sixtyProcentSide="right"
        contentLeft={
          <Image
            src="/media/38514211235_cf83decce2_c.jpg"
            alt="Beleuchtete Glashalle in Leipzig"
            copyrightHolder="Leah Oswald"
            link="https://www.flickr.com/photos/leahoswald/38514211235/in/album-72157664143705788/"
            ccType="CC BY 2.0"
          />
        }
        addOn={
          <div style={{ paddingBottom: 20 }}>
            <h3>{text.hackerEthic_title}</h3>
            <ul>
              <li>{text.hackerEthic_point1}</li>
              <li>{text.hackerEthic_point2}</li>
              <li>{text.hackerEthic_point3}</li>
              <li>{text.hackerEthic_point4}</li>
              <li>{text.hackerEthic_point5}</li>
              <li>{text.hackerEthic_point6}</li>
              <li>{text.hackerEthic_point7}</li>
              <li>{text.hackerEthic_point8}</li>
            </ul>
          </div>
        }
      />
    </div>
    <SixtyFourtyLayout
      title={text.impuls_heading3}
      contentRight={
        <div>
          <p>{text.impuls_text3}</p>
          <div style={{ maxWidth: 300 }}>
            <OutlineButton link={"/publication/page/1/"}>
              {text.impuls_buttonText}
            </OutlineButton>
          </div>
        </div>
      }
      sixtyProcentSide="right"
      contentLeft={<IconPaperSVG />}
    />
  </>
);
