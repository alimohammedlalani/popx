import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

function WelcomePage() {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col justify-end px-6 pb-10">
      <div>
        <h1 className="text-2xl font-black mb-1">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-base  font-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="mt-6 space-y-3 text-sm ">
        <Button
          text="Create Account"
          onClick={() => navigate("/signup")}
        />
        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>

  )
}

export default WelcomePage