export const layout = "TeamIndex.mdx";

export default function* ({ search }) {
  const allFiles = search.pages("team");

  const orgaData = [];
  const mentorData = [];
  const alumniData = [];
  const beiratData = [];

  for (const file of allFiles) {
    const member = {
      name: file.data.name,
      picture: file.data.picture,
      title: file.data.title,
      type: file.data.type,
      socialLinks: file.data.socialLinks,
      content: file.content,
    };

    switch (file.data.type) {
      case "orga":
        orgaData.push(member);
        break;
      case "mentor":
        mentorData.push(member);
        break;
      case "alumni":
        alumniData.push(member);
        break;
      case "beirat":
        beiratData.push(member);
      default:
        break;
    }
  }

  yield {
    url: "/team/",
    layout: "TeamIndex.mdx",
    team: {
      orga: orgaData,
      mentor: mentorData,
      alumni: alumniData,
      beirat: beiratData,
    },
  };
}
