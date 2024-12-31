import Image from "next/image";
import React from "react";
import { FaCalendar, FaLink, FaLocationArrow } from "react-icons/fa";
import { UserProps } from "../type";
import Link from "next/link";

interface user {
  user: UserProps;
}

const Profile = ({ user }: user) => {
  const formattedDate = user.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";
  console.log("user profile ", user);
  return (
    <section className="bg_dark_white p-4 rounded-md shadow dark:shadow-none">
      <div className="flex  ">
        <div className="flex  gap-6 ">
          <Image
            src={user.picture!}
            width={100}
            height={100}
            className="object-cover w-20 h-20  rounded-full"
            alt="profile image "
          />

          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-poppins font-semibold capitalize">
                {user.username}
              </h1>
              <p className="font-poppins text-xs opacity-95">{user.email}</p>
            </div>
            <div className="flex gap-4 items-center text-sm">
              <div className="flex gap-1 items-center">
                <FaLink />
                <span>{user.portfolio ? user.portfolio : "example.com"}</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaLocationArrow />
                <span>
                  {user.location ? user.location : "add your location"}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <FaCalendar />
                <span>{formattedDate}</span>
              </div>
            </div>
            <p className="font-noto_serif text-sm w-fit px-6 py-2 self-start">
              {user.bio ? user.bio : "add bio"}
            </p>
          </div>
        </div>

        <Link href={"profile/edit"} className=" font-poppins btn-bg">
          Edit Profile
        </Link>
      </div>
    </section>
  );
};

export default Profile;
