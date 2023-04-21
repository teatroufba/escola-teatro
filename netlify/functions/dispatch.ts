import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Octokit } from 'octokit'

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
})

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    try {
        await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
            owner: 'teatroufba',
            repo: 'escola-teatro',
            event_type: 'build',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ sucess: true }),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ sucess: false, error }),
        }
    }
}

export { handler }
