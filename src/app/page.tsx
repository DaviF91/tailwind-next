import { SettingsTabs } from "./components/SettingsTabs";
import  {InputControl, InputPrefix, InputRoot} from './components/Input'
import * as FileInput from './components/form/FileInput';
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900'>Setings</h1>

     <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details herer</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50" type="button">Cancel</button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" type="submit" form="settings">Save</button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200" action="">
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Davi"/>
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Ferreira"/>
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email adress</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500"/>
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue="daviferreiraaew@gmail.com"/>
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 ">
              Your photo
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">This mill be displayed on your progile.</span>
            </label>
            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control/>
              </FileInput.Root>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <InputRoot>
              <InputControl id="role"  defaultValue="CTO"/>
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 ">
              Bio
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Write a short introduction.</span>
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 ">
              Portifolio projects
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Share a few snippets of your work.</span>
            </label>
            <div>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.Control multiple/>
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50" type="button">Cancel</button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" type="submit" >Save</button>
          </div>
        </form>
      </div>
    </>
  )
}
