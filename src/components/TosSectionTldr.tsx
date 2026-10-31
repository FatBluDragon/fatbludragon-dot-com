import "./TosSectionTldr.css"

export function TosSectionTldr({text, isOpen}: {text: string, isOpen: boolean}) {
	if (!isOpen) return null
    return(
		<div className="tldr_popup_window">
			<p>{text}</p>
		</div>
	)
}
