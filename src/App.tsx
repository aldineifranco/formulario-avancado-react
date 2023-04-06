import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function App() {
  const { register, handleSubmit } = useForm()
  const [ output, setOutput ] = useState('')

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='h-screen flex items-center justify-center flex-col gap-8 bg-slate-900'>
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-6 w-full max-w-xs bg-slate-800 px-4 py-8 rounded text-white'>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3 text-slate-600" {...register('email')} />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3 text-slate-600" {...register('password')} />
        </div>

        <button
          type='submit'
          className="bg-emerald-600 rounded font-semibold text-white h-10 hover:bg-emerald-500"
        >
          Salvando
        </button>

      </form>
      <div className='text-white px-10 text-center'>
        {output} 
         - parei em 25:00</div>
    </main>
  )
}