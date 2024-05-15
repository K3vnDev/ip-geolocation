import { useState } from 'react'
import { IpInfoCard } from './components/IpInfoCard'
import { useIP } from './hooks/useIP'

function App () {
  const [input, setInput] = useState('')
  const { ipInfo, searchIpInfo, userIp, error, loading } = useIP()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { ip } = ipInfo
    if (input === ip || (input === '' && ip === userIp)) {
      setInput('')
      return
    }
    if (input === '') {
      searchIpInfo(userIp)
    } else {
      searchIpInfo(input)
      setInput('')
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <h1 className='main-title'>IP Geolocation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder={userIp ?? 'IP...'}
          value={input}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <IpInfoCard ipInfo={ipInfo} />
      {error && <p className='error-message'>{error}</p>}
      {loading && <div className='loading-circle' />}
    </>
  )
}

export default App
