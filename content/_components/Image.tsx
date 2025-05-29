interface ImageProps {
  src: string;
  alt: string;
  copyrightHolder: string;
  ccType: string;
  link?: string;
}

const styles = {
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
    objectFit: "cover",
    width: "100%",
    boxShadow: "0.5rem 0.5rem 1rem #222a",
    borderRadius: 10,
  },
  text: {
    color: "#c4c4c4",
    fontSize: "0.8rem",
  },
  link: {
    color: "#c4c4c4",
    fontSize: "0.8rem",
    textDecoration: "transparent",
  },
};

export default ({ src, alt, copyrightHolder, ccType, link }: ImageProps) => (
  <div style={styles.imageContainer}>
    <img src={src} style={styles.image} alt={alt} />
    <p style={styles.text}>
      {ccType} -{" "}
      <a style={styles.link} href={link}>
        {copyrightHolder}
      </a>
    </p>
  </div>
);
