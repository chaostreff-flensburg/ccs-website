interface DetailProps {
  title: string;
  content: string;
}

const styles = {
  summary: {
    background:
      "linear-gradient(217deg,rgba(124, 20, 38, 1) 0%, rgba(15, 34, 77, 1) 37%)",
    "border-radius": 5,
    padding: "10px 6px",
    margin: "10px 0px",
  },
  text: {
    "padding-top": "10px",
  },
};

export default ({ title, content }: DetailProps) => (
  <>
    <details>
      <summary style={styles.summary}>{title}</summary>
      <p style={styles.text}>{content}</p>
    </details>
  </>
);
