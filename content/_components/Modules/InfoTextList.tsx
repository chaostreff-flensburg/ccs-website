import Image from "../Image.tsx";
import SixtyFourtyLayout from "../Layouts/SixtyFourtyLayout.tsx";

export default ({ text }) => (
  <>
    <SixtyFourtyLayout
      title={text.info_title1}
      contentLeft={<p>{text.info_text1}</p>}
      contentRight={
        <Image
          src="/media/retroComputer.jpg"
          alt="Ein Retro Computer auf einem Tisch mit angeschlossenem Festnetz-Telefon."
          copyrightHolder="Leah Oswald"
          ccType="CC BY 2.0"
          link="https://www.flickr.com/photos/leahoswald/54462961218/"
        />
      }
      sixtyProcentSide="left"
    />
    <SixtyFourtyLayout
      title={text.info_title2}
      contentRight={<p>{text.info_text2}</p>}
      contentLeft={
        <Image
          src="/media/stageYell.jpg"
          alt="Ein Video-Streaming Set up. Eine Kamera ist auf eine Gruppe Sessel und einen Fernseher gerichtet."
          copyrightHolder="Leah Oswald"
          link="https://www.flickr.com/photos/leahoswald/48014359776/in/album-72157708956624971/"
          ccType="CC BY 2.0"
        />
      }
      sixtyProcentSide="right"
    />
  </>
);
