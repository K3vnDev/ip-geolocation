import { useCallback, useEffect, useState } from "react"
const GET_USER_IP_API_URL = 'https://api.ipify.org'
const GET_IP_INFO_API_URL = ip => `https://ipapi.co/${ip}/json/`

export const useIP = () => {
  const [ ipInfo, setIpInfo ] = useState(false)
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(true)
  const [ userIp, setUserIp ] = useState()
   
  const getUserIp = useCallback( async() => {
    try {
      const response = await fetch(GET_USER_IP_API_URL)
      const result = await response.text()
      setUserIp(result)
      searchIpInfo(result)
    } catch (error) {
      console.error(error)
    }
  }, [])
  const searchIpInfo = async (ip) => {
    setIpInfo(false)
    setLoading(true)

    const response = await fetch(GET_IP_INFO_API_URL(ip))
    const res = await response.json()

    if (typeof(res.error) === 'undefined'){
      setLoading(false)
      setIpInfo(
        {
          ...res,
          lat: res.latitude,
          lon: res.longitude,
          countryCode: res.country,
          country: res.country_name,
        }
      )
      setError('')
    }else{
      setLoading(false)
      setIpInfo(false)
      if (error === ''){
        setError('No se ha encontrado la IP')
        setTimeout(() => {
          setError('')
        }, 2000)
      }
    }
  }

  useEffect(() => {
    getUserIp()
  }, [getUserIp])
  
  return { ipInfo, searchIpInfo, userIp, error, loading }
}
