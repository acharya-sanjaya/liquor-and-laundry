import {useNavigate} from "@remix-run/react";

const useTravel = (href: string) => {
  const navigate = useNavigate();
  const visit = () => {
    if (!href) return;
    navigate(href);
  };

  return visit;
};

export default useTravel;
