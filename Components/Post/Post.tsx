/* eslint-disable @typescript-eslint/no-unused-vars */
interface IPostagem {
  title: string
  subtitle: string
  text: string
  uid: string
  imageUrl: string
  imageAlt?: string
  author?: string
  last_publication_date?: string
  first_publication_date?: string
}
export default function Potagem({
  title,
  subtitle,
  text,
  uid,
  imageUrl,
  imageAlt,
  author,
  last_publication_date,
  first_publication_date,
}: IPost) {
  console.log(text)
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  )
}
