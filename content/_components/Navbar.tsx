type Props = {
    page: "home" | "about" | "team" | "blog" | "publication";
};

export default function Header({ page, ...props }: Props) {

    return (
        <section class="shadow header">
            <nav class="navbar">
                <a href={props.lang == "en" ? "/en" : "/"} class={page === "home" ? "active" : ""}>
                    {props.startpage}
                </a>
                <a href={props.lang == "en" ? "/en/#apply" : "/#apply"} class={page === "about" ? "active" : ""}>
                    {props.header_apply}
                </a>
                <a href={props.lang == "en" ? "/en/about" : "/about"} class={page === "about" ? "active" : ""}>
                    {props.header_about}
                </a>
                <a href={props.lang == "en" ? "/en/team" : "/team"} class={page === "team" ? "active" : ""}>
                    {props.header_team}
                </a>
                <a href="/blog/page/1/" class={page === "blog" ? "active" : ""}>
                    {props.header_blog}
                </a>
                <a
                    href="/publication/page/1/"
                    class={page === "publication" ? "active" : ""}
                >
                    {props.header_publication}
                </a>
            </nav>
        </section>
    );
}
