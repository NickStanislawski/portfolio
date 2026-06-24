import { useEffect } from "react";
import { useNavigate, useLocation, Outlet, useParams, useMatch } from "react-router-dom";
import ScrollToTop from "../Utilities/ScrollToTop";
import useQueryStore from "../Services/store";

const Layout = () => {
  const reload = useQueryStore((state) => state.reload);
  const user = useQueryStore((state) => state.user);
  const setReferralCode = useQueryStore((state) => state.setReferralCode);
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch("/referral/:slug");
  const params = useParams();

    useEffect(() => {
    if (match) {
      const slug = params.slug || match.params.slug;
      if (slug) {
        setReferralCode(slug);
      }
    }
  }, []);

  useEffect(() => {
    const hasCreatedAccount = localStorage.getItem("hasCreatedAccount");

    const isFirstTime = !hasCreatedAccount && !user;

    if (
      isFirstTime &&
      location.pathname !== "/welcome" &&
      location.pathname !== "/createaccount" &&
      location.pathname !== "/login"
    ) {
      navigate("/welcome", { replace: true });
    }

    // if they log in or create an account, mark it
    if (user && !hasCreatedAccount) {
      localStorage.setItem("hasCreatedAccount", "true");
    }
  }, [navigate, location.pathname, user]);

  return (
    <>
      <ScrollToTop />
      {/* <NavBar />  */}
      <Outlet key={reload ? "reload-true" : "reload-false"} />
    </>
  );
};

export default Layout;