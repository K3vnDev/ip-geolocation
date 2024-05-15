import { useState } from 'react';
import { IpInfoCard } from './components/IpInfoCard'
import { useIP } from './hooks/useIP';

function App() {

  const [input, setInput] = useState('')
  const { ipInfo, searchIpInfo, error, loading } = useIP()

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (input !== ''){
      setInput('')
      if (input !== ipInfo.ip && !loading){
        searchIpInfo(input)
      }
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
          type="text" 
          placeholder="IP..."
          value={input}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <IpInfoCard ipInfo={ipInfo} />
      {
        error &&
        <p className='error-message'>
          {error}
        </p>
      }
      {
        loading && <div className='loading-circle'></div>
      }
    </>
  )
}

export default App
