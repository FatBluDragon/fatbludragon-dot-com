import {type ReactNode, useState, useRef, useEffect} from 'react'
import './TosSection.css'

type SectionProps = {
    title: string;
    tldr: string;
    content: ReactNode 
}

// Creates a section with title, tldr, and details
export function TosSection({title, tldr, content}: SectionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const tldrRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return

        const handleClick = (event: PointerEvent) => {
            if (
                event.target instanceof Node &&
                !tldrRef.current?.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [isOpen])


    // create tldr button and show tldr content if tldrPressed is true
    return (
        <div className="tos_section">
            <div className='tos_horizontal_row'>
                <hr />  
            </div>
            <div className="tos_title">
                <h1>{title}</h1>
                <div ref={tldrRef}>
                    <div className="tos_tldr_button" onClick={() => setIsOpen(true)}>
                        <p>TL;DR</p>
                    </div>
                    {isOpen && <TosSectionTldr text={tldr} isOpen={isOpen} />}
                </div>   
            </div>
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
}