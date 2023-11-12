interface SidebarItemProps {
    children: React.ReactNode,
    label: string
}

const SidebarItem = ({children, label}: SidebarItemProps) => {
  return (
    <button className="hover:bg-gray-100 w-full text-gray-400 flex justify-start items-center py-2 px-4 rounded my-2">
        {children}
        <p className="">{label}</p>
    </button>
  )
}

export default SidebarItem