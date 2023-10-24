interface ItemsNavbarProps {

}
export default function ItemsNavbar(props: ItemsNavbarProps) {
    return (
        <div className="flex flex-row gap-3 text-textColor font-medium items-center transition-all">
            <span className="cursor-pointer hover:text-textSecundaryColor">Explore</span>
            <span className="cursor-pointer hover:text-textSecundaryColor">Solutions</span>
            <span className="cursor-pointer hover:text-textSecundaryColor">About</span>
            <span className="cursor-pointer hover:text-textSecundaryColor">Blog</span>
            <span className="cursor-pointer hover:text-textSecundaryColor">Log In</span>
            <button className="p-2 px-4 text-white border-2 border-transparent hover:border-backgroundButton hover:bg-transparent hover:text-textColor transition-all font-light rounded-[1.125rem] bg-backgroundButton">Start Now</button>
        </div>
    )
}