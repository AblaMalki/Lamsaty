import React from "react";

const Profile = () => {
  return (
    <div className="flex p-6">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="pt-2">
            <p className="text-xs font-medium text-emerald-200 group-hover:text-white">
              profile
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Profile;

{
  /* <div className="">
            {user.map((item) => (
              <a key={item.name} href="#" className="">
                <img
                  className="block mx-auto h-10 w-10 rounded-full"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="">
                  <p>{item.name}</p>
                  <p>Account settings</p>
                </div>
              </a>
            ))}
          </div> */
}
