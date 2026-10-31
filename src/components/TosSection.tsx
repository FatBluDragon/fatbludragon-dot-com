import {type ReactNode} from 'react'
import { TosSectionTldr } from './TosSectionTldr'
import './TosSection.css'

type SectionProps = {
    title: string;
    tldr: string;
    content: ReactNode 
    isOpen: boolean
    onOpen: () => void
}

// Creates a section with title, tldr, and details
export function TosSection({title, tldr, content, isOpen, onOpen}: SectionProps) {



    // create tldr button and show tldr content if tldrPressed is true
    return (
        <div className="tos_section">
            <div className="tos_title">
                <h1>{title}</h1>
                <div className="tos_tldr_button" onClick={onOpen}>
                    <p>TL;DR</p>
                </div>
            </div>
                {isOpen && <TosSectionTldr text={tldr} isOpen={isOpen} />}
            <div className="tos_content">
                {content}
            </div>
        </div>
    )
}