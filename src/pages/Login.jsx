import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"

function Login() {
  const navigate = useNavigate()
  return (
    <div className="px-6 pt-10">
      <h1 className="text-2xl font-medium">
        Signin to your PopX account
      </h1>
      <p className="text-gray-500 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="mt-6">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />
        <Button
          text="Login"
          variant="tertiary"
          onClick={() => navigate("/accountsettings")}
        />
      </div>
    </div>
  )
}

export default Login