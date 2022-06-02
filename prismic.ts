import * as prismic from '@prismicio/client'
import { CreateClientConfig, enableAutoPreviews } from '@prismicio/next'
import { FilledLinkToDocumentField } from '@prismicio/types'

import smConfi from './sm.json'

export const endpoint = smConfi.apiEndpoint
export const repositoryName = 'escola-teatro'

export function linkResolver(
  doc: Omit<FilledLinkToDocumentField, 'url'>
): string {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  if (doc.type === 'noticia') return `/${doc.uid}`
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  if (doc.type === 'noticia-post') return `/post/${doc.uid}`
  return '/'
}

export function createClient(config?: CreateClientConfig): prismic.Client {
  const client = prismic.createClient(endpoint)

  enableAutoPreviews({
    client,
    previewData: config?.previewData,
    req: config?.req,
  })
  return client
}
