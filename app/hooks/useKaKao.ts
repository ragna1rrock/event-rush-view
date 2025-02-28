import * as process from "node:process";

const useKaKao = () => {
  const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

  const login = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  };

  return {
    login
  }

}
export default useKaKao;