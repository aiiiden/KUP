import useTestContract from '../hooks/useTestContract'
import useKaikas from '../hooks/useKaikas'
import { useEffect } from 'react'
import useKlip from '../hooks/useKlip'

export default function TestPage() {
  const { isKaikasSupported, selectedAddress, loginKaikas, connected } =
    useKaikas()
  const { deployedContractAddress, boxValue, retrieve } =
    useTestContract(isKaikasSupported)
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
