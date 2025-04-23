import Image from "next/image";

export const LanguageIcon = () => (
  <Image
    src="/images/language.png"
    alt="Language Icon"
    width={30}
    height={30}
  />
);

export const FrontendIcon = () => (
  <div className="w-[30px] h-[30px] flex items-center justify-center">
    <Image
      src="/images/frontEnd.png"
      alt="Frontend Icon"
      width={30}
      height={30}
    />
  </div>
);

export const BackendIcon = () => (
  <Image src="/images/backEnd.png" alt="Backend Icon" width={30} height={30} />
);

export const DevOpsIcon = () => (
  <Image src="/images/devOps.png" alt="DevOps Icon" width={30} height={30} />
);

export const UpArrowIcon = () => (
  <Image src="/images/upArrow.png" alt="UpArrow Icon" width={30} height={30} />
);

export const CloverIcon = () => (
  <Image src="/images/clover.png" alt="Clover Icon" width={30} height={30} />
);
