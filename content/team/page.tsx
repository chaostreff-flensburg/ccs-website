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
      name: file?.name,
      picture: file?.picture,
      title: file?.title,
      type: file?.type,
      socialLinks: file?.socialLinks,
      content: file?.content,
      year: file?.year,
      position: file?.position,
      thesis: file?.thesis,
    };

    switch (file?.type) {
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

  alumniData.sort((a, b) => b.year - a.year);

  yield {
    url: "/team",
    layout: "TeamIndex.mdx",
    team: {
      orga: orgaData,
      mentor: mentorData,
      alumni: alumniData,
      beirat: beiratData,
    },
    lang:"de",
  };

  yield {
    url: "/en/team",
    layout: "TeamIndexEN.mdx",
    team: {
      orga: orgaData,
      mentor: mentorData,
      alumni: alumniData,
      beirat: beiratData,
    },
    lang:"en",
  };
}
