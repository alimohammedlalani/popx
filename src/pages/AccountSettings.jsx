import profile from '../../src/assets/profile.jpg'
function AccountSettings() {
  return (
    <div className="px-6 pt-10">
      <h1 className="text-xl font-bold ">
        Account Settings
      </h1>
      <div className="flex items-center gap-4 mt-6">
        <img
          src= {profile}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h3 className="font-medium">
            Marry Doe
          </h3>
          <p className="text-sm text-gray-500">
            marrydoe@gmail.com
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-6">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  )
}

export default AccountSettings