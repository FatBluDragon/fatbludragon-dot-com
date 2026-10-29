import { useEffect, useState, useRef, ReactNode } from "react";
import './TosSection.css'

type SectionProps = {
    title: string;
    tldr: string;
    details: ReactNode
}

function TosSectionTldr({text}: {text: string}) {
	return(
		<>
			<div className="tldr_popup_window">
				<p>{text}</p>
			</div>
		</>
	)
}

// Creates a section with title, tldr, and details
export function TosSection({title, tldr, details}: SectionProps) {
    const [tldrPressed, setTldrPressed] = useState(false)
    const tldrRef = useRef(null)

/*    const TosSectionTldr = () => {
        return(
            <>
                <div className="tldr_popup_window" ref={tldrRef}>
                    <p>{tldr}</p>
                </div>
            </>
	)}*/

    useEffect(() => {
        const handler = (event) => {
            console.log("click")
            if(!tldrRef.current?.contains(event.target)) {
                setTldrPressed(false)
            }
        }

        document.addEventListener("click", handler)
        return () => {
            document.removeEventListener("click", handler)
        }

    }, [tldrPressed, tldrRef])


    return (
        <div className="tos_section">
            <div className="tos_title">
                <h1>{title}</h1>
                <div className="tos_tldr_button" ref={tldrRef} onClick={() => setTldrPressed(true)}>
                    <p>TL;DR</p>
                </div>
            </div>
                {tldrPressed && <TosSectionTldr text={tldr} reference={tldrRef}/>}
            <div className="tos_content">
                {details}
            </div>
        </div>
    )
}