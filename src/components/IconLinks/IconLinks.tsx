export const IconLinks = () => {
  return (
    <div className="flex items-center gap-2">
        <a href="https://tailwind-css-cheat-sheet.alchie.cc" target="_blank" className="block items-center gap-2 w-8 p-1.5 rounded-full bg-gray-200">
                  <img src="/images/globe-mark.svg" alt="Website" className="object-contain" width={98} height={96}/>
                </a>
                <a href="https://github.com/chesteralan/tailwind-css-cheat-sheet-chrome-extension" target="_blank" className="block items-center gap-2 w-8 p-1.5 rounded-full bg-gray-200">
                  <img src="/images/github-mark.svg" alt="GitHub" className="object-contain" width={98} height={96}/>
                </a>
    </div>
  )
}