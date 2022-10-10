import type { NextApiRequest, NextApiResponse } from 'next'
import { Blob } from 'nft.storage'
import * as contractService from './services'

export type PostPayload = {
  attackCount: number
  imageBlob: Blob
}

export async function setMetadataUri(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { imageBlob, attackCount } = req.body

      const blob = new Blob([imageBlob], { type: 'image/png' })

      const metadata = await contractService.getNFTMetadata(attackCount, blob)

      res.status(200).json(metadata)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error })
    }
  }
}
