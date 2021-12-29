import { useRef } from 'react'

const useFollow = () => {

    const ref = useRef()
    const setFollow = value => ref.current = value
    const toggleFollow = () => ref.current = !value

    return {
        value,
        setFollow,
        toggleFollow,
    }
}
export default useFollow