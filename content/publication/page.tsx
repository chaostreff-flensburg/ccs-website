export const layout = "PublicationIndex.mdx";

export default function* ({ search, paginate }) {
  const posts = search.pages("publication", "date=desc");
  const options = {
    url: (n) => `./page/${n}/`,
    size: 10,
  };

  for (const page of paginate(posts, options)) {
    yield page;
  }
}
