import type { Contract } from 'caver-js'
import { useState } from 'react'

/**
 * useTestContract
 *
 * This hook is used to interact with the TestContract
 * The TestContract is deployed on the Klaytn Testnet
 *
 */
export default function useTestContract(provider: Klaytn | null) {
  const [boxValue, setBoxValue] = useState<number | null>(null)

  const abi = require('../abi/test.json')
  const deployedContractAddress = '0xe6703229cffb888e3be09b8cd923c8208bd0a37c'

  const retrieve = async () => {
    if (!provider) throw new Error('Provider is not set')
    if (!window?.caver) throw new Error('Caver is not set')

    /**
     * Create caver instance
     */
    const contract: Contract = new window.caver.contract(
      abi,
      deployedContractAddress,
    )

    /**
     * Call retrieve method
     */
    const value = await contract.call('retrieve')

    /**
     * Set box value
     */
    setBoxValue(value)
  }

  return {
    deployedContractAddress,
    boxValue,
    retrieve,
  }
}
