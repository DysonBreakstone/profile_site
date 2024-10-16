import "./Header.css"
import ProfilePanel from "../ProfilePanel/ProfilePanel.jsx"

const Header = () => {
  return (
    <div className="w-full min-h-20 bg-gray-500 text-center text-white justify-between rounded-lg">
      <ProfilePanel />
    </div>
  )
}

export default Header