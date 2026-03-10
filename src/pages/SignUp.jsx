import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"

function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="px-6 pt-10">
      <h1 className="text-2xl font-medium">
        Create your PopX account
      </h1>
      <div className="mt-6">
        <Input label="Full Name" required placeholder="Enter full name" />
        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email Address" required placeholder="Enter email address" />
        <Input label="Password" required type="password" placeholder="Enter password" />
        <Input label="Company Name" placeholder="Enter company name" />
        <div className="mt-2">
          <p className="text-sm mb-2">
            Are you an Agency?*
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" />
              Yes
            </label>
            <label className="flex items-center gap-2"> 
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>
        <div className="pt-10 mt-28">
          <Button
            text="Create Account"
            onClick={() => navigate("/accountsettings")}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp