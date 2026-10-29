import { useState } from "react";


type SectionProps = {
    title: string;
    tldr: string;
    details: string[]
}


function TldrHint({ s }: { s: string }) {
    return (
        <div>
        <p>{s}</p>
        </div>
        )
    }



// Creates a section with title, tldr, and details
export function TosSection({title, tldr, details}: SectionProps) {
    const [tldrPressed, setTldrPressed] = useState(false)




    return (
        <div className="tos_section">
            <h1>{title}</h1>
            <button onClick={() => setTldrPressed(true)}>tl;dr</button>
            {tldrPressed && <TldrHint s={tldr} />}

            {details.map((d: string) => {
                return (
                    <p>{d}</p>
                )
            })}
        </div>
    )
}