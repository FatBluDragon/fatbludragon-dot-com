import './TermsOfService.css'

export function TermsOfService() {
    return (
        <>
            <div className="container">
                <div className="tos__main">
                    <h1>Terms of Service</h1>
                    <p>
                        These terms apply to any commission and are legally binding after purchase. They ensure safety and clarity between the client and seller.
                    </p>
                    <p>
                        The pronoun "you" refers to the client. <br />
                        The pronoun "I" refers to the seller/artist <br />
                        The pronoun "we" refers to both the client and artist
                    </p>
                    <p>
                        Each section starts with a summary. Said summary is not legally binding and only acts as a quick overview. To ensure no misunderstandings or miscommunication, please read the terms in full. The service and content is provided "AS IS" and no warranties, neither expressed nor implied, are made outside of this ToS and upon agreement.
                    </p>
                    <p><i>
                        [NOTE] Paragraphs in this style are notes. They act as personal commentary and are not legally binding.
                    </i></p>
                    <p>
                        Due to both personal boundaries and legal reasons, you must be at least 18 years old to order a commission. By purchasing a commission, you agree on the Terms of Service specified below:
                    </p>

                    <div className="tos__section">  <h2 className='important'>!!! Invoice & Personal Data !!!</h2>
                        <div className="tos__tldr">
                            ! DO NOT SKIP THIS PART !<br />
                            I'm legally required to add your legal name and address in the invoice. Otherwise, I can't send you one at all. No physical mail or message will be sent and the data stays on PayPal only.
                        </div>
                        <div className="tos__detail">
                            <div>
                                <p><i>
                                    [NOTE] Apologies in advance for the upcoming inconvenience. I tried my best to figure out a way to avoid it and keep us anonymous but no matter what I try, my hands are legally tied.
                                </i></p>
                                <p>
                                    As a German freelance artist, I'm obligated to include both our legal names and addresses to the invoice. As it is written in <a href="https://www.gesetze-im-internet.de/ustg_1980/__14.html">section 14, subsection 4 of USTG</a>, only an invoice with said info is legal. This will also be used to calculate any necessary VAT or sales tax. It'll be included in the final price thus your total won't change.
                                </p>
                                <p><i>
                                    [NOTE] Technically, only your real name (already visible on Paypal) and Country + State must be accurate. Since I don't send anything physical, the address could be a fake or randomized one and I'd be none the wiser. Obviously, I'd advise you against that because of legal repercussions but it's worth warning about the loophole
                                </i></p>
                                <p>
                                    The following data is necessary for the invoice
                                </p>
                                <ul>
                                    <li>full name</li>
                                    <li>online alias</li>
                                    <li>e-mail</li>
                                </ul>
                                <ul>
                                    <li>street, apt.</li>
                                    <li>city, postal code</li>
                                    <li>State, Country</li>
                                </ul>
                                <p>
                                    The data will be saved on Paypal only and you'll receive the invoice via e-mail. No physical invoice or message will be sent.
                                </p>
                                <p><i>
                                    [NOTE] Please send me the info AFTER the commission details have been settled. Once I sent the invoice, I'd urge you to delete the message containing the sensitive info. Telegram enables end-to-end encryption so if you prefer internet safety, we can share the info there. (Telegram: @FatBluDragon)
                                </i></p>
                                <p><i>
                                    Lastly, my own personal info will be revealed, too, so let's agree to ignore both our sensitive data for anonymity's sake. The nickname is used to address you as such instead of your real name. Also, please don't call me by the name on the invoice but as Fergus Sullivan.
                                </i></p>
                            </div>
                        </div>
                        <button type="button" className="tos__collapse">open</button>
                    </div>
                    <div className="tos__section">  <h2>Commission Progress</h2>
                        <div className="tos__tldr">
                            We'll discuss commission details first and payment afterwards. You'll get constant chances for feedback. If you demand a change that should have been requested earlier, a compensation fee may be required.
                        </div>
                        <div className="tos__detail"><div>
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
                        </div></div>
                        <button type="button" className="tos__collapse">show</button>
                    </div>
                    <div className="tos__section">  <h2>YCH and Perma-open Commissions</h2>
                        <div className="tos__tldr">
                            YCHs and perma-open commissions can be ordered at any time. Special rules for their process apply. Regular commissions may be turned into a YCH in exchange for benefits discussed during the commission briefing.
                        </div>
                        <div className="tos__detail"><div>
                            <p>
                                You may order a YCH or perma-open commission at any time. With unlimited open slots, the ETA may vary between a few days to an entire month.
                            </p>
                            <p>
                                YCH commissions provide chances for feedback at the sketch phase and finalization. Unless specified otherwise, as long as revisions are related to the character design while keeping the base concept and composition intact, you may ask for any changes for free. You may ask for a 50% refund due to dissatisfaction in the end. However, doing so will revoke your rights-of-use of any export provided. 
                            </p>
                            <p><i>
                                [NOTE] YCHs are done hella fast so asking for less feedback while allowing bigger revisions is much more effective. You can issue a 50% refund on the YCH at the end because the first half (base) is already provided with full satisfaction. You may still be dissatisfied with the implementation of your character so a partial refund like this seems fair. Revoking your rights-of-use is to prevent scammers trying to get away with cheaper art.
                            </i></p>
                            <p>
                                Other perma-open commissions have their own process and may include additional permissions or conditions, such as rights of commercial-use, permission of artistic freedom, etc. All YCHs and perma-open commissions are on their own queue. If a commission includes "artistic freedom" you forfeit your right of refund due to dissatisfaction as you agree to forfeit your right to provide feedback and accept the final commission "AS IS".
                            </p>
                            <p>
                                A regular commission may be offered to be turned into a YCH in exchange for various benefits, such as a faster ETA, a free commission upgrade, up to a 50% discount, or a coupon for future commissions. I retain the right to use any previously published artwork as a base for a future YCH. In cases like these, I will attempt to provide compensation if possible.
                            </p>
                            <p><i>
                                [NOTE] Some ideas are just too good not to share. However, I want to make it fair and let you benefit from it, too. The last sentence is a safety-net to prevent copyright infringement if I decide to use an old commission for a YCH base. I'll still try to offer compensations or benefits but sometimes, contact is lost or other reasons make it impossible.
                            </i></p>
                        </div></div>
                        <button type="button" className="tos__collapse">show</button>
                    </div>
                    <div className="tos__section">  <h2>Payment & Refund</h2>
                        <div className="tos__tldr">
                            The commission must be paid upfront to start. Partial payment enables partial completion. A full or partial refund is possible until completion. Multiple clients can pay the same Invoice with only one billing address. An ETA is given but asking for updates is encouraged. Any accidental commission work without payment is free of charge.
                        </div>
                        <div className="tos__detail"><div>
                            <p>
                                While you are already added to the queue after briefing, only the first payment upfront will start the commission process. You may pay in full or partially. A partial payment will fund a partial completion, proportional to the percentage paid. The same invoice can be paid by multiple clients. However, only one client's billing address is necessary.
                            </p>
                            <p>
                                You have the right to cancel the commission for any reason until finalization. If you cancel your commission before your commission starts, you'll receive a full refund. During the commission process, a cancellation will grant you a partial refund, proportional to the progress already made. You will receive the cancelled commission's exports as the finished product. Due to the options for constant feedback, you agree to forfeit your right to refund due to dissatisfaction as a reason. If I choose to cancel the commission myself, you'll receive a full refund regardless of progress made.
                            </p>
                            <p><i>
                                [NOTE] Since I provide you the ability to provide feedback at all times, it's assumed I constantly work with your full satisfaction. Thus, it's unreasonable to argue you are dissatisfied in the end. After all, I created the art exactly how you wanted. Also, please provide some actual feedback! I know some may be nervous or intimidated to ask for changes but I want to make sure you're definitely happy with the result. It's also awkward for both of us to deny a refund request because you were too "cowardly" as a client.
                            </i></p>
                            <p>
                                If I start or finish your commission without any payment, you'll receive the current progress for free. You are not obligated to pay me afterwards as this was an error on my side.
                            </p>
                            <p><i>
                                Sometimes, I accidentally finish a commission without ever getting paid. I don't want this to be a burden on the client so I don't demand payment afterwards. Obviously, it's appreciated but please don't feel obligated to do so.
                            </i></p>
                        </div></div>
                        <button type="button" className="tos__collapse">show</button>
                    </div>
                    <div className="tos__section">  <h2>WFW policy</h2>
                        <div className="tos__tldr">
                            Any art that is marked as WFW (Weird-For-Work) is content that's typically argued as "technically SFW" yet features objectification. These kinds of content must be posted in 18+ spaces only! You may lose your right to publish your commission if you infringe on the policy and refuse to take action after request.
                        </div>
                        <div className="tos__detail"><div>
                            <p>
                                My content uses a new ratings system called Weird-For-Work. Content is sorted under 3 ratings with only one being accessible to minors. The goal is to provide minors a purely safe space and adults their own SFW area, thus giving ace/sfw kink furs their own place to express themselves freely without exposing minors to their content and being forced into the porn category. Disregarding non-erotic themes, i.e. violence, drug use, profanity, and others, the ratings are defined as follows:
                                <ul>
                                    <li>
                                        <b>Safe-For-Work (SFW)</b><br />
                                        Content suitable for minors between 13 and 17 years old with no suggestive themes, objectification or fetishization of characters, neither sexual nor non-sexual.
                                    </li>
                                    <li>
                                        <b>Weird-For-Work (WFW)</b><br />
                                        Non-Pornographic content that is suitable for adults of ages 18 and above only. Contains suggestive themes, objectification, and fetishization of characters but no explicit and sexual scenes.
                                    </li>
                                    <li>
                                        <b>Not-Safe-For-Work (NSFW)</b><br />
                                        Pornographic or explicit content that is suitable for adults of ages 18 and above only. Contains any sexual themes and depictions that are typically considered "NSFW".
                                    </li>
                                </ul>
                                <p><i>
                                    [NOTE] For example, a fat character eating a burger and wearing decent clothes would be rated as SFW. However, a fat character eating a burger in ill fitted and indecent clothes would be rated as WFW. A character showing off their body in a flirty way is always WFW, regardless of their body type.
                                </i></p>
                                <p>
                                    To ensure child safety, the SFW section is free from any objectification because said objectification is always present in both explicit content and those related to the "SFW-kink" discourse. While it's advised to be better safe than sorry, 2 guidelines can determine objectification with great certainty. For terminology: Focus is defined as the theme, character, or object that dictates the content's identity. Identity is defined as the concept, meaning, or atmosphere said content emits. Content is defined as any creation in any form of media (i.e. art, writing, music, games, etc.).
                                </p>
                                <ul>
                                    <li>
                                        <b>One Idea Fits All</b><br />
                                        Can you replace the focus with a similar one without changing or breaking the artworks identity? <br />
                                        Example: Replace a fat character with a thin one or let someone who takes a photo of their abs wear a hoodie.
                                    </li>
                                    <li>
                                        <b>Fine for a 13 year old</b><br />
                                        Without breaking the content's identity, would the inclusion of a 13 year old child as a bystander or replacement feel morally acceptable for the majority of the community?<br />
                                        Example: Replace a twerking adult with a twerking 13 year old child or let a child be present at a scene featuring a pregnant mother.
                                    </li>
                                </ul>
                                <p><i>
                                    [NOTE] To elaborate on "majority of the community": The ratings system is applied to the entire furry-community, thus the public opinion matters, not that of the vocal or influential minority, such as those who support fetish content featuring minors for reasons, such as cartoons featuring such themes.
                                </i></p>
                                <p>
                                    If at least one of these guidelines is false, then objectification is most likely present and the artwork must be labeled as at least WFW. Said WFW content must be posted in 18+ spaces only or rated so that minors can't access it. Examples for proper sharing are as follows:
                                </p>
                                <ul>
                                    <li>FurAffinity: mature rating</li>
                                    <li>Twitter: 18+ accounts marked as mature</li>
                                    <li>Twitch: Channels marked as 18+ only or streams that enabled the content-classification: "Sexual Content"</li>
                                    <li>Bsky: Labeling image as "mature" when uploading (bsky can't label accounts as 18+ yet)</li>
                                    <li>Discord: Posting in 18+ servers only</li>
                                </ul>
                                <p>
                                    My decision on how to rate my own content is final and I will request a correction if you infringe on these guidelines. If you refuse to take action, your rights to publish the artwork will be revoked and you will be blacklisted from future commissions until corrections have been made.
                                </p>
                                <p><i>
                                    [NOTE] I know it's an extreme guideline but I feel extremely uncomfortable with the idea of minors, like my little brother, seeing my kinky content, even if it's technically SFW. It's also a system I advocate for people to adapt to. I genuinely believe it'll be a solution to the "kinky SFW" issue for everyone, both old and young. I'm happy to discuss disagreements but I beg you to respect my boundaries of sharing my content at least.
                                </i></p>
                            </p>
                        </div></div>
                        <button type="button" className="tos__collapse">show</button>
                    </div>
                    <div className="tos__section">  <h2>Distribution & Copyright</h2>
                        <div className="tos__tldr">
                            You may use the commission in any non-commercial way with credit. Extra permissions or conditions may apply. Commissions marked "WFW" (Weird-For-Work) must be posted with accessibility to adults only! Unless specified, others can share the art, too.
                        </div>
                        <div className="tos__detail"><div>
                            <p>
                                As it's written in <a href="https://www.gesetze-im-internet.de/urhg/__29.html">section 29, subsection 1 of URHG</a>, I am legally unable to transfer my copyright to anybody. Instead, there will be an exclusive rights-of-use license for your commission. These rights include the use, distribution, reproduction, edit, and sublicensing of any export in a non-commercial way and with attribution. Additional rights, such as commercial-use, or limitations may be added upon agreement. I also retain the right to share the commission on any platform and permit everyone the same rights with attribution unless agreed upon otherwise.
                            </p>
                            <p><i>
                                I don't mind people sharing and reposting my art on other platforms, like e621 or even as youtube compilations. However, if you don't want your commission to be posted anywhere or on specific sites, please let me know!
                            </i></p>
                            <p>
                                Upon buying a commission, you confirm ownership of the rights-of-use of all characters provided. You also agree to forfeit your right to refund for reasons related to IP and copyright. Additionally, you agree to follow the WFW-guideline, explained above, and accept the possibility of losing rights-of-use if the guidelines are infringed and you deny a request for a correction.
                            </p>
                            <p><i>
                                [NOTE] It's a weird section but it's basically a safety net in case you want to use a public IP, like Bowser or Asgore, or you use a friend's character without permission. It also prevents attempts of refunds because you dislike a character for whatever reason. The reason for the WFW guideline was explained in the WFW section. It's also my legal right to remove a rights-of-use if I believe your use is harmful to my reputation as an artist and I certainly don't want to be seen as a creep who exposes minors to fetish art.
                            </i></p>
                            <p>
                                Unless specified otherwise, you may use the finished exports in any non-commercial way. You may sublicense or sell the commission if it is related to sub-licensing or selling a character design featured in said commission. However, conditional restrictions on distributing content may apply, such as the following rules:
                            </p>
                            <ul>
                                <li>Commissions must be attributed to me in some way or form</li>
                                <li>Commissions labeled as "WFW" are allowed to be shared in adult spaces only</li>
                                <li>Commissions labeled as "Secret" may be shared publicly but won't be published by myself</li>
                                <li>Commissions labeled as "Void" are prohibited to be published or attributed to me in any way or form</li>
                            </ul>
                            <p>
                                Any owner of a character in your commission may request said commission to be taken down for any reason. However, I may request a takedown myself, regardless of if you used it commercially or not. Reasons for such takedowns are exclusively these conditions:
                            </p>
                            <ul>
                                <li>Infringement of the ToS or copyright</li>
                                <li>Infringement of the WFW policy and refusal of correction</li>
                                <li>Request to remove association with the commission</li>
                                <li>Request to remove association with the client or people featured in the commission</li>
                            </ul>
                            <p><i>
                                Another safety-net for the most extreme cases. I only use it if a client gets outed as an immoral person or a bigot and I want to remove any association with them. If you aren't, for example, a child groomer or transphobic asshole, then this section is of no concern at all. I won't abuse it just because of some personal quarrel or drama though, because deleting art for such reasons is simply petty.
                            </i></p>
                        </div></div>
                        <button type="button" className="tos__collapse">show</button>
                    </div>
                </div>
            </div>
        </>
    )
}