import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} className="app-item-img" alt={appName} />
        <p className="app-heading">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
