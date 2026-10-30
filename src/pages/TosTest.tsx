import { useEffect, useState, useRef, type ReactNode } from "react";
import './TosTest.css';

type SectionProps = {
    title: string;
    tldr: string;
    content: ReactNode
}

// Creates a section with title, tldr, and details
function TosSection({title, tldr, content}: SectionProps) {
    const [tldrPressed, setTldrPressed] = useState(false)
    // checks if clicked area is NOT tldr


    // create tldr button and show tldr content if tldrPressed is true
    return (
        <div className="tos_section">
            <div className="tos_title">
                <h1>{title}</h1>
                <div className="tos_tldr_button" onClick={() => setTldrPressed(true)}>
                    <p>TL;DR</p>
                </div>
            </div>
                {tldrPressed && <TosSectionTldr text={tldr} isOpen={tldrPressed} onClose={() => setTldrPressed(false)}/>}
            <div className="tos_content">
                {content}
            </div>
        </div>
    )
}

function TosSectionTldr({text, isOpen, onClose}: {text: string, isOpen: boolean, onClose: undefined}) {
	if (!isOpen) return null
    return(
		<div className="tldr_popup_window">
			<p>{text}</p>
            <button onClick={onClose}>close</button>
		</div>
	)
}


export function TosTest() {
    
    return (
        <div className="tos_container">
            <div className="tos_prologue">
                <h1>Terms of Service</h1>
                <p>These terms apply to any commission and are legally binding after purchase. They ensure safety and clarity between the client and seller.</p>
                <p>The pronoun "you / your" refers to the client<br />The pronoun "I / my" refers to the seller/artist<br />The pronoun "we / our" refers to both the client and artist</p>
                <p>Each section starts with a summary. Said summary is not legally binding and only acts as a quick overview. To ensure no misunderstandings or miscommunication, please read the terms in full. The service and content is provided "AS IS" and no warranties, neither expressed nor implied, are made outside of this ToS and upon agreement.</p>
                <p><i>[NOTE] Paragraphs in this style are personal notes. They act as personal commentary only and are not legally binding.</i></p>
                <p>Due to legal reasons, you must be at least 18 years old to order a commission. For EU clients, no VAT or sales tax is applied as per §19 UStG (germany). By purchasing a commission, you hereby agree on the following terms and conditions.</p>
            </div>
            <TosSection title={'testing'} tldr={'beep boop'} content={(
                <>
                <p>This is a test to see if it works as intended</p>
                </>
            )} />
        </div>
    )
}