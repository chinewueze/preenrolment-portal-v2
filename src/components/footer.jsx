export const Footer = () => {
    return (
        <footer className=' w-screen  absolute bottom-0'>
            <div className=" w-full bg-neutral-100 ">
                <h3 className="text-center"> Copyright &copy; Designed for Plateau State Contributory Health Care Management Agency by <a href="https://instantdeposit.africa/" target="_blank" className="font-semibold text-lg" > Instant Deposit Ltd</a>. All Rights Reserved. {new Date().getFullYear()}.</h3>
            </div>
        </footer>
    )
}   