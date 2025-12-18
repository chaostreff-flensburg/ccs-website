import Navbar from "./Navbar.tsx"

type Props = {
    page: "home" | "about" | "team" | "blog" | "publication";
};

export default function Header({ page, ...props }: Props) {

    return (
        <>
            <div class="headerBackground row">
                <div class="col">
                    <h1>Chaotischer Catalysator Stipendium</h1>
                </div>
            </div>

            <Navbar page={page} {...props}/>
        </>
    );
}
