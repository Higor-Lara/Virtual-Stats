import React, { FormEvent, useCallback, useRef } from 'react';
import { HiMail } from 'react-icons/hi';
import { RiKey2Fill } from 'react-icons/ri';
import { Container, Input } from './style';
import logoAzul from '../../assets/images/Logo4.png';
import miniLogo from '../../assets/images/miniLogo.png';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async (e: FormEvent): Promise<void> => {
      e.preventDefault();

      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      if (!email || !password) {
        return;
      }

      await signIn({ email, password });
    },
    [signIn],
  );

  return (
    <Container>
      <img src={logoAzul} alt="logo" />
      <form onSubmit={handleLogin} className="container-login">
        <p>Login</p>
        <Input>
          <HiMail />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            className="input-login"
            required
          />
        </Input>
        <Input>
          <RiKey2Fill />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Senha"
            className="input-login"
            required
          />
        </Input>
        <div>
          <input type="checkbox" name="remenber" id="remenber" />
          <label htmlFor="remenber">Lembre-se de mim</label>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div id="rodape">
        <div className="text-rodape">
          <p>© Copyright</p>
          <p>Virtual Stats</p>
          <p>. Todos Direitos Reservados</p>
        </div>
        <div className="img-rodape">
          <img src={miniLogo} alt="img-rodape" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
