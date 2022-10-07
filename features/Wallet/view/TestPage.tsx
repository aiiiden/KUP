import useTestContract from '../hooks/useTestContract'
import useKlaytn from '../hooks/useKlaytn'
import { useEffect } from 'react'
import useKlip from '../hooks/useKlip'

export default function TestPage() {
  const { provider, selectedAddress, loginKaikas, connected } = useKlaytn()
  const { deployedContractAddress, boxValue, retrieve } =
    useTestContract(provider)
  const { LoadKlipScript, requestKey, loginKlip } = useKlip()

  useEffect(() => {
    if (connected) {
      retrieve()
    }
  }, [connected])

  return (
    <>
      <LoadKlipScript />
      <div>
        <div>
          {JSON.stringify({
            selectedAddress,
            connected,
          })}
        </div>
        <div>
          {JSON.stringify({
            deployedContractAddress,
            val: boxValue,
          })}
        </div>
        <div>
          {JSON.stringify({
            requestKey,
          })}
        </div>

        <div className="flex gap-2">
          <button onClick={loginKaikas}>LoginKaikas</button>
          <button onClick={loginKlip}>loginKlip</button>
          <button onClick={retrieve}>retrieve</button>
        </div>
      </div>
    </>
  )
}
