// Creates a section with title, tldr, and details
type SectionProps = {
    title: string;
    tldr: string;
    details: string[]
}

function tldr_button_click(tldr: string) {
return (
    <>
    <p>{tldr}</p>
    </>
)
}

export function TosSection({title, tldr, details}: SectionProps) {
    return (
        <div className="tos_section">
            <h1>{title}</h1>
            <button onClick={() => tldr_button_click(tldr)}>tl;dr</button>
            {details.map((d: string) => {
                return (
                    <p>{d}</p>
                )
            })}
        </div>
    )
}