import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Post = ({ slice }) => (
  <section>
    <span className="title">
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
    <img src={slice.primary.Image.url} alt={slice.primary.Image.alt} />
  </section>
)

export default Post