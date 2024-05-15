import { useCallback, useEffect, useState } from "react"
const GET_IP_INFO_API_URL = 'http://ip-api.com/json/'

export const useIP = () => {
  const [ ipInfo, setIpInfo ] = useState(false)
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(true)
   
  const getUserIp = useCallback( async() => {
    searchIpInfo('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const searchIpInfo = async (ip) => {
    setIpInfo(false)
    setLoading(true)

    const response = await fetch(GET_IP_INFO_API_URL+ip)
    const result = await response.json()

    if (result.status === 'success'){
      setLoading(false)
      setIpInfo(
        {
          ...result,
          region: result.regionName,
          ip: result.query
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
  
  return { ipInfo, searchIpInfo, error, loading }
}
