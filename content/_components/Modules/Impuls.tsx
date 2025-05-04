export default ({ ...props }) => (
  <>
    <h2 class="text-primary text-center">{props.text.impuls_title}</h2>
    <props.comp.Layouts.TextImage
      title={props.text.impuls_heading1}
      text={props.text.impuls_text1}
      textPosition="left"
      image={
        <props.comp.Image
          src="/media/27667957447_5137ae86e8_c.jpg"
          alt="Junger Mensch mit VR Brille und Kopfhörern auf dem Kopf"
          copyrightText="Chaostreff Flensburg"
          copyrightLink="https://www.flickr.com/photos/ctfl/27667957447/"
          cc="CC0 1.0"
          ccLink="https://creativecommons.org/publicdomain/zero/1.0/"
        />
      }
    />
    <div id="hacker-innen-ethik">
      <props.comp.Layouts.TextImage
        title={props.text.impuls_heading2}
        text={props.text.impuls_text2}
        textPosition="right"
        image={
          <props.comp.Image
            src="/media/38514211235_cf83decce2_c.jpg"
            alt="Beleuchtete Glashalle in Leipzig"
            copyrightText="Leah Oswald"
            copyrightLink="https://www.flickr.com/photos/leahoswald/38514211235/in/album-72157664143705788/"
            cc="CC BY 2.0"
            ccLink="https://creativecommons.org/licenses/by/2.0/"
          />
        }
        addOn={
          <div>
            <h3>{props.text.hackerEthic_title}</h3>
            <ul>
              <li>{props.text.hackerEthic_point1}</li>
              <li>{props.text.hackerEthic_point2}</li>
              <li>{props.text.hackerEthic_point3}</li>
              <li>{props.text.hackerEthic_point4}</li>
              <li>{props.text.hackerEthic_point5}</li>
              <li>{props.text.hackerEthic_point6}</li>
              <li>{props.text.hackerEthic_point7}</li>
              <li>{props.text.hackerEthic_point8}</li>
            </ul>
          </div>
        }
      />
    </div>
    <props.comp.Layouts.TextImage
      title={props.text.impuls_heading3}
      text={props.text.impuls_text3}
      textPosition="left"
      image={
        <props.comp.Image
          src="/media/49287968448_da6d385313_c.jpg"
          alt="In der Farbe Orange leuchtender Kristall"
          copyrightText="Leah Oswald"
          copyrightLink="https://www.flickr.com/photos/leahoswald/49287968448/in/album-72157712400345071/"
          cc="CC BY 2.0"
          ccLink="https://creativecommons.org/licenses/by/2.0/"
        />
      }
    />
  </>
);
