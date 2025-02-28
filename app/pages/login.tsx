import useKaKao from "~/hooks/useKaKao";
import {useEffect} from "react";

export default function login() {
  const { login } = useKaKao();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
  }, []);

  return (
    <div>
      <button onClick={login} type='button'>카카오 간편 로그인</button>
    </div>
  );
}
