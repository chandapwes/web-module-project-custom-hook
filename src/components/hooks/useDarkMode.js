import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('darkmode');
    
    return [values, setValues, useLocalStorage]
}

export default useDarkMode;