interface ItemsNavbarResponsiveProps {

}
export default function ItemsNavbarResponsive(props: ItemsNavbarResponsiveProps) {
    return (
        <div className="flex flex-col gap-3 text-textColor font-medium items-center ">
            <span>Explore</span>
            <span>Solutions</span>
            <span>About</span>
            <span>Blog</span>
            <span>Log In</span>
            <button className="p-2 px-4 text-white font-light rounded-[1.125rem] bg-backgroundButton">Start Now</button>
        </div>
    )
}