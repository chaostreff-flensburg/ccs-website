export const layout = "TeamIndex.mdx";

interface Member {
  name: string;
  picture: string | null;
  title: string | undefined;
  type: string | undefined;
  socialLinks: string[] | undefined;
  content: string | undefined;
  year: number | undefined;
  position: string | undefined;
  thesis: string | undefined;
}

export default function* ({ search }) {
  const allFiles = search.pages("team");

  const orgaData: Member[] = [];
  const mentorData: Member[] = [];
  const alumniData: Member[] = [];
  const beiratData: Member[] = [];

  for (const file of allFiles) {
    const member: Member = {
      name: file.data.name,
      picture: file.data.picture,
      title: file.data.title,
      type: file.data.type,
      socialLinks: file.data.socialLinks,
      content: file.data.content,
      year: file.data.year,
      position: file.data.position,
      thesis: file.data.thesis,
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
        break;
    }
  }

  console.log(alumniData);
  alumniData.sort((a, b) => b.year - a.year);

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
