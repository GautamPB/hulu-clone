import Image from 'next/image'

const Header = () => {
    return (
        <header className="header">
            <h1>This is the header</h1>
            <Image
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
