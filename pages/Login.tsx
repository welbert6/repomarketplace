
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-background-dark animate-fade-in">
      <div className="w-full max-w-sm bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        
        <div className="px-8 pt-10 pb-6 text-center">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary">
            <span className="material-icons-round text-3xl">handyman</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">ProConnect</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">O marketplace para profissionais locais.</p>
        </div>

        <div className="px-8 mb-8">
          <div className="relative bg-gray-100 dark:bg-black/20 p-1 rounded-lg flex">
            <button className="flex-1 py-2 text-sm font-medium rounded-md shadow-sm bg-white dark:bg-background-dark text-gray-900 dark:text-white transition-all duration-200">
              Entrar
            </button>
            <button className="flex-1 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200">
              Cadastrar
            </button>
          </div>
        </div>

        <div className="px-8 pb-10">
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-5">
            <div className="group">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Endereço de Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons-round text-gray-400 text-lg group-focus-within:text-secondary">mail</span>
                </div>
                <input 
                  type="email" 
                  placeholder="nome@exemplo.com"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-black/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons-round text-gray-400 text-lg group-focus-within:text-secondary">lock</span>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-black/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" className="text-gray-400 hover:text-gray-500">
                    <span className="material-icons-round text-lg">visibility</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a href="#" className="text-sm font-medium text-secondary hover:text-secondary/80">
                Esqueceu a senha?
              </a>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg font-semibold transition-all transform active:scale-[0.98]"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      
      <p className="mt-8 text-xs text-gray-400 dark:text-gray-500">
        © 2024 ProConnect Inc. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Login;
