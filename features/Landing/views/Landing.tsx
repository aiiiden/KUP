import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ModalPortal from '@/components/ModalPortal'
import { NoSSR } from '@/components/NoSSR'
import useModalStore from '@/store/useModalStore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Architecture from '../components/sections/Architecture'
import Hero from '../components/sections/Hero'
import WhatIsKup from '../components/sections/WhatIsKup'
import WhatWeHave from '../components/sections/WhatWeHave'
import WhyKup from '../components/sections/WhyKup'

const Landing: React.FC = () => {
  const { modal, closeModal } = useModalStore()
  //   useEffect(() => {
  //     async function getExampleImage() {
  //       const imageOriginUrl =
  //         'https://arweave.net/wglIV7K_YGwUpbFK5mxE-Jtnb3iimAsYFCLwtOMMzCg?ext=png'
  //       const r = await fetch(imageOriginUrl)
  //       if (!r.ok) {
  //         throw new Error(`error fetching image: [${r.status}]`)
  //       }
  //       return r.blob()
  //     }

  //     async function storeExampleNFT() {
  //       const imageBlob = await getExampleImage()

  //       axios.post<PostPayload>('/api/contract/metadata', {
  //         imageBlob,
  //         attackCount: 1,
  //       })
  //     }

  //     storeExampleNFT()
  //   }, [])

  return (
    <NoSSR>
      <Layout>
        <Hero />
        <WhatIsKup />
        <WhyKup />
        <Architecture />
        <WhatWeHave />

        {modal.active && (
          <ModalPortal>
            <Modal onClose={closeModal} title={modal?.title}>
              {modal?.component}
            </Modal>
          </ModalPortal>
        )}
      </Layout>
    </NoSSR>
  )
}

export default Landing
