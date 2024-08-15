import { useEffect } from 'react'

const UseEffectComponent = () => {
  useEffect(() => {
    console.log('mount')
  }, [])

  return <div>UseEffectComponent</div>
}

export default UseEffectComponent
