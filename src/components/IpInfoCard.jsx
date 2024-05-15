/* eslint-disable react/prop-types */
import './IpInfoCard.css'

export function IpInfoCard({ ipInfo }) {
  if (!ipInfo) return

  return (
    <div className="ip-info-wrapper">
      <div className="ip-data">
        <NetInfo ipInfo={ipInfo} />
        <PlaceInfo ipInfo={ipInfo} />
        <LocationInfo ipInfo={ipInfo} />
      </div>
      <div className="map-wrapper">
        {/*Map*/}
      </div>
    </div>
  )
}

function NetInfo({ ipInfo }) {
  return (
    <section className="net-info info-section">
      <div className="ip">
        <small>{ipInfo.version}</small>
        <h3>{ipInfo.ip}</h3>
      </div>
      <p>{ipInfo.org}</p>
    </section>
  )
}

function PlaceInfo({ ipInfo }) {
  return (
    <div className="place-info info-section">
      <div className="text-container">
        <h5 className="city-and-region">
          {ipInfo.city}, {ipInfo.region},
        </h5>
        <h4 className="country">
          {ipInfo.country}
        </h4>
      </div>
      <img src={
        `https://flagsapi.com/${ipInfo.countryCode}/flat/64.png`
        } alt={`${ipInfo.country} flag`} 
      />
    </div>
  )
}

function LocationInfo({ ipInfo }){
  return (
    <div className="location-info info-section">
      <h3 className="lat-lon">
        {ipInfo.lat}, {ipInfo.lon}
      </h3>
      <h4 className="time-zone">
        {ipInfo.timezone.replace('_', ' ')}
      </h4>
    </div>
  )
}
