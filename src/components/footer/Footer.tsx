function Footer() {

    let data = new Date().getFullYear()

    return (
        
        <div className="flex justify-center rounded-2xl w-full px-2 bg-white text-slate-400 py-4 mt-auto border-t border-stone-200">
            <div className="container flex flex-col items-center gap-2">
                <p className='text-base font-bold text-center md:text-xl'>River Technology © {data} All Rights Reserved.</p>
            </div>
        </div>
        
    )
}

export default Footer