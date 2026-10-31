import { useEffect, useState, type ReactNode } from "react";
import './TosTest.css';

import { TosSection } from "../components/TosSection";

// Creates a section with title, tldr, and details
/*function TosSection({title, tldr, content, isOpen, onOpen, onClose}: SectionProps) {



    // create tldr button and show tldr content if tldrPressed is true
    return (
        <div className="tos_section">
            <div className="tos_title">
                <h1>{title}</h1>
                <div className="tos_tldr_button" onClick={onOpen}>
                    <p>TL;DR</p>
                </div>
            </div>
                {isOpen && <TosSectionTldr text={tldr} isOpen={isOpen} onClose={onClose}/>}
            <div className="tos_content">
                {content}
            </div>
        </div>
    )
}

function TosSectionTldr({text, isOpen}: {text: string, isOpen: boolean}) {
	if (!isOpen) return null
    return(
		<div className="tldr_popup_window">
			<p>{text}</p>
		</div>
	)
}*/


export function TosTest() {
    const [tldrPressed, setTldrPressed] = useState(false)
    
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target;

            if (target instanceof Element && // If target exists
                !target.closest(".tldr_popup_window, .tos_tldr_button") // If clicked elements are neither popup nor tldr button
            ) {
                console.log("foo")
                setTldrPressed(false)
            }
        }

        document.addEventListener("click", handleClick)
        return () => document.removeEventListener("click", handleClick)
    })
    
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
            <TosSection 
                title={'Commission Process'} 
                tldr={"We'll discuss commission details first and payment afterwards. You'll get constant chances for feedback. If you demand a change that should have been requested earlier, a compensation fee may be required."}
                onOpen={() => setTldrPressed(true)} 
                content={(
                <div>
                    <p>
                        Upon contact, we discuss the details of the commission first, such as the concept, characters featured, prices, etc. You may request a free concept sketch to help establish the idea. Once we clear up every detail about the artwork, we'll proceed to the discussion of policy and payment.
                    </p>
                    <p>
                        After settling with the commission details, you will be added to the queue immediately. If your commission would be next in queue, it will be pushed back once or twice until the first payment has been made. You can cancel your commission at any time until completion.
                    </p>
                    <p>
                        During the commission progress, I provide options for constant feedback where you can request reasonable changes. Reasonable changes are defined as revisions that are easy to implement at the current stage of creation. Opportunities for feedback and revisions are provided in the following stages (and allow for these revisions): 
                    </p>
                    <ol>
                        <li>rough sketch (concept, pose)</li>
                        <li>refined sketch (body shape, expression, details)</li>
                        <li>lineart (details)</li>
                        <li>color/shading (lighting, color theme)</li>
                        <li>post processing & finalization (effects, text, onamotopoeia)</li>
                    </ol>
                    <p>
                        If you insist on a revision, which could have been requested at an earlier step, I may demand a compensation fee, proportional to the progress lost. If feedback for a stage is skipped on my end, you may request revisions that would have been appropriate at the skipped step for free. Errors on my end can be revised without any compensation fee.
                    </p>
                    <p><i>
                        [NOTE] For example, if I skip feedback for lineart and color/shading, you can still ask for revisions of details, lighting, or color theme without a compensation fee. An example for an error could be drawing the characters with 5 fingers while it's supposed to be 4 or changing the shape of a character's snout.
                    </i></p>
                    <p>
                        YCH commissions provide feedback options at the sketch phase and finalization. Only revisions necessary for proper "character replacement" are free of charge.
                    </p>
                    <p><i>
                        [NOTE] YCH are finished way faster than regular comms and allowing feedback at the sketch phase and finalization turns out to be the perfect middle ground. You can still ask for changes if the lighting, coloring, or details of your character seems off. However, the composition, pose, background, lighting, etc. provided by the base are unchangable unless discussed otherwise.
                    </i></p>
                </div>
            )} />
            <TosSection 
                title={'YCH and Perma-open Commissions'} 
                tldr={"YCHs and perma-open commissions can be ordered at any time. Special rules for their process apply. Regular commissions may be turned into a YCH in exchange for benefits discussed during the commission briefing.
"}
                isOpen={tldrPressed} 
                onOpen={() => setTldrPressed(true)} 
                content={(
                <div>
                    <p><i>
                        [NOTE] Apologies in advance for the upcoming inconvenience. I tried my best to figure out a way to avoid it and keep us anonymous but no matter what I try, my hands are legally tied.
                    </i></p>
                    <p>
                        As a German freelance artist, I'm obligated to include both our legal names and addresses to the invoice. As it is written in <a href="https://www.gesetze-im-internet.de/ustg_1980/__14.html">section 14, subsection 4 of USTG</a>, only an invoice with said info is legal. This will also be used to calculate any necessary VAT or sales tax which is included in the final price thus your total won't change. The invoice will be sent through Stripe, wich is an industry standard for online stores.
                    </p>
                    <p><i>
                        [NOTE] If you choose Paypal as payment method, all the necessary info will be added automatically so you don't have to add it manually.
                    </i></p>
                    <p>
                        The following data will be necessary
                    </p>
                    <ul>
                        <li>full name</li>
                        <li>e-mail address</li>
                    </ul>
                    <ul>
                        <li>street, apt.</li>
                        <li>city, postal code</li>
                        <li>State, Country</li>
                        </ul>
                        <p>
                            The information will be shown on the Stripe invoice. No physical invoice or message will be sent.
                        </p>
                        <p><i>
                            [NOTE], my own personal info will be revealed, too, so let's agree to ignore both our sensitive data for anonymity's sake. The nickname is used to address you as such instead of your real name. Also, please don't call me by the name on the invoice but as Fergus Sullivan.
                        </i></p>
                </div>
            )} />
            <TosSection 
                title={'Invoice & Personal Data'} 
                tldr={"I'm legally required to add your legal name and address in the invoice. Otherwise, I can't send you the invoice. The invoice will be sent through Stripe, which can be paid without registration and using Paypal and other methods"}
                isOpen={tldrPressed} 
                onOpen={() => setTldrPressed(true)} 
                content={(
                <div>
                    <p><i>
                        [NOTE] Apologies in advance for the upcoming inconvenience. I tried my best to figure out a way to avoid it and keep us anonymous but no matter what I try, my hands are legally tied.
                    </i></p>
                    <p>
                        As a German freelance artist, I'm obligated to include both our legal names and addresses to the invoice. As it is written in <a href="https://www.gesetze-im-internet.de/ustg_1980/__14.html">section 14, subsection 4 of USTG</a>, only an invoice with said info is legal. This will also be used to calculate any necessary VAT or sales tax which is included in the final price thus your total won't change. The invoice will be sent through Stripe, wich is an industry standard for online stores.
                    </p>
                    <p><i>
                        [NOTE] If you choose Paypal as payment method, all the necessary info will be added automatically so you don't have to add it manually.
                    </i></p>
                    <p>
                        The following data will be necessary
                    </p>
                    <ul>
                        <li>full name</li>
                        <li>e-mail address</li>
                    </ul>
                    <ul>
                        <li>street, apt.</li>
                        <li>city, postal code</li>
                        <li>State, Country</li>
                        </ul>
                        <p>
                            The information will be shown on the Stripe invoice. No physical invoice or message will be sent.
                        </p>
                        <p><i>
                            [NOTE], my own personal info will be revealed, too, so let's agree to ignore both our sensitive data for anonymity's sake. The nickname is used to address you as such instead of your real name. Also, please don't call me by the name on the invoice but as Fergus Sullivan.
                        </i></p>
                </div>
            )} />
        </div>
    )
}