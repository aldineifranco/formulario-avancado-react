import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function App() {
  const { register, handleSubmit } = useForm()
  const [ output, setOutput ] = useState('')

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='h-screen bg-zinc-100 flex items-center justify-center flex-col gap-8'>
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-6 w-full max-w-xs'>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3" {...register('email')} />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3" {...register('password')} />
        </div>

        <button
          type='submit'
          className="bg-emerald-600 rounded font-semibold text-white h-10 hover:bg-emerald-500"
        >
          Salvando
        </button>

      </form>
      {output} - parei em 25:00
    </main>
  )
}