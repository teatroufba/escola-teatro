import * as prismic from '@prismicio/client'
import { CreateClientConfig, enableAutoPreviews } from '@prismicio/next'
import { FilledLinkToDocumentField } from '@prismicio/types'

import smConfig from './sm.json'

export const endpoint = smConfig.apiEndpoint
export const repositoryName = 'escola-de-teatro'

export function linkResolver(
  doc: Omit<FilledLinkToDocumentField, 'url'>
): string {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  if (doc.type === 'homepage') return `/${doc.uid}`
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
