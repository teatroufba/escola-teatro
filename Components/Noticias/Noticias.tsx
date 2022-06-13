interface INoticias {
  post: IPosts[]
}

interface IPosts {
  uid: string
  title: any
  subtitle: any
}

export default function Noticias({ post }: INoticias) {
  console.log({ post })
  return null
}
