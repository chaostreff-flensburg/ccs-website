export default ({ ...props }) => (
  <>
    <props.comp.Layouts.TextImage
      title={props.text.info_title1}
      text={props.text.info_text1}
      textPosition="left"
      image={
        <props.comp.Image
          src="/media/41366316404_6da486eb34_c.jpg"
          alt="Baum mit leuchtenden LED Stripes"
          copyrightText="Leah Oswald"
          copyrightLink="https://www.flickr.com/photos/leahoswald/41366316404/in/album-72157693638155552/"
          cc="CC BY 2.0"
          ccLink="https://creativecommons.org/licenses/by/2.0/"
        />
      }
    />
    <props.comp.Layouts.TextImage
      title={props.text.info_title2}
      text={props.text.info_text2}
      textPosition="right"
      image={
        <props.comp.Image
          src="/media/48014359776_c90ee30f82_c.jpg"
          alt="Mechanischer gehender Roboter aus Holzbauteilen"
          copyrightText="Leah Oswald"
          copyrightLink="https://www.flickr.com/photos/leahoswald/48014359776/in/album-72157708956624971/"
          cc="CC BY 2.0"
          ccLink="https://creativecommons.org/licenses/by/2.0/"
        />
      }
    />
    <props.comp.Layouts.TextImage
      title={props.text.info_title3}
      text={props.text.info_text3}
      textPosition="left"
      image={
        <props.comp.Image
          src="/media/49287961713_3a33cbd1e4_c.jpg"
          alt="Fairydust Rakete in der Leipzeiger Messe Eingangshalle"
          copyrightText="Leah Oswald"
          copyrightLink="https://www.flickr.com/photos/leahoswald/49287961713/in/album-72157712400345071/"
          cc="CC BY 2.0"
          ccLink="https://creativecommons.org/licenses/by/2.0/"
        />
      }
      addOn={
        <div style="display:flex; gap:10px;">
          <props.comp.Button link={"/#stipendiumsbedingungen"}>
            {props.text.info_button1}
          </props.comp.Button>
          <props.comp.Button link={"/#bewerben"}>
            {props.text.info_button2}
          </props.comp.Button>
        </div>
      }
    />
  </>
);
