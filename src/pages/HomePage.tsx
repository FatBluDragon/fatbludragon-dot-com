import './HomePage.css'
import { Link } from 'react-router'

export function HomePage() {
    return (
        <>
            <title>FBD - Home</title>
            <div className='welcome'>
                <div className='welcomeText'>
                <h1>Welcome to the Hungry Dragon Inn!</h1>
                <p>The website is still work in progress</p>
                </div>
            </div>
            <div className='container'>
                <div className='introduction'>
                <div className='info'>
                    <h1>Hai, Im ferg!</h1>
                    <p>I'm a full time illustrator drawing big furs of all shapes. Let it be strong, soft, floating in the air or too big for the city; Anything goes!</p>
                    <p>Aside from Illustrations, I stream art and games on Twitch, too, and plan on selling merch in the future</p>
                </div>
                <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:7kpp5bimw4w7o7hwrmb6whxi/bafkreiczrlhv342uf4rat5vrw72slpb3a5eimjyp4ttxenpa57ogdyhk7y" width='320' alt="" />
                </div>
                <div className='commContainer'>
                <div className='gallery' onClick={() => {window.open("https://www.furaffinity.net/gallery/fatbludragon/");}}>
                    <h1>Gallery</h1>
                </div>
                <div className='items'>
                    <div className='commissions' onClick={() => {window.open('https://www.furaffinity.net/commissions/fatbludragon/');}}>
                    <h1>Commissions</h1>
                    </div>
                    <div className='ych' onClick={() => {window.open('https://www.furaffinity.net/gallery/fatbludragon/folder/1259215/YCH-Showcase');}}>
                    <h1>YCH</h1>
                    </div>
                </div>
                <Link to="/terms-of-service" className='tos'>
                    <h1>Terms of Service</h1>
                </Link>
                </div>
            </div>
        </>
  )
}