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
