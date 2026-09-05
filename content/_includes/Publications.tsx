import PublicationLayout from "./PublicationLayout.tsx";

const labels = {
  university: "Hochschule",
  department: "Fachbereich",
  degreeProgram: "Studiengang",
  author: "Geschrieben von",
};

export default ({ children, number, details, ...props }) => {
  const { title: headline, subtitle: subheadline, doi, ...detailRows } =
    details;
  const rows = Object.entries(detailRows);

  return (
    <PublicationLayout {...props} title={`Arbeit Nr. ${number}: ${headline}`}>
      <h1>{headline}</h1>
      <h2>{subheadline}</h2>
      <table class="table table-striped">
        <tbody>
          {rows.map(([key, value]) => (
            <tr key={key}>
              <th scope="row">{labels[key]}:</th>
              <td>{value}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">Veröffentlicht unter:</th>
            <td>
              {doi === "-"
                ? "-"
                : <a href={doi}>DOI {new URL(doi).pathname.slice(1)}</a>}
            </td>
          </tr>
          <tr>
            <th scope="row">Download:</th>
            <td>
              <a href={`/arbeiten/arbeit-${number}.pdf`}>PDF</a>
            </td>
          </tr>
        </tbody>
      </table>
      {children}
    </PublicationLayout>
  );
};
