"use client";

import {
  BaseLineIcon,
  CalendarIcon,
  LocationIcon,
  MailIcon,
  MyProfileIcon,
  PencilIcon,
  TelIcon,
} from "../icons/icons";

const AboutMeSection = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-12">
          <h2 className="flex items-center justify-center text-3xl font-extrabold text-black">
            <BaseLineIcon /> <span className="ml-2">ABOUT ME</span>
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-55 bg-black" />
          </div>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 text-left"
          style={{ fontFamily: "KakaoBigSans-ExtraBold" }}
        >
          <div className="flex items-start gap-3">
            <MyProfileIcon />
            <div>
              <p className="font-semibold text-gray-800">이름</p>
              <p className="text-sm text-gray-600">이경민</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarIcon />
            <div>
              <p className="font-semibold text-gray-800">생년월일</p>
              <p className="text-sm text-gray-600">98.02.24</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LocationIcon />
            <div>
              <p className="font-semibold text-gray-800">위치</p>
              <p className="text-sm text-gray-600">울산광역시 남구</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <TelIcon />
            <div>
              <p className="font-semibold text-gray-800">연락처</p>
              <p className="text-sm text-gray-600">010-4015-2439</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MailIcon />
            <div>
              <p className="font-semibold text-gray-800">이메일</p>
              <p className="text-sm text-gray-600 break-all">
                zzxx66052@naver.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PencilIcon />
            <div>
              <p className="font-semibold text-gray-800">학력</p>
              <p className="text-sm text-gray-600">
                울산과학대학교
                <br />
                (컴퓨터정보학부)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
