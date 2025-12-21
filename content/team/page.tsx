export const layout = "TeamIndex.mdx";

interface Member {
  name: string;
  picture: string | null;
  title?: string;
  type?: string;
  socialLinks?: string[];
  content?: string;
  year?: number;
  position?: string;
  thesis?: string;
}

export default function* ({ search }) {
  const allFiles = search.pages("team");

  const orgaData: Member[] = [];
  const mentorData: Member[] = [];
  const alumniData: Member[] = [];
  const beiratData: Member[] = [];

  for (const file of allFiles) {
    if (!file || typeof file !== "object") continue; // skip invalid entries

    const member: Member = {
      name: file.name ?? "Unnamed",
      picture: file.picture ?? null,
      title: file.title,
      type: file.type,
      socialLinks: Array.isArray(file.socialLinks) ? file.socialLinks : [],
      content: file.content,
      year: typeof file.year === "number" ? file.year : undefined,
      position: file.position,
      thesis: file.thesis,
    };

    switch (file.type) {
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
      default:
        console.warn("Unknown member type:", file.type);
    }
  }

  alumniData.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  const teamData = {
    orga: orgaData,
    mentor: mentorData,
    alumni: alumniData,
    beirat: beiratData,
  };

  yield {
    url: "/team/",
    layout: "TeamIndex.mdx",
    team: teamData,
    lang: "de",
  };

  yield {
    url: "/en/team/",
    layout: "TeamIndexEN.mdx",
    team: teamData,
    lang: "en",
  };
}
