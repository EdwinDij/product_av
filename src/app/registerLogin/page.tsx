"use client"
import { useRegisterLogin } from "./useRegisterLogin";

export default function Page() {
  const {
    login,
    register,
    registerForm,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setRegisterForm,
    setUsername,
  } = useRegisterLogin();

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col  border-slate-500/40 shadow-md border p-20 rounded-xl">
        <div className="flex justify-between items-center mb-6 gap-6 ">
          <button
            type="button"
            className="text-1xl font-bold mb-6 hover:text-indigo-500"
            onClick={() => setRegisterForm(true)}
          >
            Créer un compte
          </button>
          <button
            type="button"
            className="text-1xl font-bold mb-6 hover:text-indigo-500"
            onClick={() => setRegisterForm(false)}
          >
            Se connecter
          </button>
        </div>
        {registerForm === true ? (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">Nom d{"'"}utilisateur</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password-confirm">Confirmer le mot de passe</label>
            <input
              type="password"
              name="password-confirm"
              id="password-confirm"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button
              className="bg-indigo-500 text-white p-2 rounded mt-4 w-full "
              onClick={register}
            >
              S{"'"}inscrire
            </button>
            <button className="border-2 border-indigo-500 text-inherit p-2 rounded mt-4 w-full">
              S{"'"}inscrire avec Google
            </button>
          </>
        ) : (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Mot de passe oublié ?</p>

            <button
              className="bg-indigo-500 text-white p-2 rounded mt-4 w-full "
              onClick={login}
            >
              Se connecter
            </button>
            <button className="border-2 border-indigo-500 text-inherit p-2 rounded mt-4 w-full">
              Se connecter avec Google
            </button>
          </>
        )}
      </form>
    </div>
  );
}
