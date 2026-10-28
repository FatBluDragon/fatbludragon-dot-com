import { TosSection } from "../components/tos_section";

export function TosTest() {
    return (
        <>
            <TosSection 
                title={"Testing"}
                tldr={"some tldr"}
                details={["first paragraph", "second paragraph"]}
                />
        </>
    )
}