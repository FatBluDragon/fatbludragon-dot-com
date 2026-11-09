import { useState, type SubmitEvent } from 'react'

import './GallerySearch.css'

export function GallerySearch() {
const [isWFW, setWFW] = useState(false)
const [mandatoryTags, setMandatoryTags] = useState([''])
const [optionalTags, setOptionalTags] = useState([''])
const [bannedTags, setBannedTags] = useState([''])

function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    const tagArray = String(formJson['tags']).split(' ')
    const mandatory = tagArray.filter((a) => a.length > 1 && a[0] != '+' && a[0] != '-')
    const optional = tagArray.filter((a) => a.length > 1 && a[0] == '+').map((a) => a.slice(1))
    const banned = tagArray.filter((a) => a.length > 1 && a[0] == '-').map((a) => a.slice(1))
    setMandatoryTags(mandatory)
    setOptionalTags(optional)
    setBannedTags(banned)
}


    return (
        <div className="gallery_search_container">
            <div className='gallery_search_WFW_container'>
                <p>WFW mode</p>
                <button onClick={() => setWFW(!isWFW)}>{isWFW ? 'ON' : 'OFF'}</button>
            </div>
            <form className='gallery_search_tag_search' onSubmit={handleSubmit}>
                <input type="text" name='tags' defaultValue={''} placeholder='Insert Tags Here'/>
                <button type='submit'>Search</button>
            </form>
            <div className='gallery_search_result'>
                <p>Mandatory Tags: {mandatoryTags.map((t) => {return t + ', '})}</p>
                <p>Optional Tags: {optionalTags}</p>
                <p>Banned Tags: {bannedTags}</p>
            </div>
        </div>
    )
}