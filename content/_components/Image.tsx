const styles = {
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ({ src, alt, copyrightText, copyrightLink, cc, ccLink }) => (
  <div style={styles.imageContainer}>
    <img src={src} class="flow" alt={alt} />
    <p>
      <a href={copyrightLink}>{copyrightText}</a> - <a href={ccLink}>{cc}</a>
    </p>
  </div>
);
